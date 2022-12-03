const { strFileHelper } = require('../file-helper');

strFileHelper('input.txt').then(fileOutput => {
    let sumOfPriorities = 0;

    fileOutput.forEach(rucksack => {
        const commonItem = getCommonItem(rucksack);
        
        sumOfPriorities = (commonItem) ? sumOfPriorities + getItemValue(commonItem) : sumOfPriorities;
    });

    console.log(sumOfPriorities);
});

getCommonItem = (rucksack) => {
    const compartmentSize = rucksack.length / 2;
    const compartment1 = rucksack.slice(0, compartmentSize).split('');
    const compartment2 = rucksack.slice(-compartmentSize).split('');
    return compartment1.filter(item => compartment2.includes(item))[0];
}

getItemValue = (item) => {
    const charCode = item.charCodeAt();

    if (charCode < 97){
        return charCode - 38;
    } else {
        return charCode - 96;
    }
}