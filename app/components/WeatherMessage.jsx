var React = require('react');

var WeatherMessage = ({temp, location}) => {
		return (
				<h3 className="text-center">The temperature of the {location} is {temp} degrees F</h3>
		)
};

module.exports = WeatherMessage;