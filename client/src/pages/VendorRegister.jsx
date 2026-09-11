import { useState } from "react";
import { ArrowRight, Check, Store } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { registerVendor } from "../services/api";

export default function VendorRegister() {
  const [form,setForm]=useState({name:"",email:"",password:"",storeName:"",phone:"",city:"",tagline:"",description:""});
  const [done,setDone]=useState(false); const navigate=useNavigate();
  const submit=async e=>{e.preventDefault();try{await registerVendor(form);setDone(true)}catch(err){alert(err.response?.data?.message||"Registration failed.")}};
<<<<<<< HEAD
  if(done) return <section className="center-page"><div className="success-card"><div className="success-icon">✓</div><div className="eyebrow">APPLICATION RECEIVED</div><h1>Your store is in review.</h1><p className="muted">Zvertex3D will review your business details before publishing your storefront.</p><Link className="button primary" to="/login">Go to sign in</Link></div></section>;
=======
<<<<<<< HEAD
  if(done) return <section className="center-page"><div className="success-card"><div className="success-icon">✓</div><div className="eyebrow">APPLICATION RECEIVED</div><h1>Your store is in review.</h1><p className="muted">Zvertex3D will review your business details before publishing your storefront.</p><Link className="button primary" to="/login">Go to sign in</Link></div></section>;
=======
<<<<<<< HEAD
  if(done) return <section className="center-page"><div className="success-card"><div className="success-icon">✓</div><div className="eyebrow">APPLICATION RECEIVED</div><h1>Your store is in review.</h1><p className="muted">Zvertex3D will review your business details before publishing your storefront.</p><Link className="button primary" to="/login">Go to sign in</Link></div></section>;
=======
<<<<<<< HEAD
  if(done) return <section className="center-page"><div className="success-card"><div className="success-icon">✓</div><div className="eyebrow">APPLICATION RECEIVED</div><h1>Your store is in review.</h1><p className="muted">Zvertex3D will review your business details before publishing your storefront.</p><Link className="button primary" to="/login">Go to sign in</Link></div></section>;
=======
<<<<<<< HEAD
  if(done) return <section className="center-page"><div className="success-card"><div className="success-icon">✓</div><div className="eyebrow">APPLICATION RECEIVED</div><h1>Your store is in review.</h1><p className="muted">Zvertex3D will review your business details before publishing your storefront.</p><Link className="button primary" to="/login">Go to sign in</Link></div></section>;
=======
<<<<<<< HEAD
  if(done) return <section className="center-page"><div className="success-card"><div className="success-icon">✓</div><div className="eyebrow">APPLICATION RECEIVED</div><h1>Your store is in review.</h1><p className="muted">Zvertex3D will review your business details before publishing your storefront.</p><Link className="button primary" to="/login">Go to sign in</Link></div></section>;
=======
<<<<<<< HEAD
  if(done) return <section className="center-page"><div className="success-card"><div className="success-icon">✓</div><div className="eyebrow">APPLICATION RECEIVED</div><h1>Your store is in review.</h1><p className="muted">Zvertex3D will review your business details before publishing your storefront.</p><Link className="button primary" to="/login">Go to sign in</Link></div></section>;
=======
<<<<<<< HEAD
  if(done) return <section className="center-page"><div className="success-card"><div className="success-icon">✓</div><div className="eyebrow">APPLICATION RECEIVED</div><h1>Your store is in review.</h1><p className="muted">Zvertex3D will review your business details before publishing your storefront.</p><Link className="button primary" to="/login">Go to sign in</Link></div></section>;
=======
  if(done) return <section className="center-page"><div className="success-card"><div className="success-icon">✓</div><div className="eyebrow">APPLICATION RECEIVED</div><h1>Your store is in review.</h1><p className="muted">A confirmation email has been sent to you. Zvertex3D will review your application. Once approved, your store will automatically appear in the Marketplace.</p><Link className="button primary" to="/login">Go to sign in</Link></div></section>;
>>>>>>> 198dc3267cce374489a058aa74e737c1402dcabb
>>>>>>> 4ff7eff4da625b0aa81943bb92486aeaeca350f5
>>>>>>> bfa6eea49934b7beb4ebc42a1ae246db25ad53c1
>>>>>>> a6a3db8e95390c1e7f8a89f32fc719b550f6b66b
>>>>>>> 6749823fb1f85adf6e3b7e3523847c8ec5eea842
>>>>>>> 5fe4c532631c49952bf7e16bbac69a863f154676
>>>>>>> f5f7d408740acf640b490ad955179b89f222a19c
>>>>>>> 0e9e6f07bd68a8be2c5da3b5054c33dec9b12c54
  return <section className="auth-page"><div className="auth-card wide"><div className="auth-intro"><div className="brand-mark"><Store size={20}/></div><div className="eyebrow">VENDOR NETWORK</div><h1>Open your Zvertex3D store.</h1><p className="muted">Get a branded storefront, access manufacturing orders and let Zvertex3D handle marketplace discovery.</p><div className="check-list compact"><span><Check/> Store page on your own Zvertex3D URL</span><span><Check/> Manage products and orders</span><span><Check/> Admin-controlled approval</span></div></div>
    <form onSubmit={submit} className="form-stack"><div className="field-grid two"><label>Owner name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label><label>Business/store name<input required value={form.storeName} onChange={e=>setForm({...form,storeName:e.target.value})}/></label><label>Email<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label><label>Password<input required minLength="8" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/></label><label>Phone<input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/></label><label>City<input value={form.city} onChange={e=>setForm({...form,city:e.target.value})}/></label></div><label>Store tagline<input placeholder="e.g. Precision printing for product teams" value={form.tagline} onChange={e=>setForm({...form,tagline:e.target.value})}/></label><label>About your business<textarea rows="4" value={form.description} onChange={e=>setForm({...form,description:e.target.value})}/></label><button className="button primary full">Submit vendor application <ArrowRight size={17}/></button><small className="muted">Already approved? <Link to="/login">Sign in here.</Link></small></form>
  </div></section>;
}