import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Landing from "../layout/Landing";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Dashboard from "../pages/Dashboard";

export const RouterProvider = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="services" element={<Services/>}/>
                    <Route path="contact" element={<Contact/>}/>
                </Route>
                <Route path="signup" element={<Signup/>}/>
                <Route path="signin" element={<Signin/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    );
}