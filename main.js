function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	mario_kick = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,350);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(800, 400);
	instializeInSetup(mario);
	video.parent("game_console");
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw() {
	game();
}

function modelLoaded() {
	console.log("Model Loaded Successfully!");
}

function gotPoses(results) {
	if (results.length > 0) {
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

// <iframe src="https://editor.p5js.org/mahdi-tangy/full/9pGueImyI"></iframe>
