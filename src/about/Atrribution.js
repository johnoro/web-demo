import capitalize from 'util/capitalize';

const Attribution = ({ title, creator, site, link, desc = null }) => {
	return (
		<li>
			<a
				href={`https://www.${link}`}
				title={title}>
				{desc === null ? capitalize(title) : desc} created by {creator} - {site}
			</a>
		</li>
	);
};

export default Attribution;
