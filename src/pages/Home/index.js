import React, { useContext } from 'react';
import Header from '../../components/Header';
import Chicken from '../../images-agribid/AgriBidChickenIcon.jpg';
import Slider from '../../images-agribid/slider.png';
import axios from '../../plugins/axios';
import Cow from '../../images-agribid/AgriBidCowIcon.jpg';
import Spice from '../../images-agribid/AgriBidSpiceIcon.jpg';
import Grain from '../../images-agribid/AgriBidGrainsIcon.jpg';
import Fruit from '../../images-agribid/AgriBidFruitIcon.jpg';
import Fish from '../../images-agribid/AgriBidFishIcon.jpg';
import Eggs from '../../images-agribid/AgriBidEggsIcon.jpg';
import Veg from '../../images-agribid/AgriBidVegIcon.jpg';
import Api from '../../services/Api';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ContextUse, useTheme, useThemUpdate } from '../../ContextUse';
import { useAuthContext } from '../../Auth';

//stale while revalidate
import useSWR from 'swr';

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	},
	container: {
		position: 'relative',
		width: '50%',
		maxWidth: '300px'
	},

	image: {
		display: 'block',
		width: '100%',
		height: 'auto'
	},
	overlay: {
		position: 'absolute',
		bottom: 0,
		// background: 'rgb(0, 0, 0)',
		background: 'rgba(0, 0, 0, 0.5)',
		color: '#f1f1f1',
		width: '100%',
		transition: '.5s ease',
		opacity: 0,
		color: 'white',
		fontSize: '20px',
		padding: '20px',
		textAlign: 'center'
	},
	container: {
		'&:hover .overlay ': {
			opacity: 2
		}
	}
}));

const Home = () => {
	const classes = useStyles();
	const users = Api.fetchUsers;

	const { data: user, error } = useSWR(`farmerProduce`, users);
	const cool = false;
	return (
		<div>
			<Header cool={cool} />
			<img src={Slider} className='logo' alt='' style={{ width: 1450, height: 200 }} />
			<main style={{ marginTop: 20 }}>
				<div style={{ width: '70%', margin: '0px auto', display: 'flex', flexWrap: 'wrap' }}>
					<Card className={classes.root}>
						<CardContent>
							<img
								src={Chicken}
								className='logo'
								alt=''
								style={{
									border: '1px solid #000000',
									borderRadius: 5,
									marginRight: 20,
									marginBottom: 20,
									width: 230,
									cursor: 'pointer'
								}}
							/>
							<Typography variant='body2' component='p'>
								Chicken
								<br />
								1kg 20000
							</Typography>
						</CardContent>
						<CardActions>
							<Button variant='contained' size='small' style={{ backgroundColor: '#56D393' }}>
								Add to cart
							</Button>
						</CardActions>
					</Card>
					<Card className={classes.root}>
						<CardContent>
							<img
								src={Chicken}
								className='logo'
								alt=''
								style={{
									border: '1px solid #000000',
									borderRadius: 5,
									marginRight: 20,
									marginBottom: 20,
									width: 230,
									cursor: 'pointer'
								}}
							/>
							<Typography variant='body2' component='p'>
								Chicken
								<br />
								1kg 20000
							</Typography>
						</CardContent>
						<CardActions>
							<Button variant='contained' size='small' style={{ backgroundColor: '#56D393' }}>
								Add to cart
							</Button>
						</CardActions>
					</Card>
					<Card className={classes.root}>
						<CardContent>
							<img
								src={Chicken}
								className='logo'
								alt=''
								style={{
									border: '1px solid #000000',
									borderRadius: 5,
									marginRight: 20,
									marginBottom: 20,
									width: 230,
									cursor: 'pointer'
								}}
							/>
							<Typography variant='body2' component='p'>
								Chicken
								<br />
								1kg 20000
							</Typography>
						</CardContent>
						<CardActions>
							<Button variant='contained' size='small' style={{ backgroundColor: '#56D393' }}>
								Add to cart
							</Button>
						</CardActions>
					</Card>
					<Card className={classes.root}>
						<CardContent>
							<img
								src={Chicken}
								className='logo'
								alt=''
								style={{
									border: '1px solid #000000',
									borderRadius: 5,
									marginRight: 20,
									marginBottom: 20,
									width: 230,
									cursor: 'pointer'
								}}
							/>
							<Typography variant='body2' component='p'>
								Chicken
								<br />
								1kg 20000
							</Typography>
						</CardContent>
						<CardActions>
							<Button variant='contained' size='small' style={{ backgroundColor: '#56D393' }}>
								Add to cart
							</Button>
						</CardActions>
					</Card>
					<Card className={classes.root}>
						<CardContent>
							<img
								src={Chicken}
								className='logo'
								alt=''
								style={{
									border: '1px solid #000000',
									borderRadius: 5,
									marginRight: 20,
									marginBottom: 20,
									width: 230,
									cursor: 'pointer'
								}}
							/>
							<Typography variant='body2' component='p'>
								Chicken
								<br />
								1kg 20000
							</Typography>
						</CardContent>
						<CardActions>
							<Button variant='contained' size='small' style={{ backgroundColor: '#56D393' }}>
								Add to cart
							</Button>
						</CardActions>
					</Card>
					<Card className={classes.root}>
						<CardContent>
							<img
								src={Chicken}
								className='logo'
								alt=''
								style={{
									border: '1px solid #000000',
									borderRadius: 5,
									marginRight: 20,
									marginBottom: 20,
									width: 230,
									cursor: 'pointer'
								}}
							/>
							<Typography variant='body2' component='p'>
								Chicken
								<br />
								1kg 20000
							</Typography>
						</CardContent>
						<CardActions>
							<Button variant='contained' size='small' style={{ backgroundColor: '#56D393' }}>
								Add to cart
							</Button>
						</CardActions>
					</Card>
					<Card className={classes.root}>
						<CardContent>
							<img
								src={Chicken}
								className='logo'
								alt=''
								style={{
									border: '1px solid #000000',
									borderRadius: 5,
									marginRight: 20,
									marginBottom: 20,
									width: 230,
									cursor: 'pointer'
								}}
							/>
							<Typography variant='body2' component='p'>
								Chicken
								<br />
								1kg 20000
							</Typography>
						</CardContent>
						<CardActions>
							<Button variant='contained' size='small' style={{ backgroundColor: '#56D393' }}>
								Add to cart
							</Button>
						</CardActions>
					</Card>
					<Card className={classes.root}>
						<CardContent>
							<img
								src={Chicken}
								className='logo'
								alt=''
								style={{
									border: '1px solid #000000',
									borderRadius: 5,
									marginRight: 20,
									marginBottom: 20,
									width: 230,
									cursor: 'pointer'
								}}
							/>
							<Typography variant='body2' component='p'>
								Chicken
								<br />
								1kg 20000
							</Typography>
						</CardContent>
						<CardActions>
							<Button variant='contained' size='small' style={{ backgroundColor: '#56D393' }}>
								Add to cart
							</Button>
						</CardActions>
					</Card>
					<Card className={classes.root}>
						<CardContent>
							<img
								src={Chicken}
								className='logo'
								alt=''
								style={{
									border: '1px solid #000000',
									borderRadius: 5,
									marginRight: 20,
									marginBottom: 20,
									width: 230,
									cursor: 'pointer'
								}}
							/>
							<Typography variant='body2' component='p'>
								Chicken
								<br />
								1kg 20000
							</Typography>
						</CardContent>
						<CardActions>
							<Button variant='contained' size='small' style={{ backgroundColor: '#56D393' }}>
								Add to cart
							</Button>
						</CardActions>
					</Card>
					<div className={classes.container}>
						<img src={Grain} alt='Avatar' className={classes.image} />
						<div className={classes.overlay}>My Name is John</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;
