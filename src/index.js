import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createBrowserRouter, createRoutesFromElements, Route,RouterProvider,} from "react-router-dom";
import RootLauout from "./Components/layout/RootLauout";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  path="/" element={<RootLauout />}>
        <Route index  path="/" element={<Home/>}></Route>
        <Route  path="product" element={<Shop/>}></Route>
      </Route>
    )
  );
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router={router} />);
