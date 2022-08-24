import { Fragment } from 'react';
import content from './content';
import NavItem from './Item';
import VR from 'component/helper/VR';

const Navigation = ({ props }) => {
	const { links } = content;
	const len = links.length;
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
