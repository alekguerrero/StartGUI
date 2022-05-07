// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>

class MoodActions {
  constructor(x, y, w, h, c, sColor, cColor, rColor) {
    this.x = x; // x=coordinate of shape
    this.y = y; // y-coordinate of shape
    this.w = w; // width of shape
    this.h = h; // height of shape
    this.c = c; // circumference of shape
    this.sColor = sColor = "#CCDC36";
    this.cColor = cColor = "#00BCD4";
    this.rColor = rColor = "#000000";
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
  }

  // Is mouse over object
  over() {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;        
    } else {
      this.rollover = false;      
    }
  }

  // Adjust location if being dragged
  update() {
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }
  
  // Pulls in over/update functions and sets the color for Square
  showSquare() {
    this.over();
    this.update();
    stroke(0);
    strokeWeight(0);
    // Different fill based on state
    if (this.dragging) {
      fill(this.sColor);
    } else if (this.rollover) {
      fill(this.rColor);
    } else {
      fill(this.sColor);
    }
    rect(this.x, this.y, this.w, this.h, this.c=10);
  }
  
    // Pulls in over/update functions and sets the color for Circle
    showCircle() {
    this.over();
    this.update();
    stroke(0);
    strokeWeight(0);
    // Different fill based on state
    if (this.dragging) {
      fill(this.cColor);
    } else if (this.rollover) {
      fill(this.rColor);
    } else {
      fill(this.cColor);
    }
    rect(this.x, this.y, this.w, this.h, this.c=80);
  }

  // Was the shape clicked on, if yes then drag it
  pressed() {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  // Did I stop clicking it, if yes then release it
  released() {
    this.dragging = false;
  }
}