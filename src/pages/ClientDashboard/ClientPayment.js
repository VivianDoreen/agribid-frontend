import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import { toast } from 'react-toastify';
import Toolbar from '@material-ui/core/Toolbar';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import List from '@material-ui/core/List';
import CloseIcon from '@material-ui/icons/Close';
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
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch'
		}
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

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		'& > *': {
// 			margin: theme.spacing(1),
// 			width: '25ch'
// 		}
// 	}
// }));

const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2)
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500]
	}
});

const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant='h6' style={{ fontWeight: 'bolder' }}>
				{children}
			</Typography>
			{onClose ? (
				<IconButton aria-label='close' className={classes.closeButton} onClick={onClose}>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2)
	}
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1)
	}
}))(MuiDialogActions);

export default function PersistentDrawerLeft() {
	const classes = useStyles();
	const theme = useTheme();
	const [ open, setOpen ] = React.useState(true);
	const [ menuState, setMenuState ] = useState('');
	const [ token, setToken ] = useState('');
	const [ paymentStatus, setPaymentStatus ] = useState(false);
	const [ confirmPin, setConfirmPin ] = React.useState(false);
	const [ confirmSuccessMessage, setConfirmSuccessMessage ] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleClickOpen = () => {
		setConfirmPin(true);
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

	const confirmationMessage = () => {
		setConfirmSuccessMessage(true);
		toast.success('Amount sent successfully');

		// if (confirmSuccessMessage) {
		// 	toast.success('Amount sent successfully');
		// }
		console.log(confirmSuccessMessage, 'confirmSuccessMessage');
	};

	const handleSubmit = (e) => {
		console.log(payment, 'payment');
		const { from, to, amount } = payment;
		e.preventDefault();
		if (payment.from === '' || payment.to === '' || payment.amount === '') {
			toast.error('All fields are required');
		} else {
			// const config = {
			// 	method: 'POST',
			// 	headers: {
			// 		'content-type': 'application/json',
			// 		Accept: 'application/json'
			// 	},
			// 	mode: 'no-cors',
			// 	body: JSON.stringify({
			// 		from: {
			// 			displayName: 'alpteqictsolsFirst alpteqictsolsLast',
			// 			idType: 'MSISDN',
			// 			idValue: '978111111111'
			// 		},
			// 		to: {
			// 			idType: 'MSISDN',
			// 			idValue: '978333333333'
			// 		},
			// 		amountType: 'SEND',
			// 		currency: 'EUR',
			// 		amount: '10',
			// 		transactionType: 'TRANSFER',
			// 		initiatorType: 'CONSUMER',
			// 		note: 'test payment',
			// 		homeTransactionId: '{{$guid}}'
			// 	})
			// };

			const config = {
				method: 'POST',
				mode: 'no-cors',
				body: JSON.stringify({
					from: {
						displayName: 'alpteqictsolsFirst alpteqictsolsLast',
						idType: 'MSISDN',
						idValue: '978111111111'
					},
					to: {
						idType: 'MSISDN',
						idValue: '978333333333'
					},
					amountType: 'SEND',
					currency: 'EUR',
					amount: '10',
					transactionType: 'TRANSFER',
					initiatorType: 'CONSUMER',
					note: 'test payment',
					homeTransactionId: '{{$guid}}'
				})
			};
			console.log(config.body, 'config');

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

	const handleLoginChange = (e) => {
		const { name, value } = e.target;
		// setUser((state) => ({ ...state, [name]: value }));
		// console.log(name, 'e.target');
	};

	const handleLoginClose = () => {
		setConfirmPin(false);
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
					<h3>Mobile Money</h3>
					{/* <form className={classes.root} noValidate autoComplete='off'> */}
					<TextField
						id='outlined-basic'
						label='Senders Number'
						value={payment.from}
						name='from'
						variant='outlined'
						onChange={handleChange}
						required
					/>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<TextField
						id='outlined-basic'
						label='Receivers Number'
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
						onClick={handleClickOpen}
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
					{/* </form> */}
					{console.log(confirmPin, 'connfim')}
					<Dialog
						onClose={handleLoginClose}
						aria-labelledby='customized-dialog-title'
						open={confirmPin}
						style={{ border: '1px solid blue' }}
					>
						<DialogTitle id='customized-dialog-title' onClose={handleLoginClose}>
							Enter Pin
						</DialogTitle>
						<DialogContent dividers>
							<Typography gutterBottom>
								{/* <form className={classes.root} noValidate autoComplete='off'> */}
								<TextField
									id='outlined-basic'
									label='*****'
									name='email'
									variant='outlined'
									onChange={handleLoginChange}
									required
								/>

								<br />
								<br />

								<button
									style={{
										cursor: 'pointer',
										border: 'none',
										backgroundColor: '#56D393',
										margin: 5,
										fontWeight: 'bold',
										height: '50px',
										borderRadius: 5
									}}
									onClick={confirmationMessage}
								>
									Confirm
								</button>
								{/* </form> */}
							</Typography>
						</DialogContent>
					</Dialog>
				</div>
			</main>
		</div>
	);
}
