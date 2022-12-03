const { strFileHelper } = require('../file-helper');

strFileHelper('input.txt').then(fileOutput => {
        let sumOfPriorities = 0;

        let rucksackArray = [];

        for (let i = 0; i < fileOutput.length - 3; i = i + 3) {
            rucksackArray.push(fileOutput.slice(i, i + 3));
        }

        rucksackArray.forEach(group => {
            const splitGroup = group.map(g => g.split(''));
            const commonItem = getCommonItem(splitGroup);
            sumOfPriorities = (commonItem) ? sumOfPriorities + getItemValue(commonItem) : sumOfPriorities;
        });
        
        console.log(sumOfPriorities);
});

getCommonItem = (group) => {
    return group[0].filter(item => group[1].includes(item) && group[2].includes(item))[0];
}

getItemValue = (item) => {
    const charCode = item.charCodeAt();

    if (charCode < 97){
        return charCode - 38;
    } else {
        return charCode - 96;
    }
}