import React from 'react';
import {Link} from 'react-router-dom';

const Searchbar = ()=>{
  return(
      <>
           <nav className = "blue">
  <div className="nav-wrapper row ">
    {/* <a href="#" className="brand-logo col s2"> My Logs </a> */}
    <ul id="nav-mobile" className="hide-on-med-and-down col s8">
    <input type = "text"/>
    </ul>

    <ul id="nav-mobile" className="hide-on-med-and-down col s4">
    <li><Link to = "AddLogs">Add Logs</Link></li>
    <li><Link to = "Techs">List Of Techs</Link></li>
    {/* <li><Link to = "DeleteLogs">Delete Logs</Link></li> */}
    <li><Link to = "AddTechs"> Add Techs </Link> </li>
    </ul>

  </div>
</nav>
      </>
  )
}

export default Searchbar;