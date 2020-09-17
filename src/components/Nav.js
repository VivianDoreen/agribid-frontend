//react
import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router';
const jwt = require('jsonwebtoken');

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch'
		}
	}
}));

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

const Nav = (props) => {
	const [ open, setOpen ] = useState(false);
	const [ loginOpen, setLoginOpen ] = useState(false);
	const [ isLoggedIn, setIsLoggedIn ] = useState(false);
	const [ user, setUser ] = useState({
		name: '',
		email: '',
		password: '',
		confirm_password: '',
		role: ''
	});
	const [ userDetails, setUserDetails ] = useState({});

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClickLoginOpen = () => {
		setLoginOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const handleLoginClose = () => {
		setLoginOpen(false);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((state) => ({ ...state, [name]: value }));
		console.log(name, 'e.target');
	};

	const handleLoginChange = (e) => {
		const { name, value } = e.target;
		setUser((state) => ({ ...state, [name]: value }));
		console.log(name, 'e.target');
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const config = {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Accept: 'application/json'
			},
			mode: 'cors',
			body: JSON.stringify({
				name: user.name,
				email: user.email,
				password: user.password,
				confirm_password: user.confirm_password,
				role: user.role
			})
		};

		fetch('https://agribidtech.herokuapp.com/api/v1/auth/signup', config)
			.then((response) => {
				const statusCode = response.status;
				console.log(statusCode, 'status_code');
				return response.json();
			})
			.then((response) => {
				if (response.message === 'Passwords do not match') {
					toast.error('Passwords do not match');
				} else if (response) {
					toast.success('user successfully registered');
					setUser((user) => ({
						...user,
						name: '',
						email: '',
						password: '',
						confirm_password: '',
						role: ''
					}));
				}
				console.log(response);
			})
			.catch((error) => console.log(error));
	};
	const handleLoginSubmit = (e) => {
		e.preventDefault();
		if (user.email === '' || user.password === '') {
			toast.error('email and password required');
		} else {
			const config = {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					Accept: 'application/json'
				},
				mode: 'cors',
				body: JSON.stringify({
					email: user.email,
					password: user.password
				})
			};

			fetch('https://agribidtech.herokuapp.com/api/v1/auth/login', config)
				.then((response) => {
					const statusCode = response.status;
					console.log(statusCode, 'status_code');
					return response.json();
				})
				.then((response) => {
					if (response) {
						if (response.message === 'Invalid username and password') {
							toast.error('Invalid username or password');
						} else {
							setUserDetails(response);
							setUser((user) => ({
								...user,
								email: '',
								password: ''
							}));
							localStorage.setItem('token', response['x-access-token']);
							localStorage.setItem('role', response['role']);
							toast.success('Successfully Logged In');
							setIsLoggedIn(true);
						}
					}
				})
				.catch((error) => console.log(error));
		}
	};
	const token = localStorage.getItem('token');
	const decoded = jwt.decode(token);
	console.log(userDetails.role, 'Tokennnn');
	const classes = useStyles();

	return (
		<div className='grid-container-nav' style={{ float: 'right' }}>
			{isLoggedIn && userDetails.role === 'farmer' ? (
				<div>
					<Redirect to='/farmer' />
				</div>
			) : isLoggedIn && userDetails.role === 'client' ? (
				<Redirect to='/client' />
			) : (
				<div>
					<div style={{ marginRight: 20, marginTop: 23 }}>
						<Button
							variant='outlined'
							style={{ backgroundColor: '#ffffff', fontWeight: 'bold', margin: 5, color: '#000000', minWidth: 120 }}
						>
							<Link to='/' style={{ textDecoration: 'none' }}>
								Home
							</Link>
						</Button>
						<Button
							variant='outlined'
							onClick={handleClickLoginOpen}
							style={{ backgroundColor: '#56D393', fontWeight: 'bold', margin: 5, minWidth: 120 }}
						>
							Login
						</Button>
						<Button
							variant='outlined'
							onClick={handleClickOpen}
							style={{ backgroundColor: '#56D393', fontWeight: 'bold', margin: 5, minWidth: 120 }}
						>
							Register
						</Button>
					</div>
					<Dialog
						onClose={true}
						aria-labelledby='customized-dialog-title'
						open={loginOpen}
						style={{ border: '1px solid blue' }}
					>
						<DialogTitle id='customized-dialog-title' onClose={handleLoginClose}>
							Login
						</DialogTitle>
						<DialogContent dividers>
							<Typography gutterBottom>
								<form className={classes.root} noValidate autoComplete='off' onSubmit={handleLoginSubmit}>
									<TextField
										id='outlined-basic'
										label='email'
										value={user.email}
										name='email'
										variant='outlined'
										onChange={handleLoginChange}
										required
									/>
									<TextField
										id='outlined-basic'
										label='password'
										type='password'
										value={user.password}
										name='password'
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
									>
										LOGIN
									</button>
								</form>
							</Typography>
						</DialogContent>
					</Dialog>
					<Dialog
						onClose={true}
						aria-labelledby='customized-dialog-title'
						open={open}
						style={{ border: '1px solid blue' }}
					>
						<DialogTitle id='customized-dialog-title' onClose={handleClose}>
							Register User
						</DialogTitle>
						<DialogContent dividers>
							<Typography gutterBottom>
								<form className={classes.root} noValidate autoComplete='off' onSubmit={handleSubmit}>
									<TextField
										id='outlined-basic'
										label='name'
										value={user.name}
										name='name'
										variant='outlined'
										onChange={handleChange}
										required
									/>
									<TextField
										id='outlined-basic'
										label='email'
										type='email'
										value={user.email}
										name='email'
										variant='outlined'
										onChange={handleChange}
										required
									/>
									<br />
									<br />
									<TextField
										id='outlined-basic'
										label='password'
										type='password'
										value={user.password}
										name='password'
										variant='outlined'
										onChange={handleChange}
										required
									/>
									<TextField
										id='outlined-basic'
										label='confirm password'
										type='password'
										value={user.confirm_password}
										name='confirm_password'
										variant='outlined'
										onChange={handleChange}
										required
									/>
									<br />
									<br />
									<FormControl variant='outlined' className={classes.formControl}>
										<InputLabel id='demo-simple-select-outlined-label' required>
											role
										</InputLabel>
										<Select
											labelId='demo-simple-select-outlined-label'
											id='demo-simple-select-outlined'
											value={user.role}
											onChange={handleChange}
											label='role'
											name='role'
										>
											<MenuItem value='farmer'>Farmer</MenuItem>
											<MenuItem value='client'>Client</MenuItem>
										</Select>
									</FormControl>
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
									>
										REGISTER
									</button>
								</form>
							</Typography>
						</DialogContent>
					</Dialog>
				</div>
			)}
		</div>
	);
};

export default Nav;
