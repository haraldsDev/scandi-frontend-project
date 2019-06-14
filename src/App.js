import React, { Component } from 'react';
import './App.css';
// import BottomBar from './BottomBar/BottomBar';
import FeedView from './containers/FeedView/FeedView';
import StatisticsView from './containers/StatisticsView/StatisticsView';


class App extends Component {
  constructor() {
    super();
    this.state = {
    	route: 'statisticsview',
    };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  render() {
	  return (
	    <div>

	        { (this.state.route === 'feedview')
	          ? <div>
	              <FeedView  onRouteChange={this.onRouteChange} />
	           </div>
	          : (this.state.route === 'statisticsview') ?
           		<div>
           			<StatisticsView onRouteChange={this.onRouteChange}/> 
           		</div>     
	       	  : <div>
		              <FeedView onRouteChange={this.onRouteChange} />
		        </div>       
	        }

	    </div>
	  );
  }
}

export default App; 
