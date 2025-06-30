// App.js
import React, { useState } from 'react';
import './home/styles/App.css';
import AdminNav from './Admin/modules/AdminNav.js';
import CrudNav from './Admin/modules/CrudNav.js';
import CreateForm from '../components/bar-form/CreateForm.js';

function Navigation() {
  return (
    
    <div className="App">
        <AdminNav />
    </div>
  );
}

export default Navigation;