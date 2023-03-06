const fs = require('fs');
const path = require('path');
const swearWords= []
const swearWordsfile = fs.readFileSync(path.join(__dirname, '../data/swearwords.txt'), 'utf-8').split('\n');

for (const swearWord of swearWordsfile) {
    swearWord.toLocaleLowerCase();
    swearWords.push(swearWord);
}



function findSwearWords(message) {
  const words = message.content.split(" ");
  for (const word of words) {
    for (const swearWord of swearWords) {
      if (word.toLowerCase() === swearWord.toLocaleLowerCase()) {
        const foundSwearWord = swearWord;

        return true, foundSwearWord;
      }
    }
  }
  return false;
}


function findBadLInks(message) {
    
}
 

    

    

module.exports = {findSwearWords, findBadLInks}


