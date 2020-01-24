import React from "react";
import Image from './images/subject.png'
import appr from './images/approval.png'
import dshb from './images/dashboard.png'
import budget from './images/budget.png'
import sidebar from "./style/sidebar.css"

const Sidebar = () => {
   return (
      <aside className="sidebar-bg menu ">
         <ul>
            <li>
               <img className='menu-img' src={Image} alt='Express Land' />
            </li>
         </ul>
         <div className="list">
            <ul>
               <li className='active'>
                  <img className='list-img' src={dshb} alt='Dashboard' />
                  <span>Dashboard</span>
               </li>
               <li className="bdj">
                  <img className='list-img' src={budget} alt='Budget' />
                  <span>Budget</span>
               </li>
               <li className="pprl">
                  <img className='list-img ppr' src={appr} alt='Approvals' />
                  <span>Approvals</span>
               </li>
            </ul>
         </div>
      </aside>
   );
}

export default Sidebar;
