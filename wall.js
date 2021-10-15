class Wall {
  constructor(color, x, y, breite, länge) {
    this.color = color;
    this.blocked = false;
    this.x = x;
    this.y = y;
    this.br = breite;
    this.lä = länge;
  }

  draw() {
    fill(this.color);
    rect(this.x, this.y, this.br, this.lä);
    noFill();
  }

  collideO(obj) {
    let collidesX =
      this.x <= player.x - 25 && this.x + this.br >= player.x + 25;
    let collidesY =
      this.y <= player.y - 25 && this.y + this.lä >= player.y + 25;

    return collidesX && collidesY;
  }

  oben(obj) {
    let collidesX =
      this.x <= obj.x + obj.r && obj.x - obj.r <= this.x + this.br;
    let collidesY = this.y <= obj.y + obj.r && this.y >= obj.y - obj.r;

    return collidesX && collidesY;
  }

  unten(obj) {
    let collidesX =
      this.x <= obj.x + obj.r && obj.x - obj.r <= this.x + this.br;
    let collidesY =
      this.y + this.lä >= obj.y - obj.r && this.y + this.lä <= obj.y + obj.r;
    //console.log(collidesX,collidesY)
    return collidesX && collidesY;
  }

  links(obj) {
    let collidesX =
      this.y <= obj.y + obj.r && obj.y - obj.r <= this.y + this.lä;
    let collidesY = this.x <= obj.x + obj.r && this.x >= obj.x - obj.r;
    //console.log(collidesX,collidesY)
    return collidesX && collidesY;
  }

  rechts(obj) {
    let collidesX =
      this.y <= obj.y - obj.r && obj.y + obj.r <= this.y + this.lä;
    let collidesY =
      this.x + this.br <= obj.x + obj.r && this.x + this.br >= obj.x - obj.r;
    //console.log(collidesX,collidesY)
    return collidesX && collidesY;
  }
}
