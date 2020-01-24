import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 50;


const Fiftypercent = () => {
   return (
      <div className="percent more" label="Custom colors">
         <CircularProgressbarWithChildren value={50} styles={buildStyles({ textColor: "red", pathColor: "#fb0091", trailColor: "#e5e5e5" })}>
            <div style={{ fontSize: 12, marginTop: -5 }}>
               <strong>50%</strong><br /> Remaining
            </div>
         </CircularProgressbarWithChildren>
      </div>
   );
}

export default Fiftypercent;


