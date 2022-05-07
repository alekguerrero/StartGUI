var moods = []; //holder of new shapes
var moods2 = []; //holder of new shapes w different color

// Test code to enable trashcan from this example: https://www.freecodecamp.org/news/how-to-build-a-drawing-app-with-p5js-9b8d16e9364a/
const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');
const clear = document.getElementById('clear');
const paths = [];
let currentPath = [];

function mousePressed() {
	currentPath = [];
	paths.push(currentPath);
}
clear.addEventListener('click', () => {
	paths.splice(0);
	background(255);
});

//let sidebar
function setup() {
    createCanvas(800, 800);
    textFont("FontAwesome");
    this.grabbed = false;
  
    // var trash = createButton("trash");
}

function draw()  {
    background("#E5E4E4");
  
    //loop through all the values and draw them
    for (let i = 0; i < moods.length; i = i + 1) {
        moods[i].show();
      }
  
    for (let i = 0; i < moods2.length; i = i + 1) {
        moods2[i].show2();
      }
}
  
//checks to see if mouse on shape AND mouse button pressed
function mousePressed() {
    for (let i = 0; i < moods.length; i = i + 1) {
        moods[i].pressed();
      }
    for (let i = 0; i < moods2.length; i = i + 1) {
        moods2[i].pressed();
    }
}

//check to see if mouse button released
function mouseReleased() { 
    for (let i = 0; i < moods.length; i = i + 1) {
        moods[i].released();
      }
    for (let i = 0; i < moods2.length; i = i + 1) {
        moods2[i].released();
      }
}

// for (let i = 0; i < moods.length; i = i + 1)
//   moods[i].doubleClicked(changeColor);

// // define color somewhere, make sure you're calling it
// function changeColor() {
//   fcolor = "#F44336";
  
// }

// function mouseDoubleClicked(){
//     for (let i = 0; i < moods.length; i = i + 1) {
//         moods[i].doubleClicked();
//     }
// }

//Makes a new object and saves it to newMood. Appends newMood to the moods array. Prints length of moods array for SANITY.
function makeSquare() { 
    var newMood = new Draggable(random(200,400),
                                random(200,400), 80, 80);

    append(moods,newMood) //previously appended to moods
    console.log(moods.length);
  
    //newMood.clickDetected();
  }

//Makes a new object and saves it to newMood. Appends newMood to the moods array. Prints length of moods array for SANITY.
function makeCircle(c=0) {  
    var newMood = new Draggable(random(200,400),
                                random(200,400), 80, 80, c=c);
  
    append(moods2,newMood) //previously appended to moods
    console.log(moods2.length);
  
    //newMood.clickDetected();
  
// }

// function resetSketch() {
//     clear();
//     background(128);
}