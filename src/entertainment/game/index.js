import './Game.css';
import { useState, useCallback, useEffect } from 'react';
import useTitle from 'common/useTitle';
import Paragraph from './Paragraph.js';
import PlayAgainBtn from './PlayAgainBtn.js';

const Game = ({ children, title, lines, isInGame, playAgainCb }) => {
	useTitle(title);
	const [isPlaying, setIsPlaying] = useState(true);

	useEffect(() => {
		if (!isInGame) {
			setIsPlaying(false);
		}
	}, [isInGame]);

	const playAgain = useCallback(() => {
		playAgainCb();
		setIsPlaying(true);
	}, [playAgainCb]);

	return (
		<div className='game'>
			<Paragraph lines={lines} />
			{isPlaying ? children : <PlayAgainBtn playAgain={playAgain} />}
		</div>
	);
};

export default Game;
