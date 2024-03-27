import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createBrowserRouter, createRoutesFromElements, Route,RouterProvider,} from "react-router-dom";
import RootLauout from "./Components/layout/RootLauout";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import About from "./Pages/About/About";
import Contacts from "./Pages/Contacts/Contacts";
import Login from "./Pages/login/Login";
import Signup from "./Pages/Signup/Signup";
import My_Account from "./Pages/MyAccount/My_Account";
import Cart from "./Pages/Cart/Cart";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  path="/" element={<RootLauout />}>
        <Route index  path="/" element={<Home/>}></Route>
        <Route  path="product" element={<Shop/>}></Route>
        <Route  path="about" element={<About/>}></Route>
        <Route  path="contacts" element={<Contacts/>}></Route>
        <Route  path="login" element={<Login/>}></Route>
        <Route  path="signup" element={<Signup/>}></Route>
        <Route  path="my_account" element={<My_Account/>}></Route>
        <Route  path="cart" element={<Cart/>}></Route>
      </Route>
    )
  );
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router={router} />);
