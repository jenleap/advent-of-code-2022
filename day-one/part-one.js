const { fileHelper } = require('../file-helper');

fileHelper('input.txt').then(fileOutput => {
    let elves = [];
    let elfIndex = 0;

    console.log(fileOutput);

    fileOutput.forEach(food => {
       if (isNaN(food)) {
            elfIndex++;
       } else {
            elves[elfIndex] = elves[elfIndex] ? elves[elfIndex] + food : food;
       }
    });

    console.log(Math.max(...elves));
});