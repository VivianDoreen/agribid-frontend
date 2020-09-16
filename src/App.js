import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterUser from './components/RegisterUser';
import FarmerDashboard from './pages/FarmerDashboard';
import ActualFarmerDashboard from './pages/FarmerDashboard/FarmerActualDashBoard';
import FarmerProduce from './pages/FarmerDashboard/FarmerProduce';
import Requests from './pages/FarmerDashboard/Requests';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
	<div>
		<Router>
			<div>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={RegisterUser} />
					<Route exact path='/farmer' component={FarmerDashboard} />
					<Route exact path='/farmer/Dashboard' component={ActualFarmerDashboard} />
					<Route exact path='/farmer/Produce' component={FarmerProduce} />
					<Route exact path='/farmer/Requests' component={Requests} />
				</Switch>
			</div>
		</Router>
		<ToastContainer autoClose={3000} hideProgressBar />
	</div>
);

export default App;
