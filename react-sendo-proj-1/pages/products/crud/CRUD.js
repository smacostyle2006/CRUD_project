// App.js
import React, { useState } from 'react';
/* import '../../../styles/App.css'; 
import CrudNav from '../modules/CrudNav.js'; */
import Create from './Create';

function CRUD() {
  return(
    <div>
    {/* Navigation - like your HTML nav but with Links */}
  <nav className='Head'>
    <Link className="oke" to="/crud/create">Create</Link>
    <Link className="oke" to="/crud/read">Read</Link>
    <Link className="oke" to="/crud/update">Update</Link>
    <Link className="oke" to="/crud/delete">Delete</Link>
  </nav>
  {/* Routes - like your HTML files but as components */}
  <Routes>
    <Route path="create/*" element={<Create />} />
    {/* <Route path="read" element={<About />} />
    <Route path="update" element={<Contact />} />
    <Route path="delete" element={<Contact />} /> */}
  </Routes>
</div>
  );

}

export default CRUD;