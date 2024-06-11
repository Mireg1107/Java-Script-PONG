// ball info

let xBall = 300;
let yBall = 200;
let Diametro = 20;
let Raio = Diametro / 2;

// ball speed

let xSpeed = 10;
let ySpeed = 5;

// Player
let xRect = 5;
let yRect = 150;

// largura
let wRect = 10;

//altura
let hRect = 90;

let colidiu = false;

// inimigo

let xInimigo = 585;
let yInimigo = 150;
let ySpeedInimigo;

// placar
plrPontos = 0;
plr2Pontos = 0;

let MargemDeErro = 0

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(color("  black"));
  ShowBall();
  BallMove ();
  BallCollision();
  ShowPlayer(xRect, yRect);
  PlayerMove();
  // PlayerCollision();
  ShowPlayer(xInimigo, yInimigo);
  plr2();
  plrcollison(xRect, yRect);
  plrcollison(xInimigo, yInimigo);
  placar();
  Pontos();
  bolinhaNaoFicaPresa();
}

function ShowBall() {
  circle(xBall, yBall, Diametro);
}

function BallMove() {
  xBall += xSpeed;
  yBall -= ySpeed;
}

function BallCollision() {
  if (xBall + Raio > width || xBall - Raio < 0) {
    xSpeed *= -1;
  }

  if (yBall + Raio > height || yBall - Raio < 0) {
    ySpeed *= -1;
  }
}
function ShowPlayer(x, y) {
  rect(x, y, wRect, hRect);
}

function PlayerMove() {
  if (keyIsDown(87)) {
    yRect -= 10;
  }
  if (keyIsDown(83)) {
    yRect += 10;
  }
}

function plrcollison(x, y) {
  colidiu = collideRectCircle(x, y, wRect, hRect, xBall, yBall, Raio);
  if (colidiu) {
    xSpeed *= -1;
  }
}

function PlayerCollision() {
  if (
    xBall - Raio < xRect + wRect &&
    yBall - Raio < yRect + hRect &&
    yBall + Raio > yRect
  ) {
    xSpeed *= -1;
  }
}

function CalcularMargemDeErro(){
   if (plr2Pontos >= plrPontos) {
    MargemDeErro += 1
    if (MargemDeErro >= 39){
    Margem = 40
    }
  } else {
    MargemDeErro -= 1
    if (MargemDeErro <= 35){
    MargemDeErro = 35
    }
  }
}

function plr2() {
  ySpeedInimigo = yBall - yInimigo - wRect / 2 - 30;
  yInimigo += ySpeedInimigo + MargemDeErro;
  CalcularMargemDeErro()
}

function placar() {
 
  textAlign(CENTER);
  textSize(20);
  fill(color(147,112,219))
  rect(150, 10, 40, 20);
  fill("white");
  text(plrPontos, 170, 26);
  fill(color(147,112,219))
  rect(450, 10, 40, 20);
  fill("white");
  text(plr2Pontos, 470, 26);
}

function Pontos() {
  if (xBall > 590) {
    plrPontos += 1;
  }
  if (xBall < 10) {
    plr2Pontos += 1;
  }
}

function bolinhaNaoFicaPresa(){
    if (xBall - Raio < 0){
    xBall = 23
    }
}
