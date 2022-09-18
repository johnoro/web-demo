import useTitle from 'common/useTitle';
import GameMenu from './GameMenu';

const Entertainment = () => {
	useTitle('Entertainment');

	return (
		<div className='row'>
			<div className='col-md-12'>
				<h1 className='text-center'>Entertainment</h1>
				<p>
					Below are a selection of game(s) to play for entertainment purposes.
					Feel free to try any and all of them and see what you like!
				</p>
				<hr />
				<GameMenu />
				<hr />
			</div>
			<img
				src={process.env.PUBLIC_URL + '/img/dragon-icon.png'}
				alt="A dragon's head and neck displayed in white on a black circle with a white background."
				className='mx-auto d-block shrink-img'
			/>
		</div>
	);
};

export default Entertainment;
