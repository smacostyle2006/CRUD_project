// App.js
import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "../components/main/components/styles/App.css";
/* import AdminNav from './components/modules/Admin/modules/AdminNav.js';
import CrudNav from './components/modules/Admin/modules/CrudNav.js';
import CreateForm from './components/bar-form/CreateForm.js';*/
import Admin from "./products/App";
import UserInter from "./user/App";
import ProductDetailsInterface from "../components/front/components/details-interface";

function Navigation() {
  return (
    <>
      <div>
        <i></i>
        <nav>
          <Link to="/user">User</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </div>
      <div className="App">
        {/* Routes - like your HTML files but as components */}
        <Routes>
          <Route path="admin/*" element={<Admin />}></Route>
          <Route path="user/*" element={<UserInter />}></Route>
          <Route
            path="/user/:productId/*"
            element={<ProductDetailsInterface />}
          />
          {/* <Route path="read" element={<About />} />
          <Route path="update" element={<Contact />} />
          <Route path="delete" element={<Contact />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default Navigation;
