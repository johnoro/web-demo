import './HumansVsGoblins.css';
import useTitle from 'common/useTitle';
import Game from 'entertainment/game';
import Grid from './Grid';

const HumansVsGoblins = () => {
	useTitle('Humans vs Goblins');

	return (
		<Game
			title='Humans vs Goblins'
			lines={['Controls: T.B.A.']}
			isInGame={true}
			playAgainCb={() => {}}>
			<Grid />
		</Game>
	);
};

export default HumansVsGoblins;
