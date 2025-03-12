const reverseWord: (word: string) => string = word => word.split('').reverse().join('');

const capitalizeWord: (word: string) => string = word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

const repeatWord: (word: string, times: number) => string = (word, times) => word.repeat(times);

// catered for swedish - feel free to change 😊
const countVowels: (word: string) => number = word => (word.match(/[aeiouyåäö]/gi) || []).length;

const transformWord: (operation: boolean, word: string, param: number) => string = (operation, word, param) => {
  switch (operation) {
    case 'reverse':
      return reverseWord(word);
    case 'capitalize':
      return capitalizeWord(word);
    case 'repeat':
      return repeatWord(word, param);
    case 'countVowels':
      return countVowels(word);
    default:
      return "Invalid operation";
  }
};

const runTransformation = () => {
  const word: string = document.getElementById('word').value;
  const operation: boolean = document.getElementById('operation').value;
  const param: number = parseInt(document.getElementById('param').value);
  const result: string = transformWord(operation, word, param);
  const resultContainer = document.getElementById('result');
  resultContainer.textContent = `Result: ${result}`;
  resultContainer.classList.toggle('active', result !== '');
};

// Show/hide param input based on selected operation
document.getElementById('operation').addEventListener('change', function () {
  const paramContainer: any = document.getElementById('paramContainer');
  paramContainer.classList.toggle('active', this.value === 'repeat');
});

// Event listener for transform button
document.getElementById('transformButton').addEventListener('click', runTransformation)
