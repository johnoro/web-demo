import Carousel from 'react-bootstrap/Carousel';
import testimonials from './content.js';

const Testimonials = () => {
	return (
		<div className='row'>
			<div className='col-md-12'>
				<h1 className='text-center'>Testimonials</h1>
				<p>
					Testimonials generated via{' '}
					<a href='https://testimonial-generator.com'>
						https://testimonial-generator.com
					</a>
				</p>
				<p>
					Images generated via{' '}
					<a href='https://thispersondoesnotexist.com'>
						https://thispersondoesnotexist.com
					</a>
				</p>
				<hr />
				<Carousel
					id='carouselTestimonials'
					className='carousel slide'
					data-bs-ride='false'>
					{testimonials.map((testimonial, i) => {
						return (
							<Carousel.Item key={i}>
								<img
									src={
										process.env.PUBLIC_URL + `/img/testimonials/user${i}.png`
									}
									alt={testimonial.name}
									className='d-block w-100'
								/>
								<Carousel.Caption>
									<h5>{testimonial.name}</h5>
									<p>{testimonial.testimony}</p>
								</Carousel.Caption>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
		</div>
	);
};

export default Testimonials;
