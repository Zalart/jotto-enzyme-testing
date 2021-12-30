export function getLetterMatchCount (guessedWord, secretWord) {
    let counter = 0;
    let letters = [];
    const guessedWordArr = guessedWord.split('');
    const secretWordArr = secretWord.split('');
    for(let i=0; i<guessedWordArr.length; i++) {
       if (!letters.includes(guessedWordArr[i])) {
           secretWordArr.includes(guessedWordArr[i]) && counter++;
           letters.push(guessedWordArr[i]);
       }
    }
    return counter;
}