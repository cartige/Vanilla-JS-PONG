const game = new Game(100, 100);
const view = new View(game);
const body = document.querySelector('body');
body.appendChild(view.mainGame);
view.refreshView(game); // TODO store game in view
let keyPressed = {
    ArrowUp: false,
    ArrowDown: false,
    KeyW: false,
    KeyS: false
};

console.log(keyPressed.ArrowDown);

// document.addEventListener('mousemove', event => {
//     game.playerBar1.positionY = event.clientY;
// });
document.addEventListener('keydown', event => {
    
    keyPressed[event.code] = true;
    // console.log(event.code);
    
});

document.addEventListener('keyup', event => {
    
    keyPressed[event.code] = false;
    // view.refreshView(game);
    
    // console.log(event.code);
});

const nextStep = () => {

    if(keyPressed.ArrowUp){
        game.playerBar2.move('up');
    }else if(keyPressed.ArrowDown){
        game.playerBar2.move('down');
    }
    if(keyPressed.KeyW){
        game.playerBar1.move('up');
    }else if(keyPressed.KeyS){
        game.playerBar1.move('down');
    }
     
    game.nextBallPosition();
    view.refreshView(game);
       
}

setInterval(nextStep, 20);
