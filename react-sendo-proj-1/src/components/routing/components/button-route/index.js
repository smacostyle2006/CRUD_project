// App.js
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
/* import AdminNav from "../../Admin/modules/AdminNav.js";

import CrudNav from "../../Admin/modules/CrudNav.js"; */
/* import CreateForm from '../../../components/bar-form/CreateForm.js'; */
import { TrigButton } from "../../../interact/components/trigger-button";
import ProductId from "../../../../pages/products/crud/update/[update-id]";
import { Outlet } from "react-router-dom";

export const RouteButton = ({ setBlur, product }) => {
  return (
    <>
      {/* Nút Action nhỏ, căn giữa */}
      <Link
        to={`/crud/product-update/${product.id}`}
        state={{ productState: product }}
      >
        <TrigButton setBlur={setBlur}></TrigButton>
      </Link>
    </>
  );
};
