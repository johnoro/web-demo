const GridItem = ({ colSize }) => {
	return (
		<div className={`col-${colSize}`}>
			<div className='ratio ratio-1x1 border border-dark rounded bg-light'>
				<img
					src={process.env.PUBLIC_URL + '/img/entertainment/land1.png'}
					alt='a simple black and white graphic landscape'
					className='game-img game-img-hvg rounded'
				/>
			</div>
		</div>
	);
};

export default GridItem;
