// App.js
import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
/* import '../../../styles/App.css'; 
import CrudNav from '../modules/CrudNav.js'; */
import Create from "./Create";
import Update from "./update/Update";
import ProductId from "./update/[update-id]";
import Delete from "./delete";

function CRUD() {
  let productId;
  return (
    <div>
      {/* Navigation - like your HTML nav but with Links */}
      <nav className="Head">
        <Link className="oke" to="/crud/create">
          Create
        </Link>
        <Link className="oke" to="/crud/read">
          Read
        </Link>
        <Link className="oke" to="/crud/update">
          Update
        </Link>
        <Link className="oke" to="/crud/delete">
          Delete
        </Link>
      </nav>
      {/* Routes - like your HTML files but as components */}
      <Routes>
        <Route path="create/*" element={<Create />} />
        <Route path="update/*" element={<Update />} />
        <Route path="product-update/:productId/*" element={<ProductId />} />
        {/*<Route path="update" element={<Contact />} /> */}
        <Route path="delete" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default CRUD;
