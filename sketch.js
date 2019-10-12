let nSlider;
let dSlider;
let a = 300;

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
  nSlider = createSlider(1,10,1);
  dSlider = createSlider(1,180,1);
}

function draw() {
  background(0);
  translate(width/2,height/2);
  stroke(255);
  n = nSlider.value();
  d = dSlider.value();
  noFill();
  beginShape();
  strokeWeight(1);
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = a * sin(n*k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x,y);    
  }
  endShape();

  noFill();
  stroke(255,0,255, 255);
  strokeWeight(4);
  beginShape();
  for (let i = 0; i < 361; i++) {
    let k = i;
    let r = a * sin(n*k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x,y);    
  }
  endShape();

  //n += 0.01;
  //d += 0.03;

  
  
}