// App.js
import React, { useEffect, useState } from "react";
/* import AdminNav from "../../Admin/modules/AdminNav.js";

import CrudNav from "../../Admin/modules/CrudNav.js"; */
/* import CreateForm from '../../../components/bar-form/CreateForm.js'; */
import { AutoFetchOnPage } from "../../../components/data-flow/components/import-data";
function List() {
  const doSomething = (logTheThing) => {
    console.log("Sản phẩm tương tự:", logTheThing);
  };
  return (
    <AutoFetchOnPage doLink={false} handle={doSomething}></AutoFetchOnPage>
  );
}

export default List;
