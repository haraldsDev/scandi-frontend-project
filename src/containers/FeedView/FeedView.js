import React from 'react';
import './FeedView.css';
import backgroundImage from '../../initial-assets/background-image.png';
import userpic1 from '../../initial-assets/userpic1.png';
import userpic2 from '../../initial-assets/userpic2.png';
import arrowBack from '../../initial-assets/icons/arrowBack.svg';


const FeedView = () => { 
	return (
		<div className="feed-view white">
			<div className="background-image shp0 shp36 " >
				<img src={backgroundImage} alt=""/>  
			</div> 
			<div className="upper-two-thirds">
				<div className="top-line mt4 ml3">
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

			<p className="center yellow"></p>
		</div>

	);
}

export default FeedView;



/*
<div className="it-doesnt-matter txt42 mt0">It doesn't matter if you're building the next Facebo <br /> ok, or if you're the director of marketing for an industrial company.</div>
*/

/*

<g id="Feed #1" clip-path="url(#cp3)">
		


		<path id="Line" class="shp35" d="M116,1420.5h343v-0.5h-343z" />
		<text id="It doesn't matter if you're building the next Facebook, or if y" style="transform: matrix(1,0,0,1,117.168,1331.316)" >
			<tspan x="0" y="18" class="txt42">It doesn't matter if you're building the next Facebook, or if you're the director of marketing for an industrial company.</tspan>
		</text>
		<text id="Who are you and  why you’re  standing here?" style="transform: matrix(1,0,0,1,117.168,1191.316)" >
			<tspan x="0" y="40" class="txt43">Who are you and </tspan>
			<tspan x="0" y="84.8" class="txt43">why you’re </tspan>
			<tspan x="0" y="129.6" class="txt43">standing here?</tspan>
		</text>
		<g id="Topline">
			<g id="Back">
				<path id="Ellipse" class="shp22" d="M117,973.5c0,11.87 9.63,21.5 21.5,21.5c11.87,0 21.5,-9.63 21.5,-21.5c0,-11.87 -9.63,-21.5 -21.5,-21.5c-11.87,0 -21.5,9.63 -21.5,21.5z" />
				<path id="Arrow" class="shp9" d="M134.74,973.53l6.91,-7.17c0.29,-0.3 0.29,-0.78 0,-1.07c-0.29,-0.3 -0.75,-0.3 -1.03,0l-7.42,7.71c-0.29,0.3 -0.29,0.77 0,1.07l7.42,7.71c0.14,0.15 0.33,0.22 0.52,0.22c0.19,0 0.37,-0.07 0.52,-0.22c0.29,-0.3 0.29,-0.78 0,-1.07z" />
			</g>
		</g>
	</g>

*/


	 