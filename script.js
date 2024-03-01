// js hangman using prompts and alerts

var words = [
    "hello",
    "program",
    "hangman",
    "array"
];

var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
for (i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var lettersLeft = word.length;

while (lettersLeft > 0) {
    alert(answerArray.join(" "));
    var guess = prompt("Guess a letter!");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("shoudl be 1 letter");
    } else {
        for (j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                lettersLeft--;
            }
        }
    }
}

alert(answerArray.join(" "));
alert("You won! The answer was " + word);

