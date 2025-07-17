// App.js
import React, { useEffect, useRef, useState } from "react";
/* import AdminNav from "../../Admin/modules/AdminNav.js";

import CrudNav from "../../Admin/modules/CrudNav.js"; */
/* import CreateForm from '../../../components/bar-form/CreateForm.js'; */

export const eventCount = (ref) => {
  ref.current = ref.current + 1;
  alert("You clicked " + ref.current + " times!");
};
