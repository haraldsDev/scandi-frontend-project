import React from 'react';
import './StatisticsView.css';
import arrowBack from '../FeedView/BottomBar/icons/arrowBack.svg';
import statistics1 from '../FeedView/BottomBar/icons/statistics1.svg';
import { months } from './months.js';
import MonthsPanel from './MonthsPanel';
import restaurant from '../FeedView/BottomBar/icons/restaurant.svg';



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
						<div className="mt1 txt8">Statistic</div>
						<div className="ml3" > 
							<img src={statistics1} alt="" className="pointer statistics1 active"/>
						</div>
					</div>
				
				<div className="months-panel">
					<MonthsPanel months={months}/>
				</div>
				<div className="blue-line shp6 center"></div>
				
				<div className="circle-chart">
					<div className="circle-center">
					</div>
				</div>
				<div className="food-and-restaurants mt4 ">
					<div className=" flex justify-center"> 
						<img src={restaurant} alt="" className=" fork-icon pointer shp9"/>
						<div className="txt8">$230</div>
					</div>
					<div className="food-and-restaurants-text flex justify-center txt7"> food and restaurants</div>
				</div>

				<div className="balance-boxes flex justify-around">
					<div className="box left-box shp1 ">
						<div className="dollars-container flex justify-around">
							<div className="dollars txt4">+$1400
							</div>
							<div className="cents flex flex-column">	
								<div className="txt3">99</div>	
								<img src={restaurant} alt="" className="blue-cents-line"/>						
							</div>
						</div>
					</div>
					<div className="box right-box"></div> 
				</div>

			</div>

		</div>
	);
}

export default StatisticsView;
	 