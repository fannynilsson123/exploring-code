
var global;

var index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON('https://api.covid19api.com/summary', gotData)
}

function gotData(data) {
  console.log(data);
  global = data;
}
function draw() {
  background(0);

  if (global) {

    textFont('Inter')
    textSize(90)
    text(global.Global.NewConfirmed, 200, 150)
    text(global.Global.NewDeaths, 1000, 220)
    text(global.Global.NewRecovered, 550, 350)
    text(global.Global.TotalConfirmed, 100, 500)
    text(global.Global.TotalDeaths, 950, 480)
    text(global.Global.TotalRecovered, 550, 620)

    textSize(25)
    text("New Confirmed", 200, 70)
    text("New Deaths", 1000, 140)
    text("New Recoverd", 550, 270)
    text("Total Confirmed", 100, 420)
    text("Total Deaths", 950, 400)
    text("Total Recoverd", 550, 540)
    fill(255)

    // var countries = global.Countries.map(country => { return country.Country });
    // text(countries, 10, 100)

    // x(vågrätt), y(lodrätt))
  }
}