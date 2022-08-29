import 'css/About.css';
import useTitle from 'component/helper/useTitle';
import Attribution from './Atrribution';
import attributions from './content';

const About = () => {
	useTitle('About');

	return (
		<div className='row'>
			<div className='col-md-12'>
				<h1 className='text-center'>About</h1>
				<p>
					These web pages are created by John O'Rourke for demonstrative
					purposes, hence the usage of filler text in some places.
				</p>
				<h4>Attributions:</h4>
				<ul className='attributions'>
					{attributions.map((details, i) => (
						<Attribution
							{...details}
							key={i}
						/>
					))}
				</ul>
				<hr />
				<p className='fw-semibold'>
					Source code:{' '}
					<a href='https://github.com/johnoro/web-demo'>
						https://github.com/johnoro/web-demo
					</a>
				</p>
			</div>
			<img
				src={process.env.PUBLIC_URL + '/img/about/self.jpg'}
				alt="Site's author posed on a snowy mountaintop holding a long stick as if about to throw it like a spear."
				className='rounded-circle mx-auto d-block shrink-img'
			/>
		</div>
	);
};

export default About;
