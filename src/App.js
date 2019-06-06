import React from 'react';
import './App.css';
import BottomBar from './BottomBar/BottomBar';
import FeedView from './containers/FeedView/FeedView';

function App() {
  return (
    <div>
	    <div className="App">
	    	<FeedView />
	    	<BottomBar />
	    </div>
    </div>
  );
}

export default App;
