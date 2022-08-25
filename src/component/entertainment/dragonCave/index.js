import { useState, useEffect } from 'react';
import getRandomInt from 'util/randomInt.js';
import { lines, outcomes } from './content.js';
import Paragraph from './Paragraph.js';
import CaveIcon from './CaveIcon.js';

const Game = ({ _ }) => {
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

	return (
		<div className='game'>
			<Paragraph
				lines={isSelecting ? lines.intro : [...lines.cave, selectedOutcome]}
			/>
			{isSelecting ? (
				<div className='d-flex justify-content-evenly'>
					{caveIcons.slice(randomInd)}
					{caveIcons.slice(0, randomInd)}
				</div>
			) : (
				<div className='d-flex justify-content-center'>
					<button
						className='btn btn-primary play-again'
						onClick={() => {
							randInt();
							setSelectedOutcome('');
							setIsSelecting(true);
						}}>
						Play Again
					</button>
				</div>
			)}
		</div>
	);
};

export default Game;
