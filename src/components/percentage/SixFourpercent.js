import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Sixfourpercent = () => {
   return (
      <div className="percent more" label="Custom colors">
         <CircularProgressbarWithChildren value={64} styles={buildStyles({ textColor: "black", pathColor: "#6915cf", trailColor: "#e5e5e5" })}>
            <div style={{ fontSize: 12, marginTop: -5 }}>
               <strong>64%</strong><br /> Remaining
            </div>
         </CircularProgressbarWithChildren>
      </div>
   );
}

export default Sixfourpercent;




