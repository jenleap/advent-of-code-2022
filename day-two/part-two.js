const { strFileHelper } = require('../file-helper');

strFileHelper('input.txt').then(fileOutput => {
    let totalScore = 0;
    fileOutput.forEach(line => {
        const moves = line.split(" ");

        if(moves.length > 1){
            totalScore = totalScore + tallyScore(moves);
        }  
    });

    console.log(totalScore);
});

tallyScore = (moves) => {
    if ((moves[0] === 'A' && moves[1] === 'Y') ||
        (moves[0] === 'B' && moves[1] === 'X') ||
        (moves[0] === 'C' && moves[1] === 'Z')
    ) {
        return getScoreValue(moves[1]) + getMoveValue('X');
    } else if ((moves[0] === 'A' && moves[1] === 'Z') ||
        (moves[0] === 'B' && moves[1] === 'Y') ||
        (moves[0] === 'C' && moves[1] === 'X')
    ){
        return getScoreValue(moves[1]) + getMoveValue('Y');
    } else {
        return getScoreValue(moves[1]) + getMoveValue('Z');
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

getScoreValue = (result) => {
    if (result === 'X') {
        return 0;
    } else if (result === 'Y') {
        return 3;
    } else {
        return 6;
    }
}