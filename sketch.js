var grass = [];
var grassBlades = 15;
var grassSegments = 200;
var time = 0;
var innerRadius = 100;
var outerRadius = 400;

function setup() {
	createCanvas(900, 800);

	for (var angle = 0; angle < TWO_PI; angle += (TWO_PI / grassBlades)) {
		grass.push(new Grass((width / 2) + outerRadius * cos(angle), (height / 2) + outerRadius * sin(angle), grassSegments));
	}
}

function draw() {
	background(0);
	colorMode(HSB);
	for (var i = 0; i < grassBlades; i += 1) {
		grass[i].show((width / 2) + innerRadius*cos(time), (height / 2) + innerRadius*sin(time));
		//grass[i].show(mouseX, mouseY);
	}
	time += 0.05;
}
