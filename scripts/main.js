var React = require('react');
var ReactDOM = require('react-dom');

/* StorePicker
*/
var App = React.createClass({
	render: function(){
		return(
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Get fresh fish here!"/>
					<Order />
					<Inventory />
				</div>
			</div>
		)
	}
});

var Header = React.createClass({
	render: function() {
	console.log(this.props);
		return(
			<header className="top" >
				<h1>Catch of the Day</h1>
				<h3 className="tagline">{this.props.tagline}</h3>
			</header>
		)
	}
});
var Order = React.createClass({
	render: function() {
		return(
			<p>Order</p>
		)
	}
});
var Inventory = React.createClass({
	render: function() {
		return(
			<p>Inventory</p>
		)
	}
});

var StorePicker = React.createClass({
	render : function() {
		return (
			<div>
				{/* Comment */}
				<form className="store-selector">
					<h2>Please enter a store</h2>
					<input type="text" ref="store" />
					<input type="Submit" />
				</form>
			</div>
		)
	}
});

ReactDOM.render(<App/>, document.querySelector('#main'));