// App.js
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
/* import AdminNav from "../../Admin/modules/AdminNav.js";

import CrudNav from "../../Admin/modules/CrudNav.js"; */
/* import CreateForm from '../../../components/bar-form/CreateForm.js'; */
import { TrigButton } from "../../../interact/components/trigger-button";
import ProductId from "../../../../pages/products/crud/update/[update-id]";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const RouteButton = ({ setBlur, product }) => {
  const navigate = useNavigate();
  const navigateProduct = () => {
    navigate(`/crud/product-update/${product.id}`, {
      state: { productState: product },
    });
  };
  return (
    <>
      {/* Nút Action nhỏ, căn giữa */}
      <TrigButton setBlur={setBlur} handle={navigateProduct}></TrigButton>
    </>
  );
};
