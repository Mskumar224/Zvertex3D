import { Link, NavLink, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { ArrowUpRight, Menu, X, LogIn, Store } from "lucide-react";
=======
import { ArrowUpRight, Menu, X, LogIn, Store, Rocket } from "lucide-react";
>>>>>>> 6749823fb1f85adf6e3b7e3523847c8ec5eea842
import { useState } from "react";
export default function Navbar(){
 const [open,setOpen]=useState(false); const navigate=useNavigate(); const token=localStorage.getItem("zv_token");
 const logout=()=>{localStorage.removeItem("zv_token");localStorage.removeItem("zv_user");navigate("/");setOpen(false)};
 const links=[["Marketplace","/marketplace"],["How it works","/#how-it-works"],["For vendors","/vendor/register"],["Future Projects","/future-projects"]];
 return <header className="nav-wrap"><nav className="nav container"><Link className="brand" to="/" onClick={()=>setOpen(false)}><img className="brand-logo" src="/zvertex-logo.png" alt="Zvertex3D"/></Link><div className={`nav-links ${open?"is-open":""}`}>{links.map(([label,href])=>href.startsWith("/#")?<a key={label} href={href} onClick={()=>setOpen(false)}>{label}</a>:<NavLink key={label} to={href} onClick={()=>setOpen(false)}>{label}</NavLink>)}{token?<><NavLink to="/vendor/dashboard" onClick={()=>setOpen(false)}><Store size={15}/> Dashboard</NavLink><button className="nav-logout" onClick={logout}>Log out</button></>:<NavLink to="/login" onClick={()=>setOpen(false)}><LogIn size={15}/> Sign in</NavLink>}<Link className="nav-cta" to="/configure" onClick={()=>setOpen(false)}>Start a print <ArrowUpRight size={16}/></Link></div><button className="mobile-menu" onClick={()=>setOpen(v=>!v)} aria-label="Menu">{open?<X/>:<Menu/>}</button></nav></header>;
}
