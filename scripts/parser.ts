export function parseInput(input: Array<string>, parseContainer: HTMLDivElement, wordToHighlight = '') {
  const ulNode: HTMLUListElement = document.createElement('ul');

  input.forEach((word) => {
    const liNode: HTMLLIElement = document.createElement('li');
    liNode.textContent = word;

    if (wordToHighlight === word) {
      liNode.classList.add('word-found');
    }
    ulNode.appendChild(liNode);
  });

  parseContainer.appendChild(ulNode);
}
