const { strFileHelper } = require('../file-helper');

strFileHelper('input.txt').then(fileOutput => {
    let counter = 0;
   
    fileOutput.forEach(pair => {
        let elfPairs = pair.split(',');
        elfPairs = elfPairs.map(elf => elf.split('-').map(num => parseInt(num)));

        if (elfPairs[1]) {
            if (elfPairs[0][1] >= elfPairs[1][0] && elfPairs[0][0] <= elfPairs[1][1] ) {
                counter++;
            } 
        }
    });

    console.log(counter);
});