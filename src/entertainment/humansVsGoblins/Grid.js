import GridItem from './GridItem';

// TODO:
// set up separate portions of grid for a view of sorts
// (i.e. it expands as a player travels)

// make game pad for directional input
// add multiple control schemes (e.g. WASD, arrow keys, clickable icons and game pad, tab & enter, etc.?)
// animate movement
// add random movement of enemies and potentially npcs too
// add some check to initiate combat and interactions when two or more characters are in the same location

// make combat view for combat like a FF/RPG game
// make combat system with partially randomized results
// animate combat

// make rounds that correspond to a player's moves

// make human and goblin classes
// build out stats for each class
// add level/experience system, stat system, and equipment system
// consider NPCs as well, with things like shops, quests, etc.

// layer grid icons:
// bottom: land
// middle: significant locations/enemies/npcs
// top: player
const Grid = ({ _ }) => {
	return (
		<div className='grid'>
			{Array(4)
				.fill(0)
				.map((_, i) => (
					<div
						className='row d-flex justify-content-evenly text-center mb-2'
						key={i}>
						{Array(4)
							.fill(0)
							.map((_, j) => (
								<GridItem
									key={j}
									colSize={3}
								/>
							))}
					</div>
				))}
		</div>
	);
};

export default Grid;
