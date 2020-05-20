
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
    textSize(100)
    text(global.Global.NewConfirmed, 100, 200)
    text(global.Global.NewDeaths, 900, 220)
    text(global.Global.NewRecovered, 250, 400)
    text(global.Global.TotalConfirmed, 660, 650)
    text(global.Global.TotalDeaths, 300, 600)
    text(global.Global.TotalRecovered, 600, 500)

    // var countries = global.Countries.map(country => { return country.Country });
    // text(countries, 10, 100)
  }
}
