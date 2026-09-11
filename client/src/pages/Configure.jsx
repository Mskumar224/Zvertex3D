import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Download, LoaderCircle, Ruler, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Dropzone from "../components/Dropzone";
import ModelViewer from "../components/ModelViewer";
import { convertImageToStl, getVendors } from "../services/api";
import { useEffect } from "react";

const materials = [
  ["PLA", "Best for prototypes & decorative parts", 1],
  ["PETG", "Tougher parts & functional use", 1.35],
  ["ABS", "Heat resistance & engineering", 1.55],
  ["Resin", "High-detail display pieces", 1.8]
];

export default function Configure() {
  const [file, setFile] = useState(null);
  const [asset, setAsset] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ width: 100, depth: 100, height: 8, material: "PLA", finish: "Standard", quantity: 1, vendorId: "" });
  const [vendors, setVendors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { getVendors({ featured: true }).then(r => setVendors(r.data)).catch(() => {}); }, []);

  const materialFactor = materials.find(m => m[0] === form.material)?.[2] || 1;
  const estimate = useMemo(() => Math.max(299, Math.round((form.width * form.depth * 0.018 + form.height * 22) * materialFactor * form.quantity)), [form, materialFactor]);

  const generate = async () => {
    if (!file) return alert("Please upload an image first.");
    setLoading(true);
    try {
      const res = await convertImageToStl(file, { width: form.width, depth: form.depth, height: form.height });
      setAsset(res.data);
    } catch (e) {
      alert(e.response?.data?.message || "Model generation failed.");
    } finally { setLoading(false); }
  };

  const change = (key, value) => setForm(f => ({ ...f, [key]: value }));

  return (
    <section className="builder-page">
      <div className="container">
        <div className="builder-head">
          <div><div className="eyebrow">MODEL BUILDER</div><h1>Create your printable model.</h1><p className="muted">Image → STL relief → customize → order.</p></div>
          <Link to="/" className="back-link"><ArrowLeft size={15}/> Back home</Link>
        </div>

        <div className="builder-layout">
          <aside className="builder-panel">
            <div className="step-label"><span>01</span> SOURCE IMAGE</div>
            {!file ? <Dropzone onFile={setFile}/> : <div className="uploaded-preview"><img src={URL.createObjectURL(file)} alt="source"/><div><strong>{file.name}</strong><small>{Math.round(file.size/1024)} KB</small></div><button onClick={() => {setFile(null);setAsset(null)}}>Change</button></div>}
            <div className="step-label"><span>02</span> MODEL SIZE</div>
            <div className="field-grid three">
              <label>Width (mm)<input type="number" value={form.width} min="20" max="300" onChange={e=>change("width", e.target.value)}/></label>
              <label>Depth (mm)<input type="number" value={form.depth} min="20" max="300" onChange={e=>change("depth", e.target.value)}/></label>
              <label>Relief (mm)<input type="number" value={form.height} min="1" max="30" step="0.5" onChange={e=>change("height", e.target.value)}/></label>
            </div>
            <button className="button primary full" onClick={generate} disabled={loading}>{loading ? <><LoaderCircle className="spin"/> Generating STL…</> : <>Generate 3D model <ArrowRight size={17}/></>}</button>

            <div className="step-label"><span>03</span> MATERIAL & FINISH</div>
            <div className="material-list">
              {materials.map(([name, desc]) => <button className={`material-option ${form.material===name ? "selected":""}`} key={name} onClick={()=>change("material",name)}><span><strong>{name}</strong><small>{desc}</small></span>{form.material===name && <Check size={18}/>}</button>)}
            </div>
            <label>Finish<select value={form.finish} onChange={e=>change("finish", e.target.value)}><option>Standard</option><option>Matte</option><option>Premium</option></select></label>
            <label>Quantity<input type="number" min="1" max="100" value={form.quantity} onChange={e=>change("quantity", Math.max(1, Number(e.target.value)))}/></label>

            <div className="price-card"><span>Estimated from</span><strong>₹{estimate.toLocaleString("en-IN")}</strong><small>Final quote may change by vendor, geometry and shipping.</small></div>
            <button className="button lime full" disabled={!asset} onClick={()=>navigate("/marketplace", {state:{asset, form, estimate}})}><ShoppingCart size={17}/> Choose a manufacturing partner</button>
          </aside>

          <div className="builder-stage">
            {asset ? <ModelViewer url={asset.stlUrl}/> : <div className="empty-viewer"><div className="ghost-cube"><Ruler size={42}/></div><h2>Your 360° preview lives here</h2><p>Upload an image and generate a model to inspect the relief from every angle.</p></div>}
            {asset && <div className="viewer-toolbar"><span><Check size={15}/> STL ready</span><a href={asset.stlUrl} download><Download size={15}/> Download STL</a><span>Asset {asset.id?.slice(-8)}</span></div>}
          </div>
        </div>
      </div>
    </section>
  );
}