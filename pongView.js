class View{
    constructor(game){
        
        this.game = game;
        this._mainGame = document.createElement('div');
        this.ball = document.createElement('div');
        this.playerBar1 = document.createElement('div');
        this.playerBar2 = document.createElement('div');
        this.scoreBoard = document.createElement('div');
        this.score = document.createElement('h2');
        this.onePlayer = document.createElement('h2');
        this.twoPlayer = document.createElement('h2');
        this.menu = document.createElement('div');

        // this.vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        // this.vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

        this._mainGame.style.width = '100vw';
        this._mainGame.style.height = '100vh';
        this._mainGame.classList.add('reset-margin-padding', 'relative-help')

        this.ball.style.width = `${(game.ball.size*100)/game.maxWidth}vw`;
        this.ball.style.height = `${(game.ball.size*100)/game.maxHeight}vh`;
        this.ball.style.position = 'absolute';
        this.ball.style.backgroundColor = 'white';
        // this.playerBar1.width = `${game.playerBar1.width}vw`;
        // this.playerBar1.height = `${game.playerBar1.height}vh`;
        // this.playerBar2.width = `${game.playerBar2.width}vw`;
        // this.playerBar2.height = `${game.playerBar2.height}vh`;
        this.menu.classList.add('multi-menu', 'reset-margin-padding');
        this.scoreBoard.classList.add('scoreBoard', 'reset-margin-padding');
        this.score.classList.add('reset-margin-padding');

        this.playerBar1.classList.add('player-bar-style', 'reset-margin-padding');
        this.playerBar2.classList.add('player-bar-style', 'reset-margin-padding');

        this._mainGame.appendChild(this.ball);
        this._mainGame.appendChild(this.playerBar1);
        this._mainGame.appendChild(this.playerBar2);
        this._mainGame.appendChild(this.scoreBoard);
        this._mainGame.appendChild(this.menu);
        this.menu.appendChild(this.onePlayer);
        this.menu.appendChild(this.twoPlayer);
        this._mainGame.appendChild(this.score);
        this.scoreBoard.appendChild(this.score);

        this.game.onScoreChange(() => this.scoreBoardOn());
    }

    get mainGame(){
        return this._mainGame;
    }

    menuOn(){
        this.menu.style.visibility= 'visible';
    }

    menuOff(){
        this.menu.style.visibility= 'hidden';
    }

    scoreBoardOff(){
        this.scoreBoard.style.visibility= 'hidden';
    }

    scoreBoardOn(){
        this.scoreBoard.style.visibility= 'visible';
        setTimeout(() => this.scoreBoardOff(), 1000);
    }

    refreshView(){

        this.ball.style.top = `${(this.game.ball.positionY*100)/this.game.maxHeight}vh`;
        this.ball.style.left = `${(this.game.ball.positionX*100)/this.game.maxWidth}vw`;
        this.playerBar1.style.top = `${(this.game.playerBar1.positionY*100)/this.game.maxHeight}vh`;
        this.playerBar1.style.left = `${(this.game.playerBar1.positionX*100)/this.game.maxWidth}vw`;
        this.playerBar2.style.top = `${(this.game.playerBar2.positionY*100)/this.game.maxHeight}vh`;
        this.playerBar2.style.left = `${(this.game.playerBar2.positionX*100)/this.game.maxWidth}vw`;

        this.score.innerHTML = `${this.game.scoreP1} : ${this.game.scoreP2}`;
        this.onePlayer.innerHTML = "One Player";
        this.twoPlayer.innerHTML = "Two Players";
        // console.log(`${this.vh} vh`);
        // console.log(`${game.ball.positionY} yBall`);
        // console.log((game.ball.positionY*100)/game.maxHeight);
        // console.log(game.playerBar1.positionX/this.vw*100);
        // console.log(game.playerBar1.positionY);
    }
}