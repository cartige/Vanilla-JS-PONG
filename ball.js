class Ball{
    constructor(positionX, positionY, vectorX, vectorY, size){
        this._positionX = positionX;
        this._positionY = positionY;
        this._vectorX = vectorX;
        this._vectorY = vectorY;
        this._size = size;
    }

    get positionX(){
        return this._positionX;
    }

    get positionY(){
        return this._positionY;
    }

    get size(){
        return this._size;
    }

    get vectorX(){
        return this._vectorX;
    }

    get vectorY(){
        return this._vectorY;
    }

    set vectorX(vectorX){
        this._vectorX = vectorX;
    }

    set vectorY(vectorY){
        this._vectorY = vectorY;
    }

    set positionX(x){
        this._positionX = x;
    }

    set positionY(y){
        this._positionY = y;
    }
}