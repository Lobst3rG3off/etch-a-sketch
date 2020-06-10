//select the elements on the page-canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');



// set up canvas for drawing

// const width = canvas.width;
// const height = canvas.height;

// make a variable called height and width from the same properties as our canvas
const {width, height} = canvas;

// create random x and y starting points on the canvas

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);




ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath();//start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();



//write a draw function

//write a handler for the keys

//clear or shake function

//listen for arrow keys