// App.js
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
/* import AdminNav from "../../Admin/modules/AdminNav.js";

import CrudNav from "../../Admin/modules/CrudNav.js"; */
/* import CreateForm from '../../../components/bar-form/CreateForm.js'; */
import { TrigButton } from "../../../interact/components/trigger-button";

export const RouteButton = ({ setBlur }) => {
  return (
    <>
      {/* Nút Action nhỏ, căn giữa */}
      <Link to="/crud/update/:productId">
        <TrigButton setBlur={setBlur}></TrigButton>
      </Link>
      <Routes>
        <Route path=":productId/*"></Route>
      </Routes>
    </>
  );
};
