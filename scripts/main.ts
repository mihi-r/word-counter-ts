import parseInput from './parser';

const intialInput: HTMLTextAreaElement = document.querySelector('.initial-input');
const wordCount: HTMLParagraphElement = document.querySelector('.word-count');
const countButton: HTMLButtonElement = document.querySelector('.count-btn');
const parsedInput: HTMLDivElement = document.querySelector('.parsed-input');
const specificWord: HTMLInputElement = document.querySelector('.specific-word');

countButton.onclick = function countButtonOnClicked() {
  while (parsedInput.children.length > 1) {
    const parsedInputUL = <Element>parsedInput.lastChild;
    parsedInputUL.remove();
  }

  let preprocessedInput: Array<string> = intialInput.value.trim().toLowerCase().replace(/(\.|,|!|\?|\(|\)|'|")/gm, '').split(' ');
  preprocessedInput = preprocessedInput.filter(word => word !== '');

  parseInput(preprocessedInput, parsedInput, specificWord.value.toLowerCase());

  if (specificWord.value) {
    preprocessedInput = preprocessedInput.filter(word => word === specificWord.value.toLowerCase());
  }

  wordCount.textContent = `Word count: ${preprocessedInput.length}`;
};