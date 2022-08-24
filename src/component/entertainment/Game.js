import { useState, Fragment } from 'react';
import { lines, outcomes } from './content.js';
import Paragraph from './Paragraph.js';
import Image from './Image.js';

// TODO: implement functionality & randomize caves w/ util function
const Game = () => {
	const [isSelecting, setIsSelecting] = useState(true);

	return (
		<div className='game'>
			<Paragraph lines={isSelecting ? lines.intro : lines.cave} />
			<div className='d-flex justify-content-evenly'>
				{outcomes.map((outcome, i) => (
					<Image
						key={i}
						caveIndex={i}
					/>
				))}
			</div>
		</div>
	);
};

export default Game;
