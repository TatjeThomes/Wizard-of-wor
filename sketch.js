let shots1 = [];
let shots2 = [];
let playerWon = "";
let walls = [];
let s = 2

function setup() {
  createCanvas(400*s, 220*s);
  player1 = new Player("blue",15*s, 383*s, 203*s, 79, 76, 75, 192, 77,s);
  player2 = new Player("red",15*s, 20*s, 203*s, 87, 83, 65, 68, 226,s);
  monsters = [
    new Monster("green",15*s, 20*s, 20*s, "down",s),
    new Monster("green", 15*s, 381*s, 20*s, "down",s),
    new Monster("green",15*s, 199*s, 201*s, "up",s),
  ];
  walls = [
    new Wall("black", -51*s, 1*s, 496*s, 2*s),
    new Wall("black", 1*s, -51*s, 2*s, 316*s),
    new Wall("black", 397*s, -51*s, 2*s, 316*s),
    new Wall("black", -51*s, 218*s, 496*s, 2*s),

    new Wall("black", 37*s, 37*s, 2*s, 36*s),
    new Wall("black", 73*s, 37*s, 2*s, 36*s),
    new Wall("black", 1*s, 109*s, 36*s, 2*s),
    new Wall("black", 37*s, 145*s, 2*s, 36*s),
    new Wall("black", 73*s, 181*s, 2*s, 86*s),
    new Wall("black", 73*s, 109*s, 2*s, 36*s),
    new Wall("black", 73*s, 145*s, 36*s, 2*s),
    new Wall("black", 109*s, 37*s, 2*s, 72*s),
    new Wall("black", 109*s, 145*s, 2*s, 36*s),
    new Wall("black", 109*s, 109*s, 36*s, 2*s),
    new Wall("black", 145*s, 37*s, 2*s, 36*s),
    new Wall("black", 145*s, 181*s, 36*s, 2*s),
    new Wall("black", 181*s, 37*s, 2*s, 72*s),
    new Wall("black", 181*s, 145*s, 2*s, 38*s),
    new Wall("black", 217*s, 37*s, 2*s, 72*s),
    new Wall("black", 217*s, 145*s, 2*s, 38*s),
    new Wall("black", 217*s, 181*s, 36*s, 2*s),
    new Wall("black", 253*s, 37*s, 2*s, 36*s),
    new Wall("black", 253*s, 109*s, 36*s, 2*s),
    new Wall("black", 289*s, 37*s, 2*s, 74*s),
    new Wall("black", 289*s, 145*s, 2*s, 36*s),
    new Wall("black", 289*s, 145*s, 36*s, 2*s),
    new Wall("black", 325*s, 37*s, 2*s, 36*s),
    new Wall("black", 325*s, 109*s, 2*s, 38*s),
    new Wall("black", 325*s, 181*s, 2*s, 72*s),
    new Wall("black", 361*s, 37*s, 2*s, 36*s),
    new Wall("black", 361*s, 145*s, 2*s, 36*s),
    new Wall("black", 361*s, 109*s, 36*s, 2*s),
  ];
}

function randomNewDirection(monster) {
  const options = ["up", "down", "left", "right"];
  const newDirection = random(options);
  monster.direction = newDirection;
}

function draw() {
  background(220);

  if (playerWon !== "") {
    background(playerWon);
    textSize(100);
    fill("white");
    text("player " + playerWon + " won", 55, 250);
  } else {
    player1.draw();
    player2.draw();

    monsters.forEach((m) => m.draw());
    walls.forEach((w) => w.draw());
    walls.forEach((w) => {
      if (w.oben(player1)) {
        player1.y = player1.y - player1.geschwindigkeit;
      }
      if (w.unten(player1)) {
        player1.y = player1.y + player1.geschwindigkeit;
      }
      if (w.links(player1)) {
        player1.x = player1.x - player1.geschwindigkeit;
      }
      if (w.rechts(player1)) {
        player1.x = player1.x + player1.geschwindigkeit;
      }
    });
    walls.forEach((w) => {
      if (w.oben(player2)) {
        player2.y = player2.y - player2.geschwindigkeit;
      }
      if (w.unten(player2)) {
        player2.y = player2.y + player2.geschwindigkeit;
      }
      if (w.links(player2)) {
        player2.x = player2.x - player2.geschwindigkeit;
      }
      if (w.rechts(player2)) {
        player2.x = player2.x + player2.geschwindigkeit;
      }
      let shotsToBeDeleted = [];

      shots1.forEach((s) => {
        if (w.oben(s) || w.unten(s) || w.links(s) || w.rechts(s)) {
          shotsToBeDeleted.push(s);
        }
      });

      shots1 = shots1.filter((s) => {
        let keepThisShot = true;
        shotsToBeDeleted.forEach((sd) => {
          if (sd === s) {
            keepThisShot = false;
          }
        });
        return keepThisShot;
      });
      
       shotsToBeDeleted = [];

      shots2.forEach((s) => {
        if (w.oben(s) || w.unten(s) || w.links(s) || w.rechts(s)) {
          shotsToBeDeleted.push(s);
        }
      });

      shots2 = shots2.filter((s) => {
        let keepThisShot = true;
        shotsToBeDeleted.forEach((sd) => {
          if (sd === s) {
           keepThisShot = false;
          }
        });
        return keepThisShot;
      });
      monsters.forEach((m) => {
        if (w.oben(m)) {
          m.y = m.y - 1;
          randomNewDirection(m);
        }
        if (w.unten(m)) {
          m.y = m.y + 1;
          randomNewDirection(m);
        }
        if (w.links(m)) {
          m.x = m.x - 1;
          randomNewDirection(m);
        }
        if (w.rechts(m)) {
          m.x = m.x + 1;
          randomNewDirection(m);
        }
      });
    });

    for (let i = 0; i < shots1.length; i++) {
      shots1[i].draw();
      shots1[i].move();
      if (shots1[i].collide(player2) === true) {
        playerWon = "blue";
      }
    }
    for (let i = 0; i < shots2.length; i++) {
      shots2[i].draw();
      shots2[i].move();
      if (shots2[i].collide(player1) === true) {
        playerWon = "red";
      }
    }

    monsters.forEach((m) => {
      m.draw();
      m.move();
      if (m.collide(player1) === true) {
        playerWon = "red";
      }

      if (m.collide(player2) === true) {
        playerWon = "blue";
      }
    });

    if (keyIsDown(player1.up)) {
      player1.goUp();
    } else if (keyIsDown(player1.down)) {
      player1.goDown();
    } else if (keyIsDown(player1.left)) {
      player1.goLeft();
    } else if (keyIsDown(player1.right)) {
      player1.goRight();
    } else {
      player1.standing();
    }
    player1.move();

    if (keyIsDown(player2.up)) {
      player2.goUp();
    } else if (keyIsDown(player2.down)) {
      player2.goDown();
    } else if (keyIsDown(player2.left)) {
      player2.goLeft();
    } else if (keyIsDown(player2.right)) {
      player2.goRight();
    } else {
      player2.standing();
    }
    player2.move();
    monsters.forEach((m) => m.move());
  }
}

function keyPressed() {
  if (keyCode === player1.shot) {
    let dx = 0;
    let dy = 0;
    if (player1.lastdirection === "right") {
      dx = 3;
    } else if (player1.lastdirection === "left") {
      dx = -3;
    } else if (player1.lastdirection === "down") {
      dy = 3;
    } else if (player1.lastdirection === "up") {
      dy = -3;
    }
    shots1.push(new Shots("blue", player1.x + 25, player1.y + 25, dx, dy));
  }

  if (keyCode === player2.shot) {
    let dx = 0;
    let dy = 0;
    if (player2.lastdirection === "right") {
      dx = 3;
    } else if (player2.lastdirection === "left") {
      dx = -3;
    } else if (player2.lastdirection === "down") {
      dy = 3;
    } else if (player2.lastdirection === "up") {
      dy = -3;
    }
    shots2.push(new Shots("red", player2.x , player2.y , dx, dy));
  }
}
