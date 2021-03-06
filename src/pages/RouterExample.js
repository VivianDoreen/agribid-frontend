import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Header from '../components/Header';
import AboutRoute from './AboutRoute';

const RouterExample = (props) => {
	console.log(props.history, 'props');
	const match = useRouteMatch();
	console.log(match, 'match');
	return (
		<Router>
			<nav>
				<ul>
					<li>
						<Link to='/homeroute'>Home</Link>
					</li>
				</ul>
				<ul>
					<li>
						<Link to='/aboutroute/jane'>About</Link>
					</li>
				</ul>
				<ul>
					<li>
						<Link to='/contactroute'>Contact</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route exact path='/homeroute' component={HomeRoute} />
				<Route exact path='/aboutroute/:name' component={AboutRoute} />
				<Route exact spath='/contactroute' component={ContactUs} />
			</Switch>
		</Router>
	);
};

export default RouterExample;
const HomeRoute = () => <div>This is home</div>;

const ContactUs = () => {
	const match = useRouteMatch();
	console.log(match.url, 'match.url');
	return (
		<div>
			<h2>Contacts</h2>
			<nav>
				<ul>
					<li>
						<Link to={`${match.url}/add`}>AddContact</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route exact path={`${match.url}`} component={ContactSelect} />
				<Route strict path={`${match.url}/add`} component={AddContact} />
			</Switch>
		</div>
	);
};

const ContactSelect = (props) => {
	console.log(props, 'props');
	return <h1>Please select a topic</h1>;
};

const AddContact = () => {
	console.log('PPPPWWWQQWWEEWWWWWSDDF');
	return <div>Add a contact</div>;
};
