
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(185, 75, 53);

  //main circle
  stroke(219, 209, 203);
  strokeWeight(40);
  fill(28);
  circle(200, 200, 200);

  //blue circle
  noStroke();
  fill(82, 133, 184);
  arc(200, 200, 241, 241, radians(270), radians(450));

  //yellow circle
  fill(219, 175, 70);
  arc(200, 200, 159, 159, radians(270), radians(450));

  //pink circle
  fill(212, 133, 121);
  arc(200, 200, 80, 80, radians(270), radians(450));
}