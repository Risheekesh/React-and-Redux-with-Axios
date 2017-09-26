import React from 'react';
import {Link} from 'react-router';

class About extends React.Component{
	constructor(props){
		console.log("hello")
		super(props);
	}

	render(){
		return(
			<div>About Pages
				<Link to="/">Home</Link>
			</div>
			)
	}
}

export default About;