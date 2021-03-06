import React, { useState } from 'react';
import clsx from 'clsx';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import { toast } from 'react-toastify';

import Logout from '../../components/Logout';
import axios from '../../plugins/axios';

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
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
import Table from '../../components/FarmerProduceTable';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

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

export default function PersistentDrawerLeft() {
	const classes = useStyles();
	const theme = useTheme();
	const [ open, setOpen ] = React.useState(true);
	const [ openAddButton, setOpenAddButton ] = React.useState(false);
	const [ produce, setProduce ] = useState({
		produce_name: '',
		quantity: '',
		unit_price: ''
	});
	const [ menuState, setMenuState ] = useState('');

	const handleClickOpen = () => {
		setOpenAddButton(true);
	};

	const handleClose = () => {
		setOpenAddButton(false);
	};

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProduce((state) => ({ ...state, [name]: value }));
		console.log(name, 'e.target');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (produce.produce_name === '' || produce.quantity === '' || produce.unit_price === '') {
			toast.error('All fields are required');
		} else {
			const config = {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					Accept: 'application/json',
					'x-access-token': localStorage.getItem('token')
				},
				mode: 'cors',
				body: JSON.stringify({
					produce_name: produce.produce_name,
					quantity: produce.quantity,
					unit_price: produce.unit_price
				})
			};

			fetch('https://agribidtech.herokuapp.com/api/v1/produce', config)
				.then((response) => {
					const statusCode = response.status;
					console.log(statusCode, 'status_code');
					return response.json();
				})
				.then((response) => {
					// {message: "Your session has expired, please login again"}
					if (response.message === 'Your session has expired, please login again') {
						toast.success('Your session has expired, please login again');
					}
					if (response) {
						toast.success('Farmer produce successfully registered');
						window.location.reload(true);
						setProduce((produce) => ({
							...produce,
							produce_name: '',
							quantity: '',
							unit_price: ''
						}));
					}
					console.log(response);
				})
				.catch((error) => console.log(error));
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
					{[ 'Dashboard', 'Produce', 'Requests' ].map((text, index) => (
						<ListItem button key={text}>
							{/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
							<Link to={`${text}`} style={{ textDecoration: 'none' }}>
								<ListItemText primary={text} />
							</Link>
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{[ 'Payments', 'Reports' ].map((text, index) => (
						<ListItem button key={text}>
							{/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
							<ListItemText primary={text} />
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
				<Typography paragraph>
					<h1>Produce</h1>
					<p style={{ float: 'right', marginRight: 15 }}>
						<Button
							onClick={handleClickOpen}
							style={{ backgroundColor: '#56D393', fontWeight: 'bold', margin: 5 }}
							variant='contained'
						>
							Add
						</Button>
					</p>
					<div>
						<Dialog
							onClose={true}
							aria-labelledby='customized-dialog-title'
							open={openAddButton}
							style={{ border: '1px solid blue' }}
						>
							<DialogTitle id='customized-dialog-title' onClose={handleClose}>
								Add Produce
							</DialogTitle>
							<DialogContent dividers>
								<Typography gutterBottom>
									<form className={classes.root} noValidate autoComplete='off' onSubmit={handleSubmit}>
										<TextField
											id='outlined-basic'
											label='produce name'
											value={produce.produce_name}
											name='produce_name'
											variant='outlined'
											onChange={handleChange}
											required
										/>
										<br />
										<br />
										<TextField
											id='outlined-basic'
											label='quantity'
											value={produce.quantity}
											name='quantity'
											variant='outlined'
											onChange={handleChange}
											required
										/>
										<br />
										<br />
										<TextField
											id='outlined-basic'
											label='unit price'
											value={produce.unit_price}
											name='unit_price'
											variant='outlined'
											onChange={handleChange}
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
												height: '30px',
												marginTop: 20,
												borderRadius: 5
											}}
										>
											SAVE
										</button>
									</form>
								</Typography>
							</DialogContent>
						</Dialog>
					</div>
					<Table />
				</Typography>
			</main>
		</div>
	);
}
