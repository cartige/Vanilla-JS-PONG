class Bar{
    constructor(width, height, positionX, positionY){
        this._width = width;
        this._height = height;
        this._positionX = positionX;
        this._positionY = positionY;
        this._barSpeed = 6;
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    get positionX(){
        return this._positionX;
    }

    get positionY(){
        return this._positionY;
    }

    set positionY(clientY){
        this._positionY = clientY;
    }

    move(direction){
        if(direction === 'up'){
            this._positionY -= this._barSpeed;
        }else if(direction === 'down'){
            this._positionY += this._barSpeed;
        }
    }
}