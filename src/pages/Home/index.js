import React, { useContext } from 'react';
import Header from '../../components/Header';
import Chicken from '../../images-agribid/AgriBidChickenIcon.jpg';
import Slider from '../../images-agribid/AgriBidProduce.jpg';
import axios from '../../plugins/axios';
import Cow from '../../images-agribid/AgriBidCowIcon.jpg';
import Spice from '../../images-agribid/AgriBidSpiceIcon.jpg';
import Grain from '../../images-agribid/AgriBidGrainsIcon.jpg';
import Fruit from '../../images-agribid/AgriBidFruitIcon.jpg';
import Fish from '../../images-agribid/AgriBidFishIcon.jpg';
import Eggs from '../../images-agribid/AgriBidEggsIcon.jpg';
import Veg from '../../images-agribid/AgriBidVegIcon.jpg';
import Mango from '../../images-agribid/mango.jpeg';
import Api from '../../services/Api';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ContextUse, useTheme, useThemUpdate } from '../../ContextUse';
import { useAuthContext } from '../../Auth';

const products = [
	{
		image: '',
		name: 'chicken',
		price: '30000 Ugx'
	}
];

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
		padding: 0
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
	const cool = false;

	return (
		<div>
			<Header cool={cool} />
			<main style={{ marginTop: '12em' }}>
				<div
					class='bg-grey my-3 py-4 position-relative'
					style={{ width: '1000px', display: 'flex', margin: '0px auto' }}
				>
					<div class='card shadow-sm m-2' data-type='main' data-category='{trip.category}'>
						<img
							data-src={`https://vault.pcs.the-true-jones.com/images/9840302201019000000056?w=720&h=405`}
							src={Mango}
							height='188px'
							class='card-img-top'
						/>
						<div class='card-body'>
							<h4 class='card-title mb-1 lead' />
							<div class='d-flex justify-content-between align-items-center mb-2'>
								<span class='text-muted'>
									<span class='badge badge-secondary' title='no of activities in this trip'>
										<i class='fas fa-hiking mr-1' />2
									</span>
									<span class='badge badge-success' title='no of accomodations in this trip'>
										<i class='fas fa-hotel mr-1' />5
									</span>
									<span class='badge badge-danger' title='no of destinations in this trip'>
										<i class='fas fa-globe-africa mr-1' />9
									</span>
								</span>
								<div class='small'>Ratings</div>
							</div>
							<p class='card-text'>Mangoes</p>
						</div>
						<div class='card-footer text-center border-top-0 bg-white pb-2 pt-0'>
							<Button variant='contained' size='small' style={{ backgroundColor: '#56D393' }}>
								Add to cart
							</Button>
						</div>
					</div>
					<div class='card shadow-sm m-2' data-type='main' data-category='{trip.category}'>
						<img
							data-src={`https://vault.pcs.the-true-jones.com/images/9840302201019000000056?w=720&h=405`}
							src={Mango}
							height='188px'
							class='card-img-top'
						/>
						<div class='card-body'>
							<h4 class='card-title mb-1 lead' />
							<div class='d-flex justify-content-between align-items-center mb-2'>
								<span class='text-muted'>
									<span class='badge badge-secondary' title='no of activities in this trip'>
										<i class='fas fa-hiking mr-1' />2
									</span>
									<span class='badge badge-success' title='no of accomodations in this trip'>
										<i class='fas fa-hotel mr-1' />5
									</span>
									<span class='badge badge-danger' title='no of destinations in this trip'>
										<i class='fas fa-globe-africa mr-1' />9
									</span>
								</span>
								<div class='small'>Ratings</div>
							</div>
							<p class='card-text'>Mangoes</p>
						</div>
						<div class='card-footer text-center border-top-0 bg-white pb-2 pt-0'>
							<Button variant='contained' size='small' style={{ backgroundColor: '#56D393' }}>
								Add to cart
							</Button>
						</div>
					</div>
					<div class='card shadow-sm m-2' data-type='main' data-category='{trip.category}'>
						<img
							data-src={`https://vault.pcs.the-true-jones.com/images/9840302201019000000056?w=720&h=405`}
							src={Mango}
							height='188px'
							class='card-img-top'
						/>
						<div class='card-body'>
							<h4 class='card-title mb-1 lead' />
							<div class='d-flex justify-content-between align-items-center mb-2'>
								<span class='text-muted'>
									<span class='badge badge-secondary' title='no of activities in this trip'>
										<i class='fas fa-hiking mr-1' />2
									</span>
									<span class='badge badge-success' title='no of accomodations in this trip'>
										<i class='fas fa-hotel mr-1' />5
									</span>
									<span class='badge badge-danger' title='no of destinations in this trip'>
										<i class='fas fa-globe-africa mr-1' />9
									</span>
								</span>
								<div class='small'>Ratings</div>
							</div>
							<p class='card-text'>Mangoes</p>
						</div>
						<div class='card-footer text-center border-top-0 bg-white pb-2 pt-0'>
							<Button variant='contained' size='small' style={{ backgroundColor: '#56D393' }}>
								Add to cart
							</Button>
						</div>
					</div>
				</div>
			</main>
			{/* <main style={{ marginTop: 60 }}>
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
			</main> */}
		</div>
	);
};

export default Home;
