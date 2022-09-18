import { NavLink } from 'react-router-dom';
import capitalize from 'util/capitalize';

const Item = ({ view, to = view }) => {
	return (
		<li className='nav-item'>
			<NavLink
				className='nav-link'
				to={to}>
				{capitalize(view)}
			</NavLink>
		</li>
	);
};

export default Item;
