// App.js
import React, { useEffect, useState } from "react";
/* import AdminNav from "../../Admin/modules/AdminNav.js";

import CrudNav from "../../Admin/modules/CrudNav.js"; */
/* import CreateForm from '../../../components/bar-form/CreateForm.js'; */
import { RouteButton } from "../../../routing/components/button-route";
import { TrigButton } from "../../../interact/components/trigger-button";
import { useNavigate } from "react-router-dom";

export const toProductDetails = ({ handle, navi, product }) => {
  const navigateProduct = () => {
    handle(`${navi}${product.id}`, {
      state: { productState: product },
    });
  };
  return navigateProduct();
};
