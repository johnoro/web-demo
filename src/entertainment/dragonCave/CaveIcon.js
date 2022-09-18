const CaveIcon = ({ handleClick }) => {
	return (
		<img
			src={process.env.PUBLIC_URL + '/img/entertainment/cave.png'}
			alt='a simple black and white graphic entrance to a cave'
			className='game-img'
			onClick={handleClick}
		/>
	);
};

export default CaveIcon;
