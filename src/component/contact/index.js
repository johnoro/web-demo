import { useState } from 'react';

const Contact = () => {
	const [message, setMessage] = useState('');

	const handleChange = e => {
		setMessage(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (/^\s*$/.test(message)) {
			alert('Please enter a message.');
		} else {
			e.target.reset(); // pseudo form submission
			alert('Thank you for your message!');
		}
	};

	return (
		<div className='row'>
			<div className='col-md-12'>
				<h1 className='text-center'>Contact</h1>
				<form
					name='contactForm'
					onSubmit={handleSubmit}
					id='contact-form'>
					<div className='mb-3'>
						<label
							htmlFor='contact-email'
							className='form-label'>
							Email address
						</label>
						<input
							type='email'
							className='form-control'
							id='contact-email'
							placeholder='name@example.com'
							required
						/>
					</div>
					<div className='mb-3'>
						<label
							htmlFor='contact-message'
							className='form-label'>
							Message
						</label>
						<textarea
							className='form-control'
							id='contact-message'
							onChange={handleChange}
							rows='5'
							placeholder='A message is required.'
							required></textarea>
					</div>
					<button
						className='btn btn-primary btn-lg btn-block'
						type='submit'>
						Send
					</button>
				</form>
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
