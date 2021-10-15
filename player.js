class Player {
  constructor(color,r, x,y, up, down, left, right, shot,geschwindigkeit) {
    this.color = color;
    this.direction = "standing";
    this.lastdirection = "right";
    this.x = x;
    this.y = y;
    this.up = up;
    this.down = down;
    this.left = left;
    this.right = right;
    this.shot = shot;
    this.r = r;
    this.geschwindigkeit=geschwindigkeit
  }

  draw() {
    fill(this.color);
    circle(this.x, this.y, this.r * 2);
    noFill();
  }

  standing() {
    this.direction = "standing";
  }

  goUp() {
    this.direction = "up";
    this.lastdirection = "up";
  }

  goDown() {
    this.direction = "down";
    this.lastdirection = "down";
  }

  goLeft() {
    this.direction = "left";
    this.lastdirection = "left";
  }

  goRight() {
    this.direction = "right";
    this.lastdirection = "right";
  }

  move() {
    if (this.direction === "right") {
      this.x = this.x + this.geschwindigkeit;
    } else if (this.direction === "left") {
      this.x = this.x - this.geschwindigkeit;
    } else if (this.direction === "down") {
      this.y = this.y + this.geschwindigkeit;
    } else if (this.direction === "up") {
      this.y = this.y - this.geschwindigkeit;
    }
  }
}
