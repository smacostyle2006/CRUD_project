import { Routes, Route, Link } from "react-router-dom";
import Create from '../../sites/modules/Create.js';

function CrudNav() {
    return (

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
  
  export default CrudNav;