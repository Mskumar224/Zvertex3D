import { Link } from "react-router-dom";
import {
  ArrowRight, Check, Layers3, Move3d, ShieldCheck, Sparkles, Zap, Bot,
  Cpu, GraduationCap, CircuitBoard, HeartPulse, Building2,
  Tractor, Factory, Palette, Stethoscope, Cog, TimerReset
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const heroProjects = [
  { image: "/showcase/z-bot.png", label: "Robotics", title: "STEM & custom robots", text: "Build classroom-ready robots, functional mechanisms and application-specific machines." },
  { image: "/showcase/medical-tooth.jpg", label: "Medical", title: "Medical & dental models", text: "High-detail anatomical, dental and educational models for training and demonstration." },
  { image: "/showcase/jet-engine.jpg", label: "Engineering", title: "Engineering prototypes", text: "Turn complex mechanical ideas into tangible prototypes you can inspect, test and iterate." },
  { image: "/showcase/smart-city.jpg", label: "Architecture", title: "Scale models & sites", text: "Bring buildings, site plans and development concepts into the physical world." }
];

const categories = [
  { icon: GraduationCap, image: "/showcase/z-bot.png", title: "Educational & Functional Prototypes", text: "STEM kits, teaching aids, mechanisms and working prototypes." },
  { icon: Palette, image: "/showcase/heart-model.png", title: "Caricatures, Idols & Collectibles", text: "Custom figurines, display pieces, miniatures and gift products." },
  { icon: Stethoscope, image: "/showcase/medical-tooth.jpg", title: "Medical & Dental", text: "Anatomical models, dental teaching aids and medical demonstrations." },
  { icon: Tractor, image: "/showcase/site-model.jpg", title: "Agriculture", text: "Farm layouts, equipment concepts, irrigation and field-scale models." },
  { icon: Cog, image: "/showcase/jet-engine.jpg", title: "Engineering & Industrial", text: "Mechanical parts, assemblies, housings, jigs and test prototypes." },
  { icon: Building2, image: "/showcase/smart-city.jpg", title: "Architecture & Real Estate", text: "Property models, site plans, buildings and presentation models." },
  { icon: Bot, image: "/showcase/z-bot.png", title: "Robotics & Electronics", text: "Robot bodies, enclosures, mechanisms and custom hardware." },
  { icon: Factory, image: "/showcase/industrial-system.png", title: "Enterprise Needs", text: "Low-volume production, custom fixtures, replacement parts and product development." }
];

const featured = [
  ["/showcase/medical-tooth.jpg", "Dental teaching model", "Medical & Dental"],
  ["/showcase/z-bot.png", "Z-Bot robotics platform", "Robotics & STEM"],
  ["/showcase/jet-engine.jpg", "Jet engine cutaway", "Engineering"],
  ["/showcase/heart-model.png", "Anatomical heart model", "Medical Education"],
  ["/showcase/smart-city.jpg", "Smart site model", "Architecture"],
  ["/showcase/industrial-system.png", "Industrial system", "Enterprise"],
  ["/showcase/lung-model.jpg", "Lung anatomy model", "Medical Education"],
  ["/showcase/site-model.jpg", "Masterplan scale model", "Architecture"]
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const timer = setInterval(() => setHeroIndex((value) => (value + 1) % heroProjects.length), 5200);
    return () => clearInterval(timer);
  }, []);

  const activeHero = heroProjects[heroIndex];
  const filteredCategories = useMemo(() => {
    if (activeCategory === "All") return categories;
    return categories.filter((item) => item.title.includes(activeCategory));
  }, [activeCategory]);

  const categoryFilters = ["All", "Education", "Medical", "Engineering", "Enterprise"];

  return <>
    <section className="hero hero-v3">
      <div className="hero-glow hero-glow-one"/><div className="hero-glow hero-glow-two"/>
      <div className="container hero-v3-grid">
        <div className="hero-v3-copy">
          <div className="pill hero-pill"><span className="status-dot"/> 3D PRINTING · PROTOTYPING · DIGITAL MANUFACTURING</div>
          <h1>Make ideas <span>real.</span><br/>Not just digital.</h1>
          <p className="hero-lead">From medical models and engineering prototypes to robots, scale models and custom products — Zvertex3D turns concepts into accurate physical objects.</p>
          <div className="hero-actions"><Link className="button primary large" to="/configure">Start a project <ArrowRight size={18}/></Link><a className="button ghost large" href="#what-we-do">Explore what we do <Zap size={17}/></a></div>
          <div className="trust-row"><span><Check size={15}/> Custom-built</span><span><Check size={15}/> Small-batch ready</span><span><Check size={15}/> India-based</span></div>
          <div className="hero-metrics"><div><strong>8+</strong><span>use cases</span></div><div><strong>3D</strong><span>design → print</span></div><div><strong>1</strong><span>production partner</span></div></div>
        </div>

        <div className="hero-visual-card">
          <div className="hero-visual-image"><img key={activeHero.image} src={activeHero.image} alt={activeHero.title}/><div className="hero-image-shade"/><div className="hero-image-label"><span>{activeHero.label}</span><strong>{activeHero.title}</strong><small>{activeHero.text}</small></div><div className="hero-image-index">0{heroIndex + 1} / 0{heroProjects.length}</div></div>
          <div className="hero-dots">{heroProjects.map((project, index) => <button key={project.title} className={index === heroIndex ? "active" : ""} onClick={() => setHeroIndex(index)} aria-label={`Show ${project.title}`}/>)}</div>
          <div className="hero-upload-mini"><div><span className="mini-kicker">QUICK START</span><strong>Have a design already?</strong><small>Upload it and move directly into the model builder.</small></div><Link to="/configure" aria-label="Open model builder"><ArrowRight size={18}/></Link></div>
        </div>
      </div>
    </section>

    <section className="stats-strip stats-v3"><div className="container stats-grid"><div><strong>01</strong><span>Upload or describe</span></div><div><strong>02</strong><span>Design & configure</span></div><div><strong>03</strong><span>Print / prototype</span></div><div><strong>04</strong><span>Deliver & repeat</span></div></div></section>

    <section className="section category-section" id="what-we-do">
      <div className="container">
        <div className="section-heading category-heading"><div><div className="eyebrow">WHAT WE DO</div><h2>One platform. <em>Many possibilities.</em></h2></div><p>Choose the kind of physical outcome you need. We can help from concept and modelling through 3D printing and small-batch production.</p></div>
        <div className="category-filter">{categoryFilters.map((filter) => <button key={filter} className={activeCategory === filter ? "active" : ""} onClick={() => setActiveCategory(filter)}>{filter}</button>)}</div>
        <div className="category-grid">{filteredCategories.map(({ icon: Icon, image, title, text }) => <article className="category-card" key={title}><div className="category-image"><img src={image} alt={title}/><div className="category-icon"><Icon size={18}/></div></div><div className="category-body"><div><span className="category-kicker">ZVERTEX3D</span><h3>{title}</h3></div><p>{text}</p><Link to="/configure">Build something like this <ArrowRight size={15}/></Link></div></article>)}</div>
      </div>
    </section>

    <section className="section work-showcase dark-showcase"><div className="container"><div className="section-heading"><div><div className="eyebrow">REAL WORK · REAL OBJECTS</div><h2>Designed to be <em>held.</em></h2></div><p>Use these examples as starting points for your next project. Every object can be adapted to your size, function and application.</p></div><div className="works-marquee"><div className="works-track">{[...featured, ...featured].map(([img,title,sub],i)=><article className="work-card" key={`${title}-${i}`}><img src={img} alt={title}/><div><span>{sub}</span><strong>{title}</strong><small>3D printed · custom</small></div></article>)}</div></div></div></section>

    <section className="section process-v3"><div className="container"><div className="section-heading"><div><div className="eyebrow">HOW IT WORKS</div><h2>From screen to <em>something tangible.</em></h2></div><p>No complicated manufacturing language. Tell us what you need, review the result and move forward when it looks right.</p></div><div className="process-grid">{[[Sparkles,"Share the idea","Upload a reference, logo, image, STL or describe what you need."],[Layers3,"Design & prepare","We turn the requirement into a printable, usable model."],[Move3d,"Review & configure","Choose dimensions, material, finish and quantity."],[ShieldCheck,"Make & deliver","Print locally through our workflow and get it delivered."]].map(([Icon,title,text])=><div className="process-card" key={title}><span><Icon/></span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

    <section className="section stem-section"><div className="container stem-grid"><div><div className="eyebrow">EDUCATION + ROBOTICS</div><h2>Build the robot. <em>Then build the learner.</em></h2><p className="muted">Our STEM and robotics work combines 3D printed hardware with age-appropriate mechanics, electronics and coding. Schools and training centres can start simple and grow into advanced projects.</p><div className="stem-chips"><span><GraduationCap/> Class 1–4</span><span><Bot/> Class 5–7</span><span><Cpu/> Class 8–10</span><span><CircuitBoard/> Advanced</span></div><Link className="button primary" to="/future-projects">Explore robotics <ArrowRight size={17}/></Link></div><div className="stem-panel stem-photo-panel"><img src="/showcase/z-bot.png" alt="Zvertex3D STEM robot"/><div className="stem-photo-copy"><span>READY TO BUILD</span><strong>Z-Bot</strong><small>Mechanical · electronic · programmable</small></div></div></div></section>

    <section className="section medical-feature"><div className="container medical-feature-grid"><div className="medical-images"><img className="medical-main" src="/showcase/heart-model.png" alt="3D printed heart model"/><img className="medical-small" src="/showcase/medical-tooth.jpg" alt="3D printed dental model"/></div><div><div className="eyebrow">HIGH-DETAIL APPLICATIONS</div><h2>Precision where <em>details matter.</em></h2><p className="muted">Medical education, dental demonstration, anatomical models and engineering cutaways benefit from physical models that can be handled, explained and inspected from every angle.</p><div className="feature-list"><span><HeartPulse/> Anatomical & medical models</span><span><Stethoscope/> Dental & clinical education</span><span><Cog/> Mechanical cutaways & assemblies</span><span><TimerReset/> Rapid iteration for product teams</span></div><Link className="button primary" to="/configure">Discuss a model <ArrowRight size={17}/></Link></div></div></section>

    <section className="section section-dark"><div className="container split-feature"><div><div className="eyebrow">BUILT FOR SCALE</div><h2>One platform. Many manufacturers.</h2><p className="muted-light">Zvertex3D connects customers with approved manufacturing capacity while keeping quality, marketplace visibility and customer experience under one roof.</p><div className="check-list"><span><Check/> Vendor-specific storefronts</span><span><Check/> Centralized order workflow</span><span><Check/> Admin approval & moderation</span><span><Check/> Custom products and robotics jobs</span></div><Link className="button lime" to="/vendor/register">Build your store <ArrowRight size={17}/></Link></div><div className="network-visual"><div className="network-core">Z3D</div><div className="node n1">Maker A</div><div className="node n2">Maker B</div><div className="node n3">Maker C</div><div className="node n4">Customer</div></div></div></section>

    <section className="section cta-v3"><div className="container cta-banner"><div><div className="eyebrow">READY WHEN YOU ARE</div><h2>Bring the next idea to life.</h2><p className="muted">Upload a file, share a reference or start with a blank page.</p></div><Link className="button lime large" to="/configure">Start a project <ArrowRight size={18}/></Link></div></section>
  </>;
}
