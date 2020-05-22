
var global;
function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON('https://api.covid19api.com/summary', gotData)
}

function gotData(data) {
  console.log(data);
  global = data;
}
function draw() {
  background(225);
  if (global) {
    textSize(90)
    text(global.Global.NewConfirmed, 200, 150)
    text(global.Global.NewDeaths, 900, 220)
    text(global.Global.NewRecovered, 550, 350)
    text(global.Global.TotalConfirmed, 120, 500)
    text(global.Global.TotalDeaths, 950, 480)
    text(global.Global.TotalRecovered, 550, 620)

    textSize(25)
    text("New Confirmed", 200, 70)
    text("New Deaths", 900, 140)
    text("New Recoverd", 550, 270)
    text("Total Confirmed", 120, 420)
    text("Total Deaths", 950, 400)
    text("Total Recoverd", 550, 540)

    // var countries = global.Countries.map(country => { return country.Country });
    // text(countries, 10, 100)

    // text(global.Global.TotalConfirmed, 700(vågrätt), 220(lodrätt))
  }
}
