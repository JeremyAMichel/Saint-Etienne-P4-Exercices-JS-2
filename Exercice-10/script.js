const word = prompt('Enter a word');

let formattedWord = '';
for (let i = 0; i < word.length; i++) {
    formattedWord += word[i] + '\n';
}
alert(formattedWord);