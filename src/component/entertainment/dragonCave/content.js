const intro = [
	'You are in a land full of dragons.',
	'Around you, you see a number of caves.',
	'The dragon in any given cave may be friendly, and might share its treasure with you.',
	'The dragon may also be greedy and hungry, and might eat you on sight.',
	'Which cave will you go into?'
];

const cave = [
	'You approach the cave...',
	'It is dark and spooky...',
	'A large dragon jumps out in front of you! He opens his jaws and...'
];

// TODO: expand consequences
const outcomes = [
	'gobbles you down in one bite!',
	'spits out a horde of treasure at your feet!'
];

const lines = { cave, intro };

export { lines, outcomes };
