import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import Nav from './Nav';

const useStyles = makeStyles((theme) => ({
	buttonStyle: (props) => ({
		color: props.cool ? 'red' : 'blue',
		[theme.breakpoints.down('sm')]: {
			color: 'black'
		}
	})
}));

const Header = (props) => {
	const classes = useStyles(props);
	return (
		<div
			style={{
				color: 'green',
				border: '1px solid #389683',
				height: 100,

				backgroundColor: '#389683'
			}}
		>
			<Nav />
		</div>
	);
};
export default Header;
