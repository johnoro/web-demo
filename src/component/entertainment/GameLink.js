import { Link } from 'react-router-dom';
import makeTitleLink from 'util/makeTitleLink';

const GameLink = ({ view, ...props }) => {
	return (
		<li className='nav-item'>
			<Link
				className='btn btn-dark btn-lg'
				role='button'
				to={makeTitleLink(view)}
				{...props}>
				{view}
			</Link>
		</li>
	);
};

export default GameLink;
