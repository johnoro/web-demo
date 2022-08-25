import Game from './dragonCave';
import useTitle from 'component/helper/useTitle';

const Entertainment = () => {
	useTitle('Entertainment');

	return (
		<div className='row'>
			<div className='col-md-12'>
				<h1 className='text-center'>Entertainment</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolor,
					tempora ad, magni repellat quae consequuntur necessitatibus beatae
					distinctio voluptas pariatur unde veritatis officia voluptatum vero
					nobis? Aut cumque placeat, vel sunt architecto ea tempora!
				</p>
				<hr />
				<Game />
				<hr />
			</div>
			<img
				src='./img/dragon-icon.png'
				alt="A dragon's head and neck displayed in white on a black circle with a white background."
				className='mx-auto d-block shrink-img'
			/>
		</div>
	);
};

export default Entertainment;
