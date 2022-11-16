function preload() {

}

function setup() {
canvas = createCanvas(640, 480);
canvas.position(110, 250);
video = createCapture(VIDEO);
video.hide();
}

function draw() {
image(video, 0, 0, 640, 480);
circle(60, 30, 20);
ellipse(45, 92, 55, 55);
rect(93, 69, 55, 55);
}