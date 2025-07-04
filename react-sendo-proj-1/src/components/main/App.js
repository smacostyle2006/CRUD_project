// App.js
import React, { useState } from 'react';
import './components/styles/App.css';
import AdminNav from './components/modules/Admin/modules/AdminNav.js';
import CrudNav from './components/modules/Admin/modules/CrudNav.js';
import CreateForm from './components/bar-form/CreateForm.js';

function Navigation() {
  return (
    
    <div className="App">
        <AdminNav />
    </div>
  );
}

export default Navigation;