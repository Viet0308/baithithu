class Rectangle {
    width;
    height;
    constructor (width,height) {
        this.width = width;
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    setWidth(width) {
        this.width = width;
    }



}
let myRectangle = new Rectangle(150,50);
let width = myRectangle.getWidth();
let height = myRectangle.getHeight();

myRectangle.setWidth(200);
myRectangle.getWidth();

document.write(myRectangle.getWidth());


let canvas = document.getElementById("Bai4");
let ctx = canvas.getContext('2d');
ctx.fillStyle='rgba(42,101,250,0.62)';
ctx.fillRect(10, 10, width, height)