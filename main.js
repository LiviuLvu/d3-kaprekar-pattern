// TO DO:
// repeat until boundary is reached
// get boundaries from user input

var repeater = 1;

// ?
var zoom = d3.behavior.zoom()
  .scaleExtent([0.05, 1])
  .on("zoom", zoomed);

var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    width = w.innerWidth || e.clientWidth || g.clientWidth,
    height = 200;

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "svg-element")
  .append("g")
  .attr("transform", "translate(0, 0)")
  .call(zoom);

// ? ? ?
var rect = svg.append("rect")
  .attr("width", width)
  .attr("height", height)
  .style("fill", "none")
  .style("pointer-events", "all");

var container = svg.append("g");

function steps() {
  var adder = repeater
    .toString()
    .split('')
    .map(function (e) { return parseInt(e, 10); })
    .reduce(function (a, b) { return a + b; });

  var limit = document.getElementById('limit').value;
  
  container.append("g").append("line")
    .attr("x1", function () { return repeater; })
    .attr("y1", -1000)
    .attr("x2", function () { return repeater; })
    .attr("y2", 1000)
    .attr("stroke", "green")
    .attr("stroke-width", 3);

  if (repeater <= limit) {
    repeater = repeater + adder + 1;
    steps();
  }
}
steps();

function zoomed() {
  container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}

// enter/click update limit
$('#update').on('click', () => {
  repeater = 1;
  $('line').remove();
  steps();
});
$('#limit').keydown(function (e) {
  if (e.keyCode === 13) {
    repeater = 1;
    $('line').remove();
    steps();
  }
});