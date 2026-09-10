import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Configure from "./pages/Configure";
import Marketplace from "./pages/Marketplace";
import Store from "./pages/Store";
import VendorRegister from "./pages/VendorRegister";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FutureProjects from "./pages/FutureProjects";
import VendorDashboard from "./pages/VendorDashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

export default function App() {
  return <div className="app-shell"><Navbar/><main className="main-content"><Routes>
    <Route path="/" element={<Home/>}/><Route path="/configure" element={<Configure/>}/><Route path="/marketplace" element={<Marketplace/>}/><Route path="/store/:slug" element={<Store/>}/><Route path="/future-projects" element={<FutureProjects/>}/><Route path="/vendor/register" element={<VendorRegister/>}/><Route path="/login" element={<Login/>}/><Route path="/signup" element={<Signup/>}/>}/><Route path="/vendor/dashboard" element={<VendorDashboard/>}/><Route path="/admin/login" element={<AdminLogin/>}/><Route path="/admin" element={<AdminDashboard/>}/><Route path="*" element={<NotFound/>}/>
  </Routes></main><Footer/></div>;
}
