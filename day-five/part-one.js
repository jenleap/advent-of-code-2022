const { strFileHelper } = require('../file-helper');

strFileHelper('input.txt').then(fileOutput => {

    const rawStacks = fileOutput.slice(0, 9);
    const rawDirections = fileOutput.slice(10);

    const stacks = buildStacks(rawStacks);
    const directionsArr = getDirections(rawDirections);

    // Move the crates as per the directions
    directionsArr.forEach(move => {
        const numCrates = parseInt(move[0]);
        const startPos = parseInt(move[1]);
        const endPos = parseInt(move[2]);

        for (let i = 0; i < numCrates; i++) {
            const crate = stacks[startPos].pop();
            stacks[endPos].push(crate);
        }
    });

    console.log(getTopCrates(stacks));
});

buildStacks = (rawStacks) => {
    rawStacks.reverse();
    let stacks = [];

    stacks.push([]);

    for (let j = 1; j < rawStacks[0].length + 1; j = j + 4) {
        const newStack = [];

        for (let i = 1; i < rawStacks.length; i++) {
            if (rawStacks[i][j] && rawStacks[i][j].trim().length) {
                newStack.push(rawStacks[i][j]);
            }
        }

        stacks.push(newStack);
    }

    return stacks;
};

getDirections = (rawDirections) => {
    return rawDirections.map(line => {
        return line.split(" ").filter(word => !isNaN(word));
    });
};

getTopCrates = (stacks) => {
    return stacks.map(stack => stack.pop()).join('');
}