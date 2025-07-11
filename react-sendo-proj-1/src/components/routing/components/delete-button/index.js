// App.js
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
/* import AdminNav from "../../Admin/modules/AdminNav.js";

import CrudNav from "../../Admin/modules/CrudNav.js"; */
/* import CreateForm from '../../../components/bar-form/CreateForm.js'; */

import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TrigButton } from "../../../interact/components/trigger-button";
import ProductId from "../../../../pages/products/crud/update/[update-id]";
import { API_URL } from "../../../main/components/bar-form/CreateForm";
import { del } from "../../../data-flow/components/import-data/fetching";

export const DeleteButton = ({ setBlur, product, products, setProducts }) => {
  const deleteProducts = async () => {
    const updatedProducts = products.filter(
      (productIndex) => productIndex !== product
    );
    setProducts(updatedProducts);
    const res = await del(`${API_URL}/products/${product.id}`, product.id);
  };
  return (
    <>
      {/* Nút Action nhỏ, căn giữa */}
      <TrigButton setBlur={setBlur} handle={deleteProducts}></TrigButton>
    </>
  );
};
