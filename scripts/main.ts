import { parseInput } from './parser';
import { Preprocessor } from './preprocessor';

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

  const preprocessor = new Preprocessor(intialInput.value);
  preprocessor.splitWords();

  parseInput(preprocessor.preprocessedInput, parsedInput, specificWord.value.toLowerCase());

  if (specificWord.value) {
    preprocessor.onlyKeepSpecificWords(specificWord.value.toLowerCase());
  }

  wordCount.textContent = `Word count: ${preprocessor.getPreprocessedWordCount()}`;
};