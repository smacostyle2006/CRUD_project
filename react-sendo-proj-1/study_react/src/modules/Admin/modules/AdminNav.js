import { Routes, Route, Link } from "react-router-dom";
import CRUD from '../AdminNav/CRUD.js';
import List from "../../sites/modules/List.js";

function AdminNav() {
    return (
      <>
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
      </>
    );
  }
  
  export default AdminNav;