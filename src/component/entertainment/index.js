import { Outlet } from 'react-router-dom';
import { Fragment, useState } from 'react';
import useTitle from 'component/helper/useTitle';
import GameLink from './GameLink';

const Entertainment = () => {
	useTitle('Entertainment');
	const games = ['Dragon Cave'];
	const [isSelecting, setIsSelecting] = useState(true);

	const handleGameLinkClick = () => {
		setIsSelecting(false);
	};

	const handleBackClick = () => {
		setIsSelecting(true);
	};

	return (
		<div className='row'>
			<div className='col-md-12'>
				<h1 className='text-center'>Entertainment</h1>
				<p>
					Below are a selection of game(s) to play for entertainment purposes.
					Feel free to try any and all of them and see what you like!
				</p>
				<hr />
				{isSelecting ? (
					<ul className='nav justify-content-evenly'>
						{games.map((link, i) => {
							return (
								<GameLink
									key={i}
									view={link}
									onClick={handleGameLinkClick}
								/>
							);
						})}
					</ul>
				) : (
					<>
						<Outlet />
						<hr />
						<ul className='nav justify-content-end me-2'>
							<GameLink
								view='Back to game selection'
								to='/entertainment'
								className='btn btn-dark'
								onClick={handleBackClick}
							/>
						</ul>
					</>
				)}
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
