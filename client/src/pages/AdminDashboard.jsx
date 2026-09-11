import { useEffect, useState } from "react";
import { Check, Eye, ShieldAlert, Store, ToggleLeft, ToggleRight } from "lucide-react";
import { getAdminVendors, setVendorFeatured, setVendorStatus } from "../services/api";
import { Link } from "react-router-dom";

export default function AdminDashboard(){
  const [vendors,setVendors]=useState([]);
  const load=()=>getAdminVendors().then(r=>setVendors(r.data)).catch(e=>alert(e.response?.data?.message||"Admin access required."));
  useEffect(load,[]);
  const status=async(id,status)=>{await setVendorStatus(id,{status});load()};
  const feature=async(v)=>{await setVendorFeatured(v._id,!v.featured);load()};
  return <section className="dashboard-page"><div className="container">
    <div className="dashboard-head"><div><div className="eyebrow">SUPER ADMIN</div><h1>Vendor control center.</h1><p className="muted">Approve, suspend, feature and review every vendor storefront.</p></div><div className="admin-badge"><ShieldAlert size={16}/> Protected</div></div>
    <div className="admin-table card"><div className="card-head"><h3><Store/> Vendor applications</h3><span className="badge">{vendors.length}</span></div>
      {vendors.map(v=><div className="vendor-row" key={v._id}><div className="vendor-avatar small">{(v.storeName||v.name).slice(0,1)}</div><div className="vendor-row-main"><strong>{v.storeName}</strong><span>{v.name} · {v.email} · {v.city||"—"}</span></div><span className={`status ${v.status}`}>{v.status}</span><span className={`status ${v.featured?"featured-status":""}`}>{v.featured?"Featured":"Standard"}</span><div className="row-actions"><Link to={`/store/${v.slug}`} target="_blank" className="icon-btn"><Eye size={15}/></Link>{v.status!=="approved"&&<button className="button small" onClick={()=>status(v._id,"approved")}><Check size={14}/> Approve</button>}{v.status==="approved"&&<button className="icon-btn" onClick={()=>status(v._id,"suspended")}><ToggleRight size={17}/></button>}{v.status==="suspended"&&<button className="icon-btn" onClick={()=>status(v._id,"approved")}><ToggleLeft size={17}/></button>}<button className="button small ghost" onClick={()=>feature(v)}>{v.featured?"Unfeature":"Feature"}</button></div></div>)}
      {!vendors.length&&<div className="empty-card">No vendors found.</div>}
    </div>
  </div></section>;
}