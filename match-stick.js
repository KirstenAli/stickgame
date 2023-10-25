function generateMatchBox(matchBox){
    const randomNum = generateRandomNumber(2,4) *3;

    for (let i=0; i<randomNum; i++)
        matchBox.push(i);
}

function play(game){

    if(game.matchesClicked ===2){
        game.matchBox.pop();

    } else {
        game.matchBox.splice(-2);
    }

    if(game.matchBox.length===0)
        endScreenModal.show();

    game.timer = undefined;
    game.matchesClicked =0;
}

function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createModalObj(modalId){
    return new bootstrap.Modal(document.getElementById(modalId), { backdrop: 'static', keyboard: false });
}