var cnvColor = "#E5E4E4"
var moods = []; //holder of new shapes
var moods2 = []; //holder of new shapes w different color

//let sidebar
function setup() {
    createCanvas(800, 800);
    textFont("FontAwesome");
}

function draw()  {
    background(cnvColor);
  
    //loop through all the values and draw them
    for (let i = 0; i < moods.length; i = i + 1) {
        moods[i].showSquare();
      }
  
    for (let i = 0; i < moods2.length; i = i + 1) {
        moods2[i].showCircle();
      }
}

//Makes a new object and saves it to newMood. Appends newMood to the moods array.
function makeSquare(w=80, h=80) { 
    var newMood = new MoodActions(random(200,400),
                                random(200,400), w=w, h=h);

    append(moods,newMood) //previously appended to moods
    console.log(moods.length);
  }

//Makes a new object and saves it to newMood. Appends newMood to the moods array.
function makeCircle(w=85, h=85, c=0) {  
    var newMood = new MoodActions(random(200,400),
                                random(200,400), w=w, h=h, c=c);
  
    append(moods2,newMood) //previously appended to moods
    console.log(moods2.length);
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