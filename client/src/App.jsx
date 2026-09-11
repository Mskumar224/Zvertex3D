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
<<<<<<< HEAD
import VerifyEmail from "./pages/VerifyEmail";
=======
<<<<<<< HEAD
import VerifyEmail from "./pages/VerifyEmail";
=======
<<<<<<< HEAD
import VerifyEmail from "./pages/VerifyEmail";
=======
<<<<<<< HEAD
import VerifyEmail from "./pages/VerifyEmail";
=======
<<<<<<< HEAD
import VerifyEmail from "./pages/VerifyEmail";
=======
<<<<<<< HEAD
import VerifyEmail from "./pages/VerifyEmail";
=======
<<<<<<< HEAD
import VerifyEmail from "./pages/VerifyEmail";
=======
>>>>>>> 198dc3267cce374489a058aa74e737c1402dcabb
>>>>>>> 4ff7eff4da625b0aa81943bb92486aeaeca350f5
>>>>>>> bfa6eea49934b7beb4ebc42a1ae246db25ad53c1
>>>>>>> a6a3db8e95390c1e7f8a89f32fc719b550f6b66b
>>>>>>> 6749823fb1f85adf6e3b7e3523847c8ec5eea842
>>>>>>> 5fe4c532631c49952bf7e16bbac69a863f154676
>>>>>>> f5f7d408740acf640b490ad955179b89f222a19c
import FutureProjects from "./pages/FutureProjects";
import VendorDashboard from "./pages/VendorDashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

export default function App() {
  return <div className="app-shell"><Navbar/><main className="main-content"><Routes>
<<<<<<< HEAD
    <Route path="/" element={<Home/>}/><Route path="/configure" element={<Configure/>}/><Route path="/marketplace" element={<Marketplace/>}/><Route path="/store/:slug" element={<Store/>}/><Route path="/future-projects" element={<FutureProjects/>}/><Route path="/vendor/register" element={<VendorRegister/>}/><Route path="/login" element={<Login/>}/><Route path="/signup" element={<Signup/>}/><Route path="/verify-email" element={<VerifyEmail/>}/><Route path="/vendor/dashboard" element={<VendorDashboard/>}/><Route path="/admin/login" element={<AdminLogin/>}/><Route path="/admin" element={<AdminDashboard/>}/><Route path="*" element={<NotFound/>}/>
=======
<<<<<<< HEAD
    <Route path="/" element={<Home/>}/><Route path="/configure" element={<Configure/>}/><Route path="/marketplace" element={<Marketplace/>}/><Route path="/store/:slug" element={<Store/>}/><Route path="/future-projects" element={<FutureProjects/>}/><Route path="/vendor/register" element={<VendorRegister/>}/><Route path="/login" element={<Login/>}/><Route path="/signup" element={<Signup/>}/><Route path="/verify-email" element={<VerifyEmail/>}/><Route path="/vendor/dashboard" element={<VendorDashboard/>}/><Route path="/admin/login" element={<AdminLogin/>}/><Route path="/admin" element={<AdminDashboard/>}/><Route path="*" element={<NotFound/>}/>
=======
<<<<<<< HEAD
    <Route path="/" element={<Home/>}/><Route path="/configure" element={<Configure/>}/><Route path="/marketplace" element={<Marketplace/>}/><Route path="/store/:slug" element={<Store/>}/><Route path="/future-projects" element={<FutureProjects/>}/><Route path="/vendor/register" element={<VendorRegister/>}/><Route path="/login" element={<Login/>}/><Route path="/signup" element={<Signup/>}/><Route path="/verify-email" element={<VerifyEmail/>}/><Route path="/vendor/dashboard" element={<VendorDashboard/>}/><Route path="/admin/login" element={<AdminLogin/>}/><Route path="/admin" element={<AdminDashboard/>}/><Route path="*" element={<NotFound/>}/>
=======
<<<<<<< HEAD
    <Route path="/" element={<Home/>}/><Route path="/configure" element={<Configure/>}/><Route path="/marketplace" element={<Marketplace/>}/><Route path="/store/:slug" element={<Store/>}/><Route path="/future-projects" element={<FutureProjects/>}/><Route path="/vendor/register" element={<VendorRegister/>}/><Route path="/login" element={<Login/>}/><Route path="/signup" element={<Signup/>}/><Route path="/verify-email" element={<VerifyEmail/>}/><Route path="/vendor/dashboard" element={<VendorDashboard/>}/><Route path="/admin/login" element={<AdminLogin/>}/><Route path="/admin" element={<AdminDashboard/>}/><Route path="*" element={<NotFound/>}/>
=======
<<<<<<< HEAD
    <Route path="/" element={<Home/>}/><Route path="/configure" element={<Configure/>}/><Route path="/marketplace" element={<Marketplace/>}/><Route path="/store/:slug" element={<Store/>}/><Route path="/future-projects" element={<FutureProjects/>}/><Route path="/vendor/register" element={<VendorRegister/>}/><Route path="/login" element={<Login/>}/><Route path="/signup" element={<Signup/>}/><Route path="/verify-email" element={<VerifyEmail/>}/><Route path="/vendor/dashboard" element={<VendorDashboard/>}/><Route path="/admin/login" element={<AdminLogin/>}/><Route path="/admin" element={<AdminDashboard/>}/><Route path="*" element={<NotFound/>}/>
=======
<<<<<<< HEAD
    <Route path="/" element={<Home/>}/><Route path="/configure" element={<Configure/>}/><Route path="/marketplace" element={<Marketplace/>}/><Route path="/store/:slug" element={<Store/>}/><Route path="/future-projects" element={<FutureProjects/>}/><Route path="/vendor/register" element={<VendorRegister/>}/><Route path="/login" element={<Login/>}/><Route path="/signup" element={<Signup/>}/><Route path="/verify-email" element={<VerifyEmail/>}/><Route path="/vendor/dashboard" element={<VendorDashboard/>}/><Route path="/admin/login" element={<AdminLogin/>}/><Route path="/admin" element={<AdminDashboard/>}/><Route path="*" element={<NotFound/>}/>
=======
<<<<<<< HEAD
    <Route path="/" element={<Home/>}/><Route path="/configure" element={<Configure/>}/><Route path="/marketplace" element={<Marketplace/>}/><Route path="/store/:slug" element={<Store/>}/><Route path="/future-projects" element={<FutureProjects/>}/><Route path="/vendor/register" element={<VendorRegister/>}/><Route path="/login" element={<Login/>}/><Route path="/signup" element={<Signup/>}/><Route path="/verify-email" element={<VerifyEmail/>}/><Route path="/vendor/dashboard" element={<VendorDashboard/>}/><Route path="/admin/login" element={<AdminLogin/>}/><Route path="/admin" element={<AdminDashboard/>}/><Route path="*" element={<NotFound/>}/>
=======
    <Route path="/" element={<Home/>}/><Route path="/configure" element={<Configure/>}/><Route path="/marketplace" element={<Marketplace/>}/><Route path="/store/:slug" element={<Store/>}/><Route path="/future-projects" element={<FutureProjects/>}/><Route path="/vendor/register" element={<VendorRegister/>}/><Route path="/login" element={<Login/>}/><Route path="/signup" element={<Signup/>}/>}/><Route path="/vendor/dashboard" element={<VendorDashboard/>}/><Route path="/admin/login" element={<AdminLogin/>}/><Route path="/admin" element={<AdminDashboard/>}/><Route path="*" element={<NotFound/>}/>
>>>>>>> 198dc3267cce374489a058aa74e737c1402dcabb
>>>>>>> 4ff7eff4da625b0aa81943bb92486aeaeca350f5
>>>>>>> bfa6eea49934b7beb4ebc42a1ae246db25ad53c1
>>>>>>> a6a3db8e95390c1e7f8a89f32fc719b550f6b66b
>>>>>>> 6749823fb1f85adf6e3b7e3523847c8ec5eea842
>>>>>>> 5fe4c532631c49952bf7e16bbac69a863f154676
>>>>>>> f5f7d408740acf640b490ad955179b89f222a19c
  </Routes></main><Footer/></div>;
}
