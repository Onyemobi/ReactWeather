var React = require('react');

var WeatherMessage = ({temp, location}) => {

		return (
			<div>
				<p>The temperature of the {location} is {temp} degrees F</p>
			</div>
		)

}


module.exports = WeatherMessage;