var reverseWord = function (word) { return word.split('').reverse().join(''); };
var capitalizeWord = function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); };
var repeatWord = function (word, times) { return word.repeat(times); };
// catered for swedish - feel free to change 😊
var countVowels = function (word) { return (word.match(/[aeiouyåäö]/gi) || []).length; };
var transformWord = function (operation, word, param) {
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
var runTransformation = function () {
    var word = document.getElementById('word').value;
    var operation = document.getElementById('operation').value;
    var param = parseInt(document.getElementById('param').value);
    var result = transformWord(operation, word, param);
    var resultContainer = document.getElementById('result');
    resultContainer.textContent = "Result: ".concat(result);
    resultContainer.classList.toggle('active', result !== '');
};
// Show/hide param input based on selected operation
document.getElementById('operation').addEventListener('change', function () {
    var paramContainer = document.getElementById('paramContainer');
    paramContainer.classList.toggle('active', this.value === 'repeat');
});
// Event listener for transform button
if (document.getElementById('transformButton') != null) {
    document.getElementById('transformButton').addEventListener('click', runTransformation);
}
