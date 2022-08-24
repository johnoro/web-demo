import makeParagraphDiv from '../helpers/makeParagraphDiv.js';
import { lines } from './content.js';
const { intro, cave } = lines;

let introParagraph = makeParagraphDiv(intro);
let caveParagraph = makeParagraphDiv(cave);
caveParagraph.classList.add('d-none');

export { introParagraph, caveParagraph };
