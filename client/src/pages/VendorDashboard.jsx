import { useEffect, useState } from "react";
<<<<<<< HEAD
import { ExternalLink, Package, Save, Store } from "lucide-react";
import { getMe, getVendorOrders, updateVendor } from "../services/api";
=======
<<<<<<< HEAD
import { ExternalLink, Package, Save, Store } from "lucide-react";
import { getMe, getVendorOrders, updateVendor } from "../services/api";
=======
import { ExternalLink, Package, Save, Store, Truck } from "lucide-react";
import { getMe, getVendorOrders, getStore, updateVendor } from "../services/api";
>>>>>>> 6749823fb1f85adf6e3b7e3523847c8ec5eea842
>>>>>>> 5fe4c532631c49952bf7e16bbac69a863f154676
import { Link } from "react-router-dom";

export default function VendorDashboard(){
  const [vendor,setVendor]=useState(null); const [orders,setOrders]=useState([]); const [form,setForm]=useState(null);
  useEffect(()=>{getMe().then(r=>{setVendor(r.data.vendor);setForm(r.data.vendor)}).catch(()=>{});getVendorOrders().then(r=>setOrders(r.data)).catch(()=>{})},[]);
  const save=async()=>{const r=await updateVendor(vendor._id,form);setVendor(r.data);setForm(r.data);alert("Store updated.")};
  if(!form) return <section className="center-page"><div className="loader">Loading dashboard…</div></section>;
  return <section className="dashboard-page"><div className="container">
    <div className="dashboard-head"><div><div className="eyebrow">VENDOR CONSOLE</div><h1>{form.storeName}</h1><p className="muted">Manage your storefront and incoming manufacturing jobs.</p></div><Link className="button ghost" to={`/store/${form.slug}`}><ExternalLink size={16}/> View store</Link></div>
    <div className="dashboard-grid">
      <div className="dashboard-main card"><div className="card-head"><h3><Store/> Store settings</h3><button className="button small primary" onClick={save}><Save size={14}/> Save</button></div>
        <div className="field-grid two"><label>Store name<input value={form.storeName||""} onChange={e=>setForm({...form,storeName:e.target.value})}/></label><label>Tagline<input value={form.tagline||""} onChange={e=>setForm({...form,tagline:e.target.value})}/></label><label>City<input value={form.city||""} onChange={e=>setForm({...form,city:e.target.value})}/></label><label>Phone<input value={form.phone||""} onChange={e=>setForm({...form,phone:e.target.value})}/></label></div><label>About<textarea rows="5" value={form.description||""} onChange={e=>setForm({...form,description:e.target.value})}/></label>
      </div>
      <div className="dashboard-side card"><div className="card-head"><h3><Package/> Orders</h3><span className="badge">{orders.length}</span></div>{orders.slice(0,8).map(o=><div className="mini-order" key={o._id}><div><strong>#{o.orderNumber}</strong><small>{o.status}</small></div><strong>₹{Number(o.estimatedPrice||0).toLocaleString("en-IN")}</strong></div>)}{!orders.length&&<p className="muted">No orders yet. Your storefront will appear once approved.</p>}</div>
    </div>
  </div></section>
}