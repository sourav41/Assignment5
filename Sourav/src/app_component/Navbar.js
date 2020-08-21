import React from 'react';
import{Link} from 'react-router-dom';

const Navbar=()=>{
return(<><nav>
    <div className="nav-wrapper black darken-2 ">
      <ul id="nav-mobile" className="right hide-down">
        <li><Link to="/"><b>Weather</b></Link></li>
        <li><Link to="/Corona"><b>Corona</b></Link></li>
      </ul>
    </div>
  </nav></>)}
export default Navbar;