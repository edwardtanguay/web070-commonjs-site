const tools = require('./tools.js');

const btnInfoElem = document.querySelector('.btnInfo');
const messageElem = document.querySelector('.message');

btnInfoElem.addEventListener('click', () => {
	const sentence = tools.sentencize('the button has been clicked (using CommonJS and Browserify)');
	messageElem.innerText = sentence;
});
