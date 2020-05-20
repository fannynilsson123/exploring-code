
var advice;
function setup() {
  createCanvas(400, 400);
  loadJSON('https://api.covid19api.com/summary', gotData)
}

function gotData(data) {
  console.log(data);
  advice = data;
}
function draw() {
  background(0);
  if (advice) {
    circle(50, advice.Global.NewConfirmed, advice.Global.NewConfirmed);
  }
}
