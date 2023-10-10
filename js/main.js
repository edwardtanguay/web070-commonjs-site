import * as tools from './tools.js';

const btnInfoElem = document.querySelector('.btnInfo');
const messageElem = document.querySelector('.message');

btnInfoElem.addEventListener('click', () => {
	const sentence = tools.sentencize('the button has been clicked');
	messageElem.innerText = sentence;
});
