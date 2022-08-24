import getRandomInt from '../util/randomInt.js';
import makeImage from './image.js';
import { introParagraph, caveParagraph } from './paragraphs.js';
import outcomes from './outcomes.js';

const container = document.querySelector('.game');

container.appendChild(introParagraph);
container.appendChild(caveParagraph);

let caveDiv = document.createElement('div');
caveDiv.classList.add('d-flex', 'justify-content-evenly', 'cave-img-container');

let randStartInd = getRandomInt(outcomes.length);
for (let i = randStartInd; i < outcomes.length; i++) {
	caveDiv.appendChild(makeImage(i));
}

for (let i = 0; i < randStartInd; i++) caveDiv.appendChild(makeImage(i));

container.appendChild(caveDiv);
