// App.js
import React, { useEffect, useState } from "react";
/* import AdminNav from "../../Admin/modules/AdminNav.js";

import CrudNav from "../../Admin/modules/CrudNav.js"; */
/* import CreateForm from '../../../components/bar-form/CreateForm.js'; */

export const TrigButton = ({ setBlur /*handle*/ }) => {
  return (
    <>
      {/* Nút Action nhỏ, căn giữa */}
      <button
        className="
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                opacity-0 group-hover:opacity-100
                bg-blue-500 text-white px-4 py-2 rounded
                transition-opacity duration-200
                z-20
                shadow
                "
        onMouseEnter={() => setBlur(true)}
        onMouseLeave={() => setBlur(false)}
        onClick={(e) => {
          e.stopPropagation();
          /*handle();*/
        }}
      >
        Action
      </button>
    </>
  );
};
