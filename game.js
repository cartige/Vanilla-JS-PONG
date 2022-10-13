class Game{
    constructor(maxWidth, maxHeight){
        this._playerBar1 = new Bar(0.7*maxWidth/100, 15*maxHeight/100, 0, 42.5*maxHeight/100); //0.7% de maxWidth et 15% maxHeight
        this._playerBar2= new Bar(0.7*maxWidth/100, 15*maxHeight/100, 99*maxWidth/100, 42.5*maxHeight/100);  //0.7% de maxWidth et 15% maxHeight
        this._ball = new Ball(30*maxWidth/100, 30*maxHeight/100, 0.35*maxWidth/100, 0.25*maxHeight/100, 2.7*maxHeight/100); //2.7% de maxHeight
        this._maxWidth = maxWidth;
        this._maxHeight = maxHeight;
        this.onScoreChangeCallback = () => {};
        this._scoreP1 = 0;
        this._scoreP2 = 0;
    }

    get playerBar1(){
        return this._playerBar1;
    }

    get playerBar2(){
        return this._playerBar2;
    }
    
    get ball(){
        return this._ball;
    }

    get maxWidth(){
        return this._maxWidth;
    }

    get maxHeight(){
        return this._maxHeight;
    }

    get scoreP1(){
        return this._scoreP1;
    }

    get scoreP2(){
        return this._scoreP2;
    }

    set scoreP1(scoreP1){
        this._scoreP1 = scoreP1;
    }

    set scoreP2(scoreP2){
        this._scoreP2 = scoreP2;
    }

    resetBall(){
        this._ball.positionX = 30*this.maxWidth/100;
        this._ball.positionY = 30*this.maxHeight/100;
        this._ball.vectorX = 0.35*this.maxWidth/100;
        this._ball.vectorY = 0.25*this.maxHeight/100;
    }

    nextBallPosition(){
        
        this._ball.positionX += this._ball.vectorX;
        this._ball.positionY += this._ball.vectorY;

        const collidePlayerBar1 = this._ball.positionY + this._ball.size >= this._playerBar1.positionY && this._ball.positionY <= this._playerBar1.positionY + this._playerBar1.height;
        const collidePlayerBar2 = this._ball.positionY + this._ball.size >= this._playerBar2.positionY && this._ball.positionY <= this._playerBar2.positionY + this._playerBar2.height;

        if(this._ball.positionY < 0 || this._ball.positionY > this._maxHeight-this._ball.size){
            this._ball.vectorY = -this._ball.vectorY;
        }

    
        if(this._ball.positionX < this._playerBar1.width){
            if(collidePlayerBar1){
                this._ball.vectorX += 0.01*this.maxWidth/100;
                this._ball.vectorX = -this._ball.vectorX;
            }else{
                this.onScoreChangeCallback();
                this._scoreP2++;
                this.resetBall();
            }
        }

        if(this._ball.positionX > this.maxWidth - (this._playerBar2.width + this._ball.size)){
            if(collidePlayerBar2){
                this._ball.vectorX += 0.01*this.maxWidth/100;
                this._ball.vectorX = -this._ball.vectorX;
            }else{
                this.onScoreChangeCallback();
                this._scoreP1++;
                this.resetBall();
            }
        }
    
    }

    onScoreChange(callback){
        this.onScoreChangeCallback = callback;
    }

}