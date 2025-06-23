// App.js
import React, { useState } from 'react';
import '../styles/App.css';
import AdminNav from '../../Admin/components/AdminNav.js';
import CrudNav from '../../Admin/components/CrudNav.js';
import CreateForm from '../../../components/bar-form/CreateForm.js';

function Dashboard() {
  return (
    <>
    <div className="App">
      <AdminNav />
      <CrudNav />
      <CreateForm />
    </div>
    </>
  );
}

export default Dashboard;