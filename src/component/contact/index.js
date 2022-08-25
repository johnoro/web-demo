import 'css/contact.css';
import useTitle from 'component/helper/useTitle';
import Form from './form';

const Contact = () => {
	useTitle('Contact');

	return (
		<div className='row'>
			<div className='col-md-12'>
				<h1 className='text-center'>Contact</h1>
				<Form />
				<hr />
				<address className='fw-semibold'>
					<p>
						Phone: <span className='fst-italic'>012-345-6789</span>
					</p>
					<p>
						Email:{' '}
						<span className='fst-italic'>notarealaddress@domain.extension</span>
					</p>
					<p>
						Address: <span className='fst-italic'>123 Local Road</span>
					</p>
				</address>
			</div>
			<img
				src={process.env.PUBLIC_URL + '/img/contact/telephone.png'}
				alt='A telephone icon.'
				className='rounded-circle mx-auto d-block shrink-img'
			/>
		</div>
	);
};

export default Contact;
