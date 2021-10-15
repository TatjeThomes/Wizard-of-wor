class Shots {
  constructor(color, startX, startY, dX, dY) {
    this.color = color;
    this.x = startX;
    this.y = startY;
    this.dx = dX;
    this.dy = dY;
    this.r = 5;
  }

  draw() {
    fill(this.color);
    circle(this.x, this.y, this.r * 2);
    noFill();
  }

  move() {
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }

  collide(player) {
    let collidesOnX = this.x >= player.x - 25 && this.x <= player.x + 25;
    let collidesOnY = this.y >= player.y - 25 && this.y <= player.y + 25;

    return collidesOnX && collidesOnY;
  }
}
