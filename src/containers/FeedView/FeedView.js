import React from 'react';
import './FeedView.css';
import backgroundImage from './background-image.png';
import userpic1 from './userpic1.png';
import userpic2 from './userpic2.png';
import arrowBack from './BottomBar/icons/arrowBack.svg';
import BottomBar from './BottomBar/BottomBar';


const FeedView = ({ onRouteChange }) => { 
	return (
		<div className="feed-view white">
			<div className="background-image shp0 shp36 " >
				<img src={backgroundImage} alt=""/>  
			</div> 
			<div className="upper-two-thirds">
				<div className="top-line mt4 ml3" onClick={() => onRouteChange('statisticsview')}>
					<div className="back-arrow-circle ba bw1 b--white-10"> 
						<img src={arrowBack} alt="" className="pointer shp9"/>
					</div>
				</div>
				<div className="purple-haze shp36"></div>   
				<div className="who-are-you txt43 mb1">Who are you and <br /> why you're <br />standing here?</div>
				<div className="it-doesnt-matter txt42 mt0">It doesn't matter if you're building the next Facebook, or if you're the director of marketing for an industrial company.</div>
			</div>
			<div className="user-bar bt bw1 b--white-05">
				<div>
					<div id="Users">	
						<div className="flex flex-wrap mt3 mb3">
							<div className="flex flex-wrap flex-start w-80">
								<div id="By" className="txt41 ml3 mr1">By </div>
								<div id="Nocholas-O-Brian" className="txt40">Nocholas O`Brian</div>
							</div>
							<div id="28 July" className="txt40 flex-end w-20">28 July</div>
						</div>			
						<div className="flex flex-wrap flex-start mb3">
							<div id="Userpic1" className="ml3 mr2">
								<img src={userpic1} alt="userpic1"/>
							</div>
							<div id="Userpic2" className="mr2">
								<img src={userpic2} alt="userpic2" />
							</div>
							<div id="+76" className="number-76 shp30 mr2 txt39">
								<div className="ml2 mt1">+76</div>
							</div>
							<div id="opacity: 0.6" className="liked-this mt1 txt7 mr2">Liked this</div>
						</div>
					</div>
				</div>
			</div>
			<BottomBar/>
		</div>
	);
}

export default FeedView;
	 