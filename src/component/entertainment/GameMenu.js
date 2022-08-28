import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import GameLink from './GameLink';

const GameMenu = () => {
	const games = ['Dragon Cave'];
	const [isSelecting, setIsSelecting] = useState(true);

	const handleGameLinkClick = () => {
		setIsSelecting(false);
	};

	const handleBackClick = () => {
		setIsSelecting(true);
	};

	return isSelecting ? (
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
	);
};

export default GameMenu;
