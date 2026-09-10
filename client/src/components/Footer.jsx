import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand"><img className="brand-logo" src="/zvertex-logo.png" alt="Zvertex3D" /></div>
          <p className="muted footer-copy">Digital manufacturing for prototypes, custom products and production-ready parts. Serving India and the USA.</p>
        </div>
        <div>
          <h4>Platform</h4>
          <Link to="/configure">Create a model</Link>
          <Link to="/marketplace">Marketplace</Link><Link to="/future-projects">Future Projects</Link>
          <Link to="/vendor/register">Become a vendor</Link>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#how-it-works">How it works</a>
          <Link to="/login">Account</Link>
          <Link to="/admin/login">Admin</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:zvertex3d@gmail.com"><Mail size={15}/> zvertex3d@gmail.com</a>
          <a href="tel:+918639684322"><Phone size={15}/> +91 86396 84322</a>
          <span><MapPin size={15}/> Hyderabad · India</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Zvertex3D. All rights reserved.</span>
        <span>Built for makers, brands & manufacturers.</span>
      </div>
    </footer>
  );
}