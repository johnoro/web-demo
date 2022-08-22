import content from './content.js';
import makeControl from './control.js';
import makeItem from './item.js';

const LEN = content.length;

let carousel = document.querySelector('.carousel');

let indicators = document.createElement('div');
indicators.classList.add('carousel-indicators');
for (let i = 0; i < LEN; i++) {
	let btn = document.createElement('button');
	btn.type = 'button';
	btn.dataset.bsTarget = '#carouselTestimonials';
	btn.dataset.bsSlideTo = i;
	btn.ariaLabel = `Slide ${i + 1}`;
	if (i === 0) {
		btn.classList.add('active');
		btn.ariaCurrent = 'true';
	}
	indicators.appendChild(btn);
}

let inner = document.createElement('div');
inner.classList.add('carousel-inner');
for (let i = 0; i < LEN; i++) {
	inner.appendChild(makeItem(i));
}

carousel.appendChild(indicators);
carousel.appendChild(inner);

let control = makeControl('prev', 'Previous');
carousel.appendChild(control);
control = makeControl('next', 'Next');
carousel.appendChild(control);
