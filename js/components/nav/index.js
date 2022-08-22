import htmlFileNames from './htmlFileNames.js';
import capitalize from '../../util/capitalize.js';
import makeVR from '../helpers/makeVR.js';
import makeHR from '../helpers/makeHR.js';
import makeNavItem from './item.js';

let main = document.querySelector('body > .container');
let nav = document.createElement('nav');
let ul = document.createElement('ul');
ul.classList.add('nav', 'justify-content-center');

htmlFileNames.forEach(fileName => {
	let text = capitalize(fileName);
	if (fileName == 'index') text = 'Home';

	const title = document.title;
	if (text === title) fileName = '#';
	else fileName += '.html';

	ul.appendChild(makeVR());
	ul.appendChild(makeNavItem(text, fileName));
});
ul.appendChild(makeVR());

nav.appendChild(ul);
const oldNav = document.querySelector('#nav');
const firstHR = makeHR();
main.replaceChild(firstHR, oldNav);
main.insertBefore(nav, firstHR);
main.insertBefore(makeHR(), nav);
