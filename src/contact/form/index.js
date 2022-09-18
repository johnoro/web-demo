import { useState } from 'react';
import InputGroup from './InputGroup';
import Input from './Input';
import Textarea from './Textarea';

const Form = () => {
	const [message, setMessage] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		if (/^\s*$/.test(message)) {
			alert('Please enter a message.');
		} else {
			e.target.reset(); // pseudo form submission
			alert('Thank you for your message!');
		}
	};

	const handleChange = e => {
		setMessage(e.target.value);
	};

	return (
		<form
			name='contactForm'
			onSubmit={handleSubmit}
			id='contact-form'>
			<InputGroup
				Tag={Input}
				labelText='Email address'
				htmlFor='email'
				type='email'
				placeholder='name@example.com'
			/>
			<InputGroup
				Tag={Textarea}
				labelText='Message'
				htmlFor='message'
				placeholder='A message is required.'
				rows='5'
				onChange={handleChange}
			/>

			<button
				className='btn btn-primary btn-lg btn-block'
				type='submit'>
				Send
			</button>
		</form>
	);
};

export default Form;
