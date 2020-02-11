const fs = require('fs');

const breedDetailsFromFile = function(breed, cb) {
console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) {
      return cb(data);
    } else {
      return cb(undefined)
    }
  });
};

let callBack = breed => console.log(breed);

breedDetailsFromFile('bombay', callBack);

module.exports = breedDetailsFromFile;