// App.js
import React, { useState } from "react";
/* import '../../../styles/App.css'; 
import AdminNav from '../../Admin/modules/AdminNav.js';
import CrudNav from '../../Admin/modules/CrudNav.js'; */
import CreateForm from "../../../components/main/components/bar-form/CreateForm";

function Create() {
  return (
    <>
      <div className="App">
        <CreateForm />
      </div>
    </>
  );
}

export default Create;
