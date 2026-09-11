import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin, Package, ShieldCheck, Star } from "lucide-react";
import { getStore } from "../services/api";

export default function Store() {
  const { slug } = useParams();
  const [vendor, setVendor] = useState(null);
  useEffect(()=>{getStore(slug).then(r=>setVendor(r.data)).catch(()=>setVendor(false))},[slug]);

  if (vendor === false) return <section className="center-page"><div className="empty-card"><h2>Store not found</h2><Link to="/marketplace">Browse makers</Link></div></section>;
  if (!vendor) return <section className="center-page"><div className="loader">Loading store…</div></section>;

  return <section className="store-page">
    <div className="store-hero"><div className="container store-hero-inner">
      <div className="store-logo"><img src="/zvertex-logo.png" alt="Zvertex3D" /></div>
      <div><div className="eyebrow">VERIFIED ZVERTEX3D VENDOR</div><h1>{vendor.storeName || vendor.name}</h1><p>{vendor.tagline}</p><div className="store-meta"><span><MapPin size={14}/> {vendor.city || "India"}</span><span><Star size={14}/> {vendor.rating?.toFixed?.(1)||"5.0"} rating</span><span><ShieldCheck size={14}/> Approved maker</span></div></div>
    </div></div>
    <div className="container store-content">
      <div><div className="section-heading"><div><div className="eyebrow">STORE</div><h2>Products & capabilities</h2></div></div>
        <div className="product-grid">{(vendor.products||[]).map(p=><div className="product-card" key={p._id}><div className="product-image">{p.image?<img src={p.image} alt={p.name}/>:<Package size={36}/>}</div><div className="product-body"><h3>{p.name}</h3><p>{p.description}</p><strong>From ₹{Number(p.price||0).toLocaleString("en-IN")}</strong></div></div>)}</div>
        {!vendor.products?.length && <div className="empty-card">This vendor is setting up their product catalog.</div>}
      </div>
      <aside className="store-side"><h3>Why buy here?</h3><span><CheckCircle2/> Zvertex3D approved</span><span><CheckCircle2/> Custom manufacturing</span><span><CheckCircle2/> Direct vendor communication</span><Link className="button primary full" to="/configure">Start a custom job <ArrowRight size={17}/></Link></aside>
    </div>
  </section>;
}