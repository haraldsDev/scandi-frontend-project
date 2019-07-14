import React from 'react';

const MonthCard = ({ month }) => {
  return (
    <div  className='tc br2 ma2'>
      
      <div height="200" width="100" className="ph2">
        <p className="f6 white txt21">{month}</p> 
      </div>
    </div>
  );
}

export default MonthCard;
