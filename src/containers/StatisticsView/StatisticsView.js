import React from 'react';
import './StatisticsView.css';
import arrowBack from '../FeedView/BottomBar/icons/arrowBack.svg';
import statistics1 from '../FeedView/BottomBar/icons/statistics1.svg';
import { months } from './months.js';
import MonthsPanel from './MonthsPanel';
import restaurant from '../FeedView/BottomBar/icons/restaurant.svg';
import trending_up from './trending_up.svg';
import trending_down from './trending_down.svg';
// import circlePath from './circlePath.svg';


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
						<div className="txt8 statistic-text">Statistic</div>
						<div className="ml3" > 
							<img src={statistics1} alt="" className="pointer statistics1 active"/>
						</div>
					</div>
				
				<div className="months-panel">
					<MonthsPanel months={months}/>
				</div>
				<div className="blue-line shp6 center"></div>
				
				<div className="circle-chart">
					<div className="blue-segment pointer">
						<div className="two-white-points">
							<div className="white-point-hollow"></div>
							<div className="white-point-inner"></div>
						</div>
					</div>
					<div className="sector dark-black"></div>
					<div className="sector purple pointer">
						<div className="two-white-points">
							<div className="white-point-hollow"></div>
							<div className="white-point-inner"></div>
						</div>
					</div>
					<div className="sector yellow pointer">
						<div className="white-point-full"></div>
					</div>
					<div className="black-circle-middle">
						<div className="dollars-and-balance">
							<div className="dollars-and-centrs-center flex flex-row justify-center">
								<div className="dollars-center txt8 white">$420</div>
								<div className="txt3 cents-center">25</div>	
							</div>
							<div className="balance-center txt17 flex justify-center">balance</div>
						</div>
					</div>
				</div>

				<div className="food-and-restaurants mt4">
					<div className=" flex justify-center"> 
						<img src={restaurant} alt="" className=" fork-icon pointer shp9"/>
						<div className="txt8 text-230">$230</div>
					</div>
					<div className="food-and-restaurants-text flex justify-center txt7"> food and restaurants</div>
				</div>

				<div className="balance-boxes flex justify-around">
					<div className="box left-box shp1 ">
						<div className="dollars-container flex justify-around "> 
							<div className="txt4 dollars flex flex-row">
								<div className="dollar-text">
									+$1400
								</div>
							</div>
							<div className="cents justify-center">	
								<div className="cents-and-arrow">
									<div className="txt3 cents-number">99</div>	
									<img src={trending_up} alt="" className="blue-cents-line"/>					
								</div>
							</div>
						</div>
					</div>
					<div className="box right-box">
						<div className="dollars-container flex justify-around "> 
							<div className="txt4 dollars flex flex-row">
								<div className="dollar-text">
								-$980
								</div>
							</div>
							<div className="cents justify-center">	
								<div className="cents-and-arrow cents-and-arrow-right">
									<div className="txt3 cents-number">25</div>	
									<img src={trending_down} alt="" className="blue-cents-line"/>	
								</div>				
							</div>
						</div>
					</div> 
				</div>

			</div>

		</div>
	);
}

export default StatisticsView;
	 