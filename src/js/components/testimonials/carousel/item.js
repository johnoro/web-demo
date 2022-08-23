import content from './content.js';

const makeItem = i => {
	let item = document.createElement('div');
	item.classList.add('carousel-item');
	if (i === 0) item.classList.add('active');
	let img = document.createElement('img');
	img.src = `./img/testimonials/user${i}.png`;
	img.alt = 'A generated image of a person who does not exist.';
	img.classList.add('d-block', 'w-100');
	item.appendChild(img);

	let caption = document.createElement('div');
	caption.classList.add('carousel-caption');
	let name = document.createElement('h5');
	name.innerText = content[i].name;
	let testimony = document.createElement('p');
	testimony.innerText = content[i].testimony;
	caption.appendChild(name);
	caption.appendChild(testimony);
	item.appendChild(caption);

	return item;
};

export default makeItem;
