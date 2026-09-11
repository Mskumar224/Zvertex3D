import { Link } from "react-router-dom";
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
import { ArrowRight, Check, Layers3, Move3d, ShieldCheck, Sparkles, Zap, Bot, Cpu, GraduationCap, CircuitBoard, Rotate3d, Rocket} from "lucide-react";
import Dropzone from "../components/Dropzone"; import SectionHeading from "../components/SectionHeading"; import { useState } from "react";
const works=[['/works/robot-arm.svg','Industrial robot arm','Functional prototype'],['/works/stem-bot.svg','STEM learning robot','Classroom-ready robotics'],['/works/caricature.svg','Custom caricature','Made-to-order product'],['/works/prototype.svg','Engineering prototype','Rapid iteration'],['/works/drone-part.svg','Drone component','Lightweight parts'],['/works/medical.svg','MedTech enclosure','Custom-fit housing']];
export default function Home(){const[file,setFile]=useState(null);return <><section className="hero"><div className="hero-grid container"><div className="hero-copy"><div className="pill"><span className="status-dot"/> Digital manufacturing • Robotics • STEM</div><h1>Turn an idea into a <em>physical product.</em></h1><p className="hero-lead">Zvertex3D combines 3D printing, custom robotics and digital manufacturing into one production platform — from a first sketch to a functional prototype or classroom robot.</p><div className="hero-actions"><Link className="button primary large" to="/configure">Create a 3D model <ArrowRight size={18}/></Link><Link className="button ghost large" to="/future-projects">Explore future projects <Rocket size={17}/></Link></div><div className="trust-row"><span><Check size={15}/> Browser 360° preview</span><span><Check size={15}/> Approved vendor network</span><span><Check size={15}/> Custom robotics</span></div></div><div className="hero-card"><div className="hero-card-top"><span>QUICK START</span><span>01 / 03</span></div><h3>Start with your image</h3><p>Upload a high-contrast image and turn it into a printable relief model.</p><Dropzone compact={false} onFile={setFile}/>{file&&<div className="file-chip"><span>{file.name}</span><Check size={15}/></div>}<Link className="button primary full" to="/configure">Continue to model builder <ArrowRight size={17}/></Link><small>By continuing, you confirm you have rights to the uploaded content.</small></div></div></section><section className="stats-strip"><div className="container stats-grid"><div><strong>01</strong><span>Upload & convert</span></div><div><strong>02</strong><span>Customize & preview</span></div><div><strong>03</strong><span>Choose a maker</span></div><div><strong>04</strong><span>Order & track</span></div></div></section>
<section className="section work-showcase"><div className="container"><SectionHeading eyebrow="RECENTLY MADE • DYNAMIC" title="Ideas already becoming real." text="A living showcase of what Zvertex3D can build — from functional robotics to custom products."/><div className="works-marquee"><div className="works-track">{[...works,...works].map(([img,title,sub],i)=><article className="work-card" key={i}><img src={img} alt={title}/><div><strong>{title}</strong><span>{sub}</span></div></article>)}</div></div></div></section>
<section className="section stem-section"><div className="container stem-grid"><div><div className="eyebrow">ZVERTEX3D STEM ROBOTICS</div><h2>Don't just teach robotics. <em>Let students build one.</em></h2><p className="muted">Our customized STEM robots are designed around the learner — Class 1 through Class 10 — with age-appropriate electronics, coding, sensors, mechanics and project challenges. Schools can start with a guided classroom kit; advanced students can progress to chip-level experimentation and real-world automation.</p><div className="stem-chips"><span><GraduationCap/> Class 1–4</span><span><Bot/> Class 5–7</span><span><Cpu/> Class 8–10</span><span><CircuitBoard/> Chip-level tracks</span></div><Link className="button primary" to="/future-projects">Discover robotics roadmap <ArrowRight size={17}/></Link></div><div className="stem-panel"><div className="stem-orbit"><div className="stem-core"><Bot size={42}/><strong>BUILD</strong><small>CODE • TEST • CREATE</small></div><span className="orbit o1">Sensors</span><span className="orbit o2">Motors</span><span className="orbit o3">AI logic</span><span className="orbit o4">IoT</span></div></div></div><div className="container package-grid"><article><b>Explorer</b><span>Class 1–4</span><p>Safe low-voltage robot, block coding, movement, lights, sound and guided challenges.</p></article><article><b>Inventor</b><span>Class 5–7</span><p>Programmable motors, ultrasonic/IR sensors, line following, obstacle avoidance and modular experiments.</p></article><article><b>Engineer</b><span>Class 8–10</span><p>Microcontroller-based robotics, wireless control, sensor fusion, Python/C++ pathways and engineering projects.</p></article><article><b>Chip Lab</b><span>Advanced</span><p>Board-level exploration, GPIO, communication protocols, custom PCBs and application-specific robot builds.</p></article></div></section>
<section className="section" id="how-it-works"><div className="container"><SectionHeading eyebrow="THE ZVERTEX WORKFLOW" title="From pixels to production." text="A clean workflow designed around the moment a customer has an idea and wants to make it real."/><div className="process-grid">{[[Sparkles,"Upload","Drop a product photo, logo, artwork or high-contrast image."],[Layers3,"Generate","Our image-to-relief engine creates a printable STL heightmap."],[Move3d,"Configure","Set dimensions, material, finish and delivery preference."],[ShieldCheck,"Manufacture","Choose an approved vendor and place your order."]].map(([Icon,title,text])=><div className="process-card" key={title}><span><Icon/></span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
<section className="section section-dark"><div className="container split-feature"><div><div className="eyebrow">BUILT FOR SCALE</div><h2>One platform. Many manufacturers.</h2><p className="muted-light">Zvertex3D connects customers with approved manufacturing capacity while keeping quality, marketplace visibility and customer experience under one roof.</p><div className="check-list"><span><Check/> Vendor-specific storefronts</span><span><Check/> Centralized order workflow</span><span><Check/> Admin approval & moderation</span><span><Check/> Custom products and robotics jobs</span></div><Link className="button lime" to="/vendor/register">Build your store <ArrowRight size={17}/></Link></div><div className="network-visual"><div className="network-core">Z3D</div><div className="node n1">Maker A</div><div className="node n2">Maker B</div><div className="node n3">Maker C</div><div className="node n4">Customer</div></div></div></section><section className="section"><div className="container cta-banner"><div><div className="eyebrow">READY WHEN YOU ARE</div><h2>Make the next object.</h2><p className="muted">Start with one image. End with something you can hold.</p></div><Link className="button primary large" to="/configure">Open model builder <ArrowRight size={18}/></Link></div></section></>}
>>>>>>> 198dc3267cce374489a058aa74e737c1402dcabb
>>>>>>> 4ff7eff4da625b0aa81943bb92486aeaeca350f5
>>>>>>> bfa6eea49934b7beb4ebc42a1ae246db25ad53c1
>>>>>>> a6a3db8e95390c1e7f8a89f32fc719b550f6b66b
>>>>>>> 6749823fb1f85adf6e3b7e3523847c8ec5eea842
>>>>>>> 5fe4c532631c49952bf7e16bbac69a863f154676
>>>>>>> f5f7d408740acf640b490ad955179b89f222a19c
