import { useLocation, Link } from "react-router-dom";
import { ArrowRight, MapPin, Star, Store as StoreIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getVendors, placeOrder } from "../services/api";

export default function Marketplace() {
  const location = useLocation();
  const { asset, form, estimate } = location.state || {};
  const [vendors, setVendors] = useState([]);
  const [selected, setSelected] = useState(null);
  const [customer, setCustomer] = useState({ name: "", email: "", phone: "", address: "" });
  const [placed, setPlaced] = useState(null);

  useEffect(() => { getVendors().then(r=>setVendors(r.data)).catch(()=>{}); }, []);

  const submit = async () => {
    if (!asset || !selected) return alert("Select a vendor and generate a model first.");
    if (!customer.name || !customer.email || !customer.phone) return alert("Please enter your contact details.");
    try {
      const r = await placeOrder({ customer, assetId: asset.id, vendorId: selected._id, configuration: form, estimatedPrice: estimate });
      setPlaced(r.data);
    } catch (e) { alert(e.response?.data?.message || "Order could not be placed."); }
  };

  if (placed) return <section className="center-page"><div className="success-card"><div className="success-icon">✓</div><div className="eyebrow">ORDER RECEIVED</div><h1>You're in the queue.</h1><p className="muted">Order <strong>#{placed.orderNumber}</strong> has been sent to {selected.name}. You'll receive updates at {customer.email}.</p><Link className="button primary" to="/">Back to Zvertex3D</Link></div></section>;

  return (
    <section className="section marketplace-page">
      <div className="container">
        <div className="builder-head"><div><div className="eyebrow">MANUFACTURING NETWORK</div><h1>Choose your maker.</h1><p className="muted">Only approved Zvertex3D vendors are published here. Compare verified makers and send your configured job directly to one.</p></div><span className="price-pill">Estimate · ₹{Number(estimate||0).toLocaleString("en-IN")}</span></div>
        <div className="market-layout">
          <div className="vendor-list">
            {vendors.map(v => <button className={`vendor-card ${selected?._id===v._id?"selected":""}`} key={v._id} onClick={()=>setSelected(v)}>
              <div className="vendor-avatar">{(v.storeName||v.name||"V").slice(0,1).toUpperCase()}</div>
              <div className="vendor-main"><div className="vendor-title"><strong>{v.storeName || v.name}</strong>{v.featured && <span className="featured">FEATURED</span>}</div><p>{v.tagline || "Verified digital manufacturing partner"}</p><span className="vendor-meta"><MapPin size={13}/> {v.city || "India"} · <Star size={13}/> {v.rating?.toFixed?.(1) || "5.0"}</span></div>
              <ArrowRight/>
            </button>)}
            {!vendors.length && <div className="empty-card">No approved vendors are available yet.</div>}
          </div>

          <aside className="order-summary">
            <div className="summary-top"><StoreIcon/><span>ORDER DETAILS</span></div>
            <h3>Your custom job</h3>
            <div className="summary-line"><span>Material</span><strong>{form?.material || "—"}</strong></div>
            <div className="summary-line"><span>Size</span><strong>{form ? `${form.width} × ${form.depth} × ${form.height} mm` : "—"}</strong></div>
            <div className="summary-line"><span>Quantity</span><strong>{form?.quantity || 1}</strong></div>
            <div className="summary-total"><span>Estimated total</span><strong>₹{Number(estimate||0).toLocaleString("en-IN")}</strong></div>
            <input placeholder="Full name" value={customer.name} onChange={e=>setCustomer({...customer,name:e.target.value})}/>
            <input placeholder="Email" type="email" value={customer.email} onChange={e=>setCustomer({...customer,email:e.target.value})}/>
            <input placeholder="Phone" value={customer.phone} onChange={e=>setCustomer({...customer,phone:e.target.value})}/>
            <textarea placeholder="Delivery address (optional)" value={customer.address} onChange={e=>setCustomer({...customer,address:e.target.value})}/>
            <button className="button primary full" disabled={!selected || !asset} onClick={submit}>Place manufacturing request <ArrowRight size={17}/></button>
            <small className="muted">Payment can be connected to Razorpay after vendor quote/confirmation.</small>
          </aside>
        </div>
      </div>
    </section>
  );
}