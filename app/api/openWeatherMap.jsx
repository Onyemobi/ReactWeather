var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=70827596ff669b12927021830d822b19&units=imperial';


module.exports = {
	getTemp: function(location){
		var encodedLocation = encodeURIComponent(location);
		var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestURL).then(function(res) {
				if(res.data.cod && res.data.message) {
					throw new Error(res.data.message);
				} else {
					return res.data.main.temp;
				}
			}, function(res) {
				throw new Error(res.data.message);
		});
	}
}