import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import MainContent from './MainContent';
import Members from './Members';
import Footer from './Footer';
import './App.css';

function App() {
  return (
  	<div className="everything">

  		<div id="navbar">
      		<NavBar />
      	</div>

	    <div className="App">

	    	<div>
		      <h1>  Redrix Longsword </h1>
		    </div>

		        
		    <div>
		      <MainContent />
		    </div>

	    </div>
		    <div id="footer">
		    	<Footer />
		    </div>
    </div>
  );
}

export default App;
