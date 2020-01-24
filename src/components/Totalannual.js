import React from 'react';
import totalannual from "./style/totalannual.css"
import Fiftypercent from "./percentage/Fiftypercent"
import Sixfourpercent from "./percentage/SixFourpercent"



const Totalannual = () => {
   return (
      <div className="t-annual">
         <div>
            <h6>Total Annual CAPEX Budget <span>N 50,000,000</span></h6>
            <select>Annual</select>
         </div>
         <div>
            <Sixfourpercent />
            <div>

            </div>
         </div>

         <div>
            <h6>Total Annual OPEX Budget <span>N 20,000,000</span></h6>
            <select>Annual</select>
         </div>
         <div>
            <Fiftypercent />
            <div>

            </div>
         </div>
      </div >
   );
}

export default Totalannual;
