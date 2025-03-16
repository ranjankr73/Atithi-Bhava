import { createBrowserRouter, Route, createRoutesFromElements, Routes } from "react-router-dom";
import Home from "../pages/Home";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home/>}>

        </Route>
    )    
);