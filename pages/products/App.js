// App.js
import React, { useState } from 'react';
import './components/styles/App.css';
/* import AdminNav from './components/modules/Admin/modules/AdminNav.js';
import CrudNav from './components/modules/Admin/modules/CrudNav.js';
import CreateForm from './components/bar-form/CreateForm.js';*/
import CRUD from './crud/CRUD';
import List from './list/List';

function Navigation() {
  return (
    
    <div className="App">
          {/* Navigation - like your HTML nav but with Links */}
        <nav className='Head'>
          <Link to="/list">List</Link>
          <Link to="/crud">CRUD</Link>
          <Link to="/analyst">Analyst</Link>
        </nav>
        {/* Routes - like your HTML files but as components */}
        <Routes>
          <Route path="crud/*" element={<CRUD />} />
          <Route path="list/*" element={<List />} />
          {/* <Route path="read" element={<About />} />
          <Route path="update" element={<Contact />} />
          <Route path="delete" element={<Contact />} /> */}
        </Routes>
    </div>
  );
}

export default Navigation;