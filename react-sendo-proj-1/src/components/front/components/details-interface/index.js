// App.js
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
/* import '../../../styles/App.css'; 
import AdminNav from '../../Admin/modules/AdminNav.js';
import CrudNav from '../../Admin/modules/CrudNav.js'; 
import CreateForm from "../../../components/main/components/bar-form/CreateForm"; */
import { FormFields } from "../form-edit";

function ProductDetailsInterface() {
  const { productId } = useParams();
  const location = useLocation();
  const product = location.state?.productState;

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    desc: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        id: product.id || "",
        name: product.name || "",
        desc: product.desc || "",
        price: product.price || "",
        image: product.image || "",
      });
    }
  }, [product]);

  return (
    <>
      <FormFields
        formData={formData}
        /*
        errors={errors}
        setErrors={setErrors}
        setGeneralError={setGeneralError}
        setFormData={setFormData}
        setSuccessMessage={setSuccessMessage}
        /*setShowDuplicateConfirm={setShowDuplicateConfirm}*/
        /* setPendingProduct={setPendingProduct}
        validateGeneralCriteria={validateGeneralCriteria}
        handleSubmit={handleSubmit}*/
      ></FormFields>
    </>
  );
  /*
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
      <AutoFetchOnPage></AutoFetchOnPage>
    </> */
}

export default ProductDetailsInterface;
