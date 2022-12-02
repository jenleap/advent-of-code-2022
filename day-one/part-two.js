const { fileHelper } = require('../file-helper');

fileHelper('input.txt').then(fileOutput => {
    let elves = [];
    let elfIndex = 0;

    fileOutput.forEach(food => {
       if (isNaN(food)) {
            elfIndex++;
       } else {
            elves[elfIndex] = elves[elfIndex] ? elves[elfIndex] + food : food;
       }
    });
 
    const sortedElves = elves.sort();
    
    let top3Elves = sortedElves.slice(-3);

    console.log(top3Elves.reduce((a, b) => a + b));
});