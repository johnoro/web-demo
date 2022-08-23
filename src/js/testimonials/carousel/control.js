const makeControl = (type, text) => {
	let btn = document.createElement('button');
	btn.type = 'button';
	btn.classList.add('carousel-control-' + type);
	btn.dataset.bsTarget = '#carouselTestimonials';
	btn.dataset.bsSlide = type;

	let span = document.createElement('span');
	span.classList.add('carousel-control-' + type + '-icon');
	btn.appendChild(span);
	span = document.createElement('span');
	span.classList.add('visually-hidden');
	span.innerText = text;
	btn.appendChild(span);

	return btn;
};

export default makeControl;
