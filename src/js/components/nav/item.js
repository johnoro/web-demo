const makeNavItem = (text, href) => {
	let li = document.createElement('li');
	li.classList.add('nav-item');
	let a = document.createElement('a');
	a.classList.add('nav-link');
	a.href = href;
	a.textContent = text;
	li.appendChild(a);
	return li;
};

export default makeNavItem;
