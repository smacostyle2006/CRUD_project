// App.js
import React, { useState } from "react";
/* import '../../../styles/App.css'; 
import AdminNav from '../../Admin/modules/AdminNav.js';
import CrudNav from '../../Admin/modules/CrudNav.js'; 
import CreateForm from "../../../components/main/components/bar-form/CreateForm"; */
import { AutoFetchOnPage } from "../../../../components/data-flow/components/import-data";
import { useNavigate } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  const navigateProduct = (product) => {
    navigate(`/crud/product-update/${product.id}`, {
      state: { productState: product },
    });
  };
  return (
    <>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Name"
          className="flex-1 min-w-[180px] px-3 py-2 rounded border border-gray-300"
        />
        <input
          type="text"
          placeholder="Description"
          className="flex-1 min-w-[180px] px-3 py-2 rounded border border-gray-300"
        />
        <input
          type="text"
          placeholder="Price"
          className="flex-1 min-w-[180px] px-3 py-2 rounded border border-gray-300"
        />
        <input
          type="text"
          placeholder="Image URL"
          className="flex-1 min-w-[180px] px-3 py-2 rounded border border-gray-300"
        />
        <button className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
          Tìm
        </button>
      </div>
      <AutoFetchOnPage
        /* doNav={true} */ handle={navigateProduct}
      ></AutoFetchOnPage>
    </>
  );
}

export default Update;
