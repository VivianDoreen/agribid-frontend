import React from 'react';
const AboutRoute = (props) => {
	console.log(props, 'propspropsprops');
	return <div>This is about us {props.match.params.name}</div>;
};
export default AboutRoute;
