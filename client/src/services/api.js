import axios from "axios";

const LOCAL_API_URL = "http://localhost:5000/api";
const PRODUCTION_API_URL = "https://zvertex3d-api.onrender.com/api";
const configuredApiUrl = (import.meta.env.VITE_API_URL || "").trim();
const API_BASE_URL = configuredApiUrl || (import.meta.env.DEV ? LOCAL_API_URL : PRODUCTION_API_URL);

const API = axios.create({ baseURL: API_BASE_URL.replace(/\/$/, ""), timeout: 30000 });
API.interceptors.request.use(config => {
  const token = localStorage.getItem("zv_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const signup=data=>API.post("/auth/signup",data);
export const verifyEmail=token=>API.get(`/auth/verify-email/${encodeURIComponent(token)}`);
export const registerVendor=data=>API.post("/auth/vendor/register",data);
export const login=data=>API.post("/auth/login",data);
export const getMe=()=>API.get("/auth/me");
export const getVendors=(params={})=>API.get("/vendors",{params});
export const getStore=slug=>API.get(`/vendors/store/${slug}`);
export const updateVendor=(id,data)=>API.patch(`/vendors/${id}`,data);
export const convertImageToStl=(file,options)=>{const body=new FormData();body.append("image",file);Object.entries(options||{}).forEach(([k,v])=>body.append(k,v));return API.post("/models/heightmap",body,{headers:{"Content-Type":"multipart/form-data"}})};
export const getAsset=id=>API.get(`/models/${id}`);
export const placeOrder=data=>API.post("/orders",data);
export const getVendorOrders=()=>API.get("/orders/vendor");
export const getAdminVendors=()=>API.get("/admin/vendors");
export const setVendorStatus=(id,data)=>API.patch(`/admin/vendors/${id}/status`,data);
export const setVendorFeatured=(id,featured)=>API.patch(`/admin/vendors/${id}/featured`,{featured});
export default API;
