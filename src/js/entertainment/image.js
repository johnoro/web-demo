import { caveParagraph, introParagraph } from './paragraphs.js';
import outcomes from './outcomes.js';

const makeImage = caveInd => {
	let caveImg = document.createElement('img');
	caveImg.src = './img/entertainment/cave.png';
	caveImg.classList.add('game-img');
	caveImg.addEventListener('click', e => {
		/* Cleanup */
		introParagraph.classList.add('d-none');
		caveParagraph.classList.remove('d-none');
		const caveImgContainer = document.querySelector('.cave-img-container');
		caveImgContainer.classList.add('d-none');

		/* Results */
		const result = document.createElement('p');
		result.innerText = outcomes[caveInd];
		caveParagraph.appendChild(result);

		/* Option for next game */
		const playAgain = document.createElement('button');
		playAgain.classList.add('btn', 'btn-primary', 'play-again');
		playAgain.innerText = 'Play Again';
		playAgain.addEventListener('click', e => {
			window.location.reload();
		});
		caveParagraph.appendChild(playAgain);
	});
	return caveImg;
};

export default makeImage;
