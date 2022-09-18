import { useState, useEffect } from 'react';
import getRandomInt from 'util/randomInt.js';
import Game from 'entertainment/game';
import { lines, outcomes } from './content.js';
import CaveIcon from './CaveIcon.js';

const DragonCave = ({ _ }) => {
	const [isSelecting, setIsSelecting] = useState(true);
	const [randomInd, setRandomInd] = useState(0);
	const [selectedOutcome, setSelectedOutcome] = useState('');
	const [caveIcons, setCaveIcons] = useState([]);

	const randInt = () => setRandomInd(getRandomInt(outcomes.length));

	useEffect(() => {
		randInt();
		setCaveIcons(
			outcomes.map((outcome, i) => (
				<CaveIcon
					key={i}
					handleClick={() => {
						setIsSelecting(false);
						setSelectedOutcome(outcome);
					}}
				/>
			))
		);
	}, []);

	const playAgain = () => {
		randInt();
		setSelectedOutcome('');
		setIsSelecting(true);
	};

	return (
		<Game
			title='Dragon Cave'
			lines={isSelecting ? lines.intro : [...lines.cave, selectedOutcome]}
			isInGame={isSelecting}
			playAgainCb={playAgain}>
			<div className='d-flex justify-content-evenly'>
				{caveIcons.slice(randomInd)}
				{caveIcons.slice(0, randomInd)}
			</div>
		</Game>
	);
};

export default DragonCave;
