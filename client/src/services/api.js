import axios from "axios";

const LOCAL_API_URL = "http://localhost:5000/api";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4ff7eff4da625b0aa81943bb92486aeaeca350f5
>>>>>>> bfa6eea49934b7beb4ebc42a1ae246db25ad53c1
>>>>>>> a6a3db8e95390c1e7f8a89f32fc719b550f6b66b
>>>>>>> 6749823fb1f85adf6e3b7e3523847c8ec5eea842
>>>>>>> 5fe4c532631c49952bf7e16bbac69a863f154676
>>>>>>> f5f7d408740acf640b490ad955179b89f222a19c
const PRODUCTION_API_URL = "https://zvertex3d-api.onrender.com/api";
const configuredApiUrl = (import.meta.env.VITE_API_URL || "").trim();
const API_BASE_URL = configuredApiUrl || (import.meta.env.DEV ? LOCAL_API_URL : PRODUCTION_API_URL);

const API = axios.create({ baseURL: API_BASE_URL.replace(/\/$/, ""), timeout: 30000 });
API.interceptors.request.use(config => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
const DEFAULT_PRODUCTION_API_URL = "https://zvertex3d-api.onrender.com/api";

const configuredApiUrl = (import.meta.env.VITE_API_URL || "").trim();
const API_BASE_URL = configuredApiUrl || (import.meta.env.DEV ? LOCAL_API_URL : DEFAULT_PRODUCTION_API_URL);

const API = axios.create({
  baseURL: API_BASE_URL.replace(/\/$/, ""),
  timeout: 30000,
});

API.interceptors.request.use((config) => {
>>>>>>> 198dc3267cce374489a058aa74e737c1402dcabb
>>>>>>> 4ff7eff4da625b0aa81943bb92486aeaeca350f5
>>>>>>> bfa6eea49934b7beb4ebc42a1ae246db25ad53c1
>>>>>>> a6a3db8e95390c1e7f8a89f32fc719b550f6b66b
>>>>>>> 6749823fb1f85adf6e3b7e3523847c8ec5eea842
>>>>>>> 5fe4c532631c49952bf7e16bbac69a863f154676
>>>>>>> f5f7d408740acf640b490ad955179b89f222a19c
  const token = localStorage.getItem("zv_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4ff7eff4da625b0aa81943bb92486aeaeca350f5
>>>>>>> bfa6eea49934b7beb4ebc42a1ae246db25ad53c1
>>>>>>> a6a3db8e95390c1e7f8a89f32fc719b550f6b66b
>>>>>>> 6749823fb1f85adf6e3b7e3523847c8ec5eea842
>>>>>>> 5fe4c532631c49952bf7e16bbac69a863f154676
>>>>>>> f5f7d408740acf640b490ad955179b89f222a19c
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
export const signup = (data) => API.post("/auth/signup", data);
export const registerVendor = (data) => API.post("/auth/vendor/register", data);
export const login = (data) => API.post("/auth/login", data);
export const getMe = () => API.get("/auth/me");
export const getVendors = (params = {}) => API.get("/vendors", { params });
export const getStore = (slug) => API.get(`/vendors/store/${slug}`);
export const updateVendor = (id, data) => API.patch(`/vendors/${id}`, data);
export const convertImageToStl = (file, options) => {
  const body = new FormData();
  body.append("image", file);
  Object.entries(options || {}).forEach(([k, v]) => body.append(k, v));
  return API.post("/models/heightmap", body, { headers: { "Content-Type": "multipart/form-data" } });
};
export const getAsset = (id) => API.get(`/models/${id}`);
export const placeOrder = (data) => API.post("/orders", data);
export const getVendorOrders = () => API.get("/orders/vendor");
export const getAdminVendors = () => API.get("/admin/vendors");
export const setVendorStatus = (id, data) => API.patch(`/admin/vendors/${id}/status`, data);
export const setVendorFeatured = (id, featured) => API.patch(`/admin/vendors/${id}/featured`, { featured });
>>>>>>> 198dc3267cce374489a058aa74e737c1402dcabb
>>>>>>> 4ff7eff4da625b0aa81943bb92486aeaeca350f5
>>>>>>> bfa6eea49934b7beb4ebc42a1ae246db25ad53c1
>>>>>>> a6a3db8e95390c1e7f8a89f32fc719b550f6b66b
>>>>>>> 6749823fb1f85adf6e3b7e3523847c8ec5eea842
>>>>>>> 5fe4c532631c49952bf7e16bbac69a863f154676
>>>>>>> f5f7d408740acf640b490ad955179b89f222a19c
export default API;
