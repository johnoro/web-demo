import { Fragment } from 'react';
import content from './content';
import NavItem from './Item';
import VR from 'common/VR';

const Navigation = ({ _ }) => {
	const { links } = content;
	return (
		<>
			<hr />
			<nav>
				<ul className='nav justify-content-center'>
					{links.map((link, i) => {
						return (
							<Fragment key={i}>
								<VR />
								<NavItem
									view={link}
									to={link === 'home' ? '/' : `/${link}`}
								/>
							</Fragment>
						);
					})}
					<VR />
				</ul>
			</nav>
			<hr />
		</>
	);
};

export default Navigation;
