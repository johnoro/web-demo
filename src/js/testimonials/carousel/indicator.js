const makeIndicator = i => {
	let btn = document.createElement('button');
	btn.type = 'button';
	btn.dataset.bsTarget = '#carouselTestimonials';
	btn.dataset.bsSlideTo = i;
	btn.ariaLabel = `Slide ${i + 1}`;
	if (i === 0) {
		btn.classList.add('active');
		btn.ariaCurrent = 'true';
	}

	return btn;
};

export default makeIndicator;
