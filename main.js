// TO DO:
// repeat until boundary is reached
// get boundaries from user input


var repeater = 1;

steps();

function steps() {
  var adder = repeater
    .toString()
    .split('')
    .map(function (e) { return parseInt(e, 10); })
    .reduce(function (a, b) { return a + b; });
  var limit = document.getElementById('limit').value;

  if (repeater <= limit) {
    d3.select("body").append("p").text(repeater);
    repeater += adder;
    steps();
  }

}