import { Button, InputAdornment, makeStyles, TextField, Toolbar } from '@material-ui/core';
import React from 'react';
import Nav from './Nav';
import agribid from '../images-agribid/agribid_header_image.png';
import agribid1 from '../images-agribid/AgriBidProduce.jpg';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	buttonStyle: (props) => ({
		color: props.cool ? 'red' : 'blue',
		[theme.breakpoints.down('sm')]: {
			color: 'black'
		}
	}),
	searchInput: {
		width: '650px',
		borderRadius: '5px',
		backgroundColor: '#ffffff',
		margin: '0px auto',
		'&:input:focus': {
			outline: 'none'
		}
	}
}));

const handleSearch = () => {};
const Header = (props) => {
	const classes = useStyles(props);
	return (
		<div
			style={{
				color: 'green',
				height: 100,
				backgroundColor: '#389683'
			}}
		>
			<img src={agribid} style={{ margin: '8px 0px 0px 14px' }} />
			<Nav />
			<div
				style={{
					height: '200px',
					backgroundImage: 'url(' + agribid1 + ')',
					paddingTop: '40px'
				}}
			>
				<div
					style={{
						fontSize: '35px',
						fontWeight: 600,
						fontStyle: 'italic',
						color: '#ffffff',
						textAlign: 'center'
						// padding: '10px 0px 10px 0px'
					}}
				>
					Agricultural Products at your fingure tips
				</div>
				<Toolbar>
					<TextField
						className={classes.searchInput}
						variant='outlined'
						placeholder='Search For Products'
						name='search'
						// value=''
						onChange={handleSearch}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<Search />
								</InputAdornment>
							)
						}}
					/>
				</Toolbar>
			</div>
		</div>
	);
};
export default Header;
