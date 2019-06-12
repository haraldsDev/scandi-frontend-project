import React from 'react';
import './BottomBar.css';
import person from '../initial-assets/icons/person.svg';
import statistics1 from '../initial-assets/icons/statistics1.svg';
import notifications from '../initial-assets/icons/notifications.svg';
import bookmark from '../initial-assets/icons/bookmark.svg';
import home from '../initial-assets/icons/home.svg';

const BottomBar = () => { 
	return (
		<div className="bottom-bar shp33 bt bw1 b--white-05">
			<div className="icons flex justify-around mt3">
				<div className=""> 
					<img src={person} alt="" className="pointer person inactive"/>
				</div>
				<div className=""> 
					<img src={statistics1} alt="" className="pointer statistics1 active"/>
				</div>
				<div className=""> 
					<img src={notifications} alt="" className="pointer notifications inactive"/>
				</div>
				<div className=""> 
					<img src={bookmark} alt="" className="pointer bookmark inactive"/>
				</div>

				<div className=""> 
					<img src={home} alt="" className="pointer home inactive"/>
				</div>
			</div>
		</div>

	);
}

export default BottomBar;
