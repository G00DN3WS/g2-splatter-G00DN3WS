var canvas;
var canvasWidth = 500;
var canvasHeight = 400;
var clearButton; 
var slider;
var sliderSpread;

function setup() {
	// body...
	canvas = createCanvas(canvasWidth,canvasHeight);
	background(0);
	canvas.parent("canvas-area");
	canvas.mousePressed(drawEllipse);
	clearButton = select("#clearButton");
	clearButton.mousePressed(setup);
	slider=select("#slider");
	slider.input(updateSpread);
}

function drawEllipse() {

fill("#ffeeff");
ellipse(mouseX, mouseY, sliderSpread, sliderSpread);

}

function updateSpread(){

	sliderSpread = slider.value();
	
}

function drawSplatter(){


	
}
