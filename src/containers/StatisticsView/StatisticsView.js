import React from 'react';
import './StatisticsView.css';
import arrowBack from '../FeedView/BottomBar/icons/arrowBack.svg';
import statistics1 from '../FeedView/BottomBar/icons/statistics1.svg';
import { months } from './months.js';


const StatisticsView = ({ onRouteChange }) => { 
	return (
		<div className="white">

			<div className="upper-two-thirds">
				<div className="top-line mt4 ml3" onClick={() => onRouteChange('feedview')}>
					<div className="back-arrow-circle ba bw1 b--white-10"> 
						<img src={arrowBack} alt="" className="pointer shp9"/>
					</div>
				</div>
					<div className="statistics-panel flex justify-center">
						<div className="mt1">Statistic</div>
						<div className="ml3" > 
							<img src={statistics1} alt="" className="pointer statistics1 active"/>
						</div>
					</div>
				
				<div className="months-panel">
					
				</div>

				 
			</div>

		</div>
	);
}

export default StatisticsView;
	 