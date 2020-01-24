import React from 'react';
import menu from './images/menubar.png'
import bell from './images/bell.png'
import navbar from "./style/navbar.css"

const Navbar = () => {
   return (
      <div className="nav-bar">
         <img className="nav-img" src={menu} />
         <div className="right-nav">
            <img className='bell' src={bell} />
            <div className="nav-name"><h6>Bedemi Yusuf</h6><br />
               <p>Executive</p></div>
         </div>
      </div>
   );
}

export default Navbar;
