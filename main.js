const game = new Game(1000, 1000);
const view = new View(game);
const playerBarHeight = game.playerBar1.height;
const ballSize = game.ball.size;
const fps = 120;
const body = document.querySelector('body');
let intervalID = null;
body.appendChild(view.mainGame);
view.refreshView();
let keyPressed = {
    ArrowUp: false,
    ArrowDown: false,
    KeyW: false,
    KeyS: false
};
let isOnePlayer = false;
let isTwoPlayer = false;
// console.log(keyPressed.ArrowDown);

// document.addEventListener('mousemove', event => {
//     game.playerBar1.positionY = event.clientY;
// });
document.addEventListener('keydown', event => {
    
    keyPressed[event.code] = true;
    if(event.code === 'Space'){
        if(intervalID === null){
            intervalID = setInterval(nextStep, 1000/fps);
            view.menuOff();
        }else{
            clearInterval(intervalID);
            intervalID = null;
            view.menuOn();
        }
    }
    // console.log(event.code);
    
});

document.addEventListener('keyup', event => {
    
    keyPressed[event.code] = false;
    // view.refreshView(game);
    
    // console.log(event.code);
});

const nextStep = () => {

    if(keyPressed.KeyW){
        game.playerBar1.move('up');
    }else if(keyPressed.KeyS){
        game.playerBar1.move('down');
    }

    if(isOnePlayer){
        if(game.playerBar2.positionY > game.ball.positionY + ballSize){
            game.playerBar2.move('up');
        }else if (view.game.playerBar2.positionY + playerBarHeight < game.ball.positionY){
            game.playerBar2.move('down');
        }
    }else if(isTwoPlayer){
        if(keyPressed.ArrowUp){
            game.playerBar2.move('up');
        }else if(keyPressed.ArrowDown){
            game.playerBar2.move('down');
        }
    }
     
    game.nextBallPosition();
    view.refreshView();
       
}
// (!(game.playerBar2.positionY + playerBarWidth/2 === game.ball.positionY + ballSize/2))

view.onePlayer.addEventListener('click', event => {
    intervalID = setInterval(nextStep, 1000/fps);
    isOnePlayer = true;
    isTwoPlayer = false;
    view.menuOff();
})

view.twoPlayer.addEventListener('click', event => {
    intervalID = setInterval(nextStep, 1000/fps);
    isTwoPlayer = true;
    isOnePlayer = false;
    view.menuOff();
})

// const intervalID = setInterval(nextStep, 1000/fps);
