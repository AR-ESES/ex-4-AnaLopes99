let espLarg = 20;
let espAltura = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
  stroke(255);
  strokeWeight(2);
  noFill();
  background(0);
}

function draw() {
  
  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate(i * width / espLarg, j * height / espAltura)
      translate(-30,-40)
      scale(0,14);
      noStroke();

//corpo
fill(169,169,169);
rect(350, 325, 400, 300, 50);
fill(192,192,192);
rect(350, 300, 400, 300, 50);

//orelhas
fill(192,192,192);
ellipse(395, 200, 35, 65);
ellipse(705, 200, 35, 65);
fill(169,169,169);
ellipse(400, 200, 35, 65);
ellipse(700, 200, 35, 65);

//cabeça
fill(169,169,169);
rect(400, 125, 300, 200, 30);
fill(192,192,192)
rect(400, 100, 300, 200, 30);

//antena
fill(169,169,169);
rect(525, 20, 40, 100, 10);
fill(192,192,192);
rect(530, 30, 30, 80, 10);

//braço direito
fill(169,169,169);
rect(360, 305, 50, 250, 30);
rect(340, 305, 50, 250, 30);
rect(350, 305, 50, 260, 30);
fill(192,192,192);
rect(350, 305, 50, 250, 30);

//braço esquerdo
fill(169,169,169);
rect(710, 305, 50, 250, 30);
rect(690, 305, 50, 250, 30);
rect(700, 305, 50, 260, 30);
fill(192,192,192);
rect(700, 305, 50, 250, 30);

//olhos
fill(0,0,0);
circle(500, 170, 30);
circle(600, 170, 30);
fill(255,255,255);
circle(505, 165, 10);
circle(605, 165, 10);
circle(510, 170, 5);
circle(610, 170, 5);

//boca
fill(211,211,211);
strokeWeight(4);
stroke(0,0,0);
arc(550, 230, 100, 70, 0, PI, CHORD);


      pop();
    }
  }
}