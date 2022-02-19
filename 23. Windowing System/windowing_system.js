// 1. Define Size for storing the dimensions of the window
function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

let size = new Size(1080, 764);
console.log(size.width); // => 1080
console.log(size.height); // => 764

size.resize(1920, 1080);
console.log(size.width); // => 1920
console.log(size.height); // => 1080

// 2. Define Position to store a window position
function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

let point = new Position();
console.log(point.x); // => 0
console.log(point.y); // => 0

point.move(100, 200);
console.log(point.x); // => 100
console.log(point.y); // => 200

// 3. Define a ProgramWindow class 🐙
// class ProgramWindow {
//   constructor() {
//     this.size = new Size();
//     this.position = new Position();
//     this.screenSize = new Size(800, 600);
//   }

//   resize(newSize){
//     if(newSize.width < 1) newSize.width = 1

//   }
// }

// const programWindow = new ProgramWindow();
// console.log(programWindow.screenSize.width); // => 800
