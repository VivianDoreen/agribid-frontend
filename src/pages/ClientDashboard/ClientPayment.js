import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import { toast } from 'react-toastify';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Logout from '../../components/Logout';

const jwt = require('jsonwebtoken');

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		backgroundColor: '#389683'
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	}
}));

export default function PersistentDrawerLeft() {
	const classes = useStyles();
	const theme = useTheme();
	const [ open, setOpen ] = React.useState(true);
	const [ menuState, setMenuState ] = useState('');
	const [ token, setToken ] = useState('');
	const [ paymentStatus, setPaymentStatus ] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	// const token = localStorage.getItem('token');
	const decoded = jwt.decode(token);

	useEffect(() => {
		setToken(localStorage.getItem('token'));
	}, []);
	const [ payment, setPayment ] = useState({
		from: '',
		to: '',
		amount: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setPayment((payment) => ({ ...payment, [name]: value }));
	};

	const handleSubmit = (e) => {
		console.log(payment, 'payment');
		const { from, to, amount } = payment;
		e.preventDefault();
		if (payment.from === '' || payment.to === '' || payment.amount === '') {
			toast.error('All fields are required');
		} else {
			const config = {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					Accept: 'application/json'
				},
				mode: 'cors',
				body: JSON.stringify({
					from: {
						displayName: 'alpteqictsolsFirst alpteqictsolsLast',
						idType: 'MSISDN',
						idValue: { from }
					},
					to: {
						idType: 'MSISDN',
						idValue: { to }
					},
					amountType: 'SEND',
					currency: 'EUR',
					amount,
					transactionType: 'TRANSFER',
					initiatorType: 'CONSUMER',
					note: 'test payment',
					homeTransactionId: '{{$guid}}'
				})
			};

			fetch('http://alpteqictsols.hipipo.mojaloop-hackathon.io:4001/transfers', config)
				.then((response) => {
					const statusCode = response.status;
					console.log(statusCode, 'status_code');
					return response.json();
				})
				.then((response) => {
					if (response) {
						setPaymentStatus(true);
						toast.success('Added to cart');
						window.location.reload(true);
						setPayment((payment) => ({
							...payment,
							from: '',
							to: '',
							amount: ''
						}));
					}
					console.log(response, 'response');
				})
				.catch((error) => console.log(error, 'pppppp'));
		}
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position='fixed'
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
			>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap>
						AgriBid
					</Typography>
					<div style={{ float: 'right', marginLeft: 1100 }}>
						<Logout />
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='left'
				open={open}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>
					{[ 'Dashboard', 'Orders' ].map((text, index) => (
						<ListItem button key={text}>
							{/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
							<Link to={`${text}`} style={{ textDecoration: 'none', color: '#389683' }}>
								<ListItemText primary={text} />
							</Link>
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{[ 'Payments', 'Reports', 'Contact Support' ].map((text, index) => (
						<ListItem button key={text}>
							{/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
							<Link to={`${text}`} style={{ textDecoration: 'none' }}>
								<ListItemText primary={text} />
							</Link>
						</ListItem>
					))}
				</List>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open
				})}
			>
				<div className={classes.drawerHeader} />
				<h1>Make Payment</h1>
				<div>
					<form className={classes.root} noValidate autoComplete='off' onSubmit={handleSubmit}>
						<TextField
							id='outlined-basic'
							label='From'
							value={payment.from}
							name='from'
							variant='outlined'
							onChange={handleChange}
							required
						/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<TextField
							id='outlined-basic'
							label='to'
							value={payment.to}
							name='to'
							variant='outlined'
							onChange={handleChange}
							required
						/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<TextField
							id='outlined-basic'
							label='amount'
							value={payment.amount}
							name='amount'
							variant='outlined'
							onChange={handleChange}
							required
						/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<button
							style={{
								cursor: 'pointer',
								border: 'none',
								backgroundColor: '#56D393',
								margin: 5,
								fontWeight: 'bold',
								height: '30px',
								width: 60,
								marginTop: 20,
								borderRadius: 5
							}}
						>
							SEND
						</button>
					</form>
				</div>
			</main>
		</div>
	);
}
