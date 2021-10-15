class Monster{
  constructor(color,r, x,y,direction,geschwindigkeit){
    this.color = color
    this.x = x
    this.y = y
    this.direction = direction
    this.r = r
    this.newdirection = direction
    this.geschwindigkeit=geschwindigkeit
  }
  
  draw(){
    fill(this.color)
    circle(this.x,this.y,this.r * 2)
    noFill()
  }
  
  move(){
    if (this.direction === "up"){
      this.y = this.y -0.33333 * this.geschwindigkeit
    } else if (this.direction === "down"){
      this.y = this.y + 0.33333 * this.geschwindigkeit
    } else if (this.direction === "left"){
      this.x = this.x - 0.33333 * this.geschwindigkeit
    } else if (this.direction === "right"){
      this.x = this.x + 0.33333 * this.geschwindigkeit
    }
  }
  
  collide(player) {
    let collidesOnX = this.x + this.r >= player.x - player.r && this.x - this.r <= player.x + player.r;
    let collidesOnY = this.y + this.r >= player.y - player.r && this.y - this.r <= player.y + player.r;
    return collidesOnX && collidesOnY;
  }
}
