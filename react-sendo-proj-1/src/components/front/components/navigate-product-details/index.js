// App.js
import React, { useEffect, useRef, useState } from "react";
/* import AdminNav from "../../Admin/modules/AdminNav.js";

import CrudNav from "../../Admin/modules/CrudNav.js"; */
/* import CreateForm from '../../../components/bar-form/CreateForm.js'; */
import { RouteButton } from "../../../routing/components/button-route";
import { TrigButton } from "../../../interact/components/trigger-button";
import { useNavigate } from "react-router-dom";
import { eventCount } from "../../../interact/components/event-count";

export const toProductDetails = ({ handle, navi, product, ref }) => {
  const naviga = `${navi}${product.id}`;
  if (naviga == `/user/${product.id}`) {
    eventCount(ref);
  }
  const navigateProduct = () => {
    handle(naviga, {
      state: { productState: product },
    });
  };
  return navigateProduct();
};
