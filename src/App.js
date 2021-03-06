import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterUser from './components/RegisterUser';
import FarmerDashboard from './pages/FarmerDashboard';
import ClientDashboard from './pages/ClientDashboard';
import ActualFarmerDashboard from './pages/FarmerDashboard/FarmerActualDashBoard';
import ClientActualDashBoard from './pages/ClientDashboard/ClientActualDashBoard';
import FarmerProduce from './pages/FarmerDashboard/FarmerProduce';
import Requests from './pages/FarmerDashboard/Requests';
import ClientOrders from './pages/ClientDashboard/ClientOrders';
import ClientPayment from './pages/ClientDashboard/ClientPayment';
import RouterExample from './pages/RouterExample';
import { ToastContainer, toast } from 'react-toastify';
import { ContextUse, ThemeProvider } from './ContextUse';
import { connect } from 'react-redux';
import { AuthProvider } from './Auth';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	const [ globalToken, setGlobalToken ] = useState(true);
	const y = localStorage.getItem('state');

	const provideValue = useMemo(
		() => {
			return { globalToken, setGlobalToken };
		},
		[ globalToken, setGlobalToken ]
	);

	useEffect(() => {
		console.log(localStorage.getItem('token'), 'PPPPPTOKEN');
	});

	return (
		<div>
			<Router>
				<div>
					<Switch>
						<AuthProvider>
							<Route exact path='/' component={Home} />
							<Route exact path='/login' component={Login} />
							<Route exact path='/routerExample' component={RouterExample} />
							<Route exact path='/register' component={RegisterUser} />
							<Route exact path='/client' component={ClientDashboard} />
							<Route exact path='/farmer' component={FarmerDashboard} />
							<Route exact path='/farmer/Dashboard' component={ActualFarmerDashboard} />
							<Route exact path='/client/Dashboard' component={ClientActualDashBoard} />
							<Route exact path='/farmer/Produce' component={FarmerProduce} />
							<Route exact path='/client/Payments' component={ClientPayment} />
							<Route exact path='/client/Orders' component={ClientOrders} />
							<Route exact path='/farmer/Requests' component={Requests} />
						</AuthProvider>
					</Switch>
				</div>
			</Router>
			<ToastContainer autoClose={3000} hideProgressBar />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.loginReducer
	};
};

export default connect(mapStateToProps)(App);
