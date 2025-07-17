// App.js
import React, { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import "../../components/main/components/styles/App.css";
/* import AdminNav from './components/modules/Admin/modules/AdminNav.js';
import CrudNav from './components/modules/Admin/modules/CrudNav.js';
import CreateForm from './components/bar-form/CreateForm.js'; */
import CRUD from "../../pages/products/crud/CRUD";
import List from "../../pages/products/list/List";
import { AutoFetchOnPage } from "../../components/data-flow/components/import-data";
import { TrigButton } from "../../components/interact/components/trigger-button";
import { toProductDetails } from "../../components/front/components/navigate-product-details";
import ProductDetailsInterface from "../../components/front/components/details-interface";

function UserInter() {
  const navigate = useNavigate();
  return (
    <>
      <AutoFetchOnPage
        handle={toProductDetails}
        navi={`/user/`}
        Button={TrigButton}
      >
        {" "}
      </AutoFetchOnPage>
    </>
  );
}

export default UserInter;
