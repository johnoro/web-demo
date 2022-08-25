const InputGroup = ({ Tag, labelText, htmlFor, ...tagProps }) => {
	return (
		<div className='mb-3'>
			<label
				htmlFor={`contact-${htmlFor}`}
				className='form-label'>
				{labelText}
			</label>
			<Tag
				type='email'
				className='form-control'
				id={`contact-${htmlFor}`}
				required
				{...tagProps}
			/>
		</div>
	);
};

export default InputGroup;
