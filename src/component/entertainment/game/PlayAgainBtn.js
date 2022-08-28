const playAgain = ({ playAgain }) => {
	return (
		<div className='d-flex justify-content-center'>
			<button
				className='btn btn-dark btn-lg play-again'
				onClick={playAgain}>
				Play Again
			</button>
		</div>
	);
};

export default playAgain;
