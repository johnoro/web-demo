const makeParagraphDiv = (
	lines,
	divClasses = ['text-center'],
	pClasses = []
) => {
	let paragraphs = document.createElement('div');
	paragraphs.classList.add(...divClasses);
	for (let line of lines) {
		let p = document.createElement('p');
		p.classList.add(...pClasses);
		p.textContent = line;
		paragraphs.appendChild(p);
	}
	return paragraphs;
};

export default makeParagraphDiv;
