import React from 'react';
// import { months } from './months.js';
import './MonthsPanel.css';
import MonthCard from './MonthCard';


const MonthsPanel = ({ months }) => { 
	return (	
				
		<div className="months-panel blue flex">
			{
		        months.map((month, i) => {
		          return (
		            <MonthCard
		              key={i}
		              month={months[i].month}
		             /> 
		          );
		        })
		      }
		</div>

	);
}

export default MonthsPanel;
	 