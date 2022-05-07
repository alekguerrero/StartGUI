// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>

class Draggable {
  constructor(x, y, w, h, c, fcolor="#CDDC39", fcolor2 = "#00BCD4", rcolor = "#000000") {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.dblclicked = false //the object is not currently double clicked
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.fcolor = fcolor;
    this.fcolor2 = fcolor2;
    this.rcolor = rcolor;
  }
  
  over() {
    // Is mouse over object
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;        
    } else {
      this.rollover = false;      
    }
  }
  // clicked() {
  //   if (doubleClicked = )
  // }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }
   // Attempt to create a double clicked action inspired by this code: https://editor.p5js.org/rich-gg/sketches/ByHGMojwX
   // clickDetected() {
   //   if (newSquare.doubleClicked()) {
   //      this.dblclicked = true;
   //      fill ("#F44336");
   //   }
   //  }
  
  show() {
    this.over();
    this.update();
    //this.clickDetected();
    stroke(0);
    strokeWeight(0);
    // Different fill based on state
    if (this.dragging) {
      fill(this.fcolor);
    } else if (this.rollover) {
      fill("#000000");
    } else if (this.dblclicked) {
      fill ("#F44336");
    } else {
      fill(this.fcolor);
    }
    rect(this.x, this.y, this.w, this.h, this.c=10);
  }
  
    show2() {
    this.over();
    this.update();
    stroke(0);
    strokeWeight(0);
    // Different fill based on state
    if (this.dragging) {
      fill("#00BCD4");
    } else if (this.rollover) {
      fill("#000000");
    } else if (this.dblclicked) {
      fill ("#F44336");
    } else {
      fill("#00BCD4");
    }
    rect(this.x, this.y, this.w, this.h, this.c=80);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
    //tested this method to see if it would work to keep shape static
    this.y = constrain(this.y, 0, 800); 
    this.x = constrain(this.x, 0, 800);
  }

// Attempt to build a connector class using this code: https://editor.p5js.org/sazamore/sketches/erjYDzJIQ
// class Connector extends Draggable {
//   constructor(x1=100, y1=100, x2=100, y2=100, value=0) {
//       Super(x=400, y=400, w=100, h=100, c=0, fcolor="#CDDC39")
//       this.grabbed = false;
//       this.dblClicked = false;
//       this.x1 = x1;
//       this.y1 = y1;
//       this.x2 = x2;
//       this.y2 = y2;
//       // this.fcolor = fcolor;
//       this.value = value;   
  //}
  
//   draw() {
//     push();
//     strokeWeight(14);
//     line(this.x1,this.y1,this.x2,this.y2);
//     circle(this.x2,this.y2,20); //"end" of line
//     fill(value);
//     pop();
    
//     drawNode();
    
//     if (dblClicked()) {
//       fill(this.fcolor = '#673AB7');
//       // rect(this.x, this.y, this.w, this.h, this.c)
//       }
//       if(this.dblClicked){
//         this.dblClicked = false;
//     }
//   }    
//   doubleClicked() {
//   // if (dblClicked()) {
//   //   fill(this.fcolor = '#673AB7');
//   //   rect(this.x, this.y, this.w, this.h, this.c)
//   //   }
//   //   if(this.dblClicked){
//   //     this.dblClicked = false;
//     if (value === 0){
//       value = 255;
//     } else {
//       value = 0;
//     }
//     if(!dblClicked){
//       dblClicked = true;
//     }
//   }
  
//   drawNode() {
//     push();
//     strokeWeight(14);
//     line(x1,y1,x2,y2);
//     circle(x2,y2,20); //"end" of line
//     fill(0);
//     this.grabbed = true;
//   }

//   mouseDragged() {
//     if (grabbed) {
//       this.x2 = mouseX;
//       this.y2 = mouseY;
//     }
//     line(this.x1, this.y1, mouseX, mouseY);
//   }
  
//   mouseRelease() {
//     grabbed = false;
//     fcolor = 'rgb(50,200,100)';
//   }
  
//   //object detection
//   //if (mouseX +30 > this.x && mouseX -30 < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h)
  
  
//   //match position to positions of shapes in list
//   //there may be a better way to do this in p5...
}