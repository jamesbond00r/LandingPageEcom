var React = require('react');
var ReactRouter = require('react-router-dom');



class App extends React.Component{
	render(){
		return(
			<div>
			  <div>
    <div className="container">
        
            <div className="alert alert-danger" role="alert">
          
            </div>
        
            <div className="alert alert-success" role="alert">
                
            </div>
       
    </div>
    
    <div id="landing-header">
 		<h1>Fuel Your Body!</h1>
		<a href="/campgrounds" className="btn btn-lg btn-success">Buy Now!</a>
    </div>
    
    <ul className="slideshow">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div>
			</div>
			</div>
			</div>

		)
	}
}

module.exports = App;


      
 