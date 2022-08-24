const Paragraph = ({ lines }) => {
	return (
		<div className='text-center'>
			{lines.map((text, index) => {
				return <p key={index}>{text}</p>;
			})}
		</div>
	);
};

export default Paragraph;
