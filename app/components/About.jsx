var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About Page</h1>
			<p>Welcome to the About page!</p>
			<p>Here are some of the tools I used: 	</p>
				<ul>
					<li><a href="#">React</a></li>
					<li><a href="#">Open Weather Map</a></li>
					<li><a href="#">Foundation</a></li>
				</ul>
		</div>
	);
};

module.exports = About;