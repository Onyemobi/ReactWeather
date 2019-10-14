var React = require('react');
var {Link} = require('react-router');

var Example = (props) => 
{
	return(	<div>
				<h1 className="text-center page-title">Example Component</h1>
					<p>Here are a few example locations to try out:</p>
					<ol>
						<li>
							<Link to='/?location=Houston'>Houston, Texas</Link>
						</li>
						<li>
							<Link to='/?location=Dallas'>Dallas, Texas</Link>
						</li>
					</ol>
			</div>
		);
}

module.exports = Example;