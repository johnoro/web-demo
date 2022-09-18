import useTitle from 'common/useTitle';

const Home = () => {
	useTitle('Home');

	return (
		<>
			<div className='row'>
				<div className='col-md-12'>
					<h1 className='text-center'>Hello World!</h1>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
					mollitia, numquam modi explicabo eaque dolorum facilis perspiciatis
					veniam ullam, sequi corrupti natus architecto ratione odio esse atque
					eum, distinctio quia?
				</p>
			</div>
			<hr />
			<div className='justify-content-center'>
				<img
					src={process.env.PUBLIC_URL + '/img/dragon-icon.png'}
					alt="A dragon's head and neck displayed in white on a black circle with a white background."
					className='d-block mx-auto shrink-img'
				/>
			</div>
		</>
	);
};

export default Home;
