const { strFileHelper } = require('../file-helper');

strFileHelper('input.txt').then(fileOutput => {
    let totalScore = 0;
    fileOutput.forEach(line => {
        const moves = line.split(" ");

        if(moves.length > 1){
            totalScore = totalScore + getScore(moves);
        }  
    });

    console.log(totalScore);
});

getScore = (moves) => {
    if ((moves[0] === 'A' && moves[1] === 'X') ||
        (moves[0] === 'B' && moves[1] === 'Y') ||
        (moves[0] === 'C' && moves[1] === 'Z')
    ) {
        return 3 + getMoveValue(moves[1]);
    } else if ((moves[0] === 'A' && moves[1] === 'Y') ||
        (moves[0] === 'B' && moves[1] === 'Z') ||
        (moves[0] === 'C' && moves[1] === 'X')
    ){
        return 6 + getMoveValue(moves[1]);
    } else {
        return 0 + getMoveValue(moves[1]);
    }
}

getMoveValue = (move) => {
    if (move === 'X') {
        return 1;
    } else if (move === 'Y') {
        return 2;
    } else {
        return 3;
    }
}