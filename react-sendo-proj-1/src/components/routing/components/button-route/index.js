// App.js
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
/* import AdminNav from "../../Admin/modules/AdminNav.js";

import CrudNav from "../../Admin/modules/CrudNav.js"; */
/* import CreateForm from '../../../components/bar-form/CreateForm.js'; */
import { TrigButton } from "../../../interact/components/trigger-button";
import ProductId from "../../../../pages/products/crud/update/[update-id]";

import { toProductDetails } from "../../../front/components/navigate-product-details";

export const RouteButton = ({ setBlur, navi, product }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* Nút Action nhỏ, căn giữa */}
      <TrigButton
        setBlur={setBlur}
        handle={() =>
          toProductDetails({ handle: navigate, navi: navi, product: product })
        }
      ></TrigButton>
    </>
  );
};
