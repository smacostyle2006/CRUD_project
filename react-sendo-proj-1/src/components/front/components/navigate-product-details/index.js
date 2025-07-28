// App.js
import React, { useEffect, useRef, useState } from "react";
/* import AdminNav from "../../Admin/modules/AdminNav.js";

import CrudNav from "../../Admin/modules/CrudNav.js"; */
/* import CreateForm from '../../../components/bar-form/CreateForm.js'; */
import { RouteButton } from "../../../routing/components/button-route";
import { TrigButton } from "../../../interact/components/trigger-button";
import { useNavigate } from "react-router-dom";
import { eventCount } from "../../../interact/components/event-count";
import { put } from "../../../data-flow/components/import-data/fetching";
import { API_URL } from "../../../main/components/bar-form/CreateForm";

const updateDetails = async ({ productDetails }) => {
  console.log(productDetails);
  const res = await put(
    `${API_URL}/products/${[productDetails.id]}`,
    productDetails
  );
};

export const toProductDetails = ({
  handle,
  navi,
  product,
  ref,
  productRef,
}) => {
  const naviga = `${navi}${product.id}`;
  if (naviga === `/user/${product.id}`) {
    if (product.id === productRef.current.id) {
      productRef.current.views++;
    } else {
      // PUT views to database of productId: productRef
      updateDetails({ productDetails: productRef.current });
      productRef.current = product;
      productRef.current.views++;
    }
  }
  const navigateProduct = () => {
    handle(naviga, {
      state: { productState: product },
    });
  };
  return navigateProduct();
};
