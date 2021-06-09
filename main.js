	nose_x=0;
	nose_y=0;
	
	function preload() {	
	coin = loadSound("coin.wav");
	game_over = loadSound("gameover.wav");
	jump = loadSound("jump.wav");
	kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");
	
	setSprites();
	MarioAnimation();

}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,390);
	video.parent('game_console');

		//setting up all vars and functions for mario game.
	canvas.parent("canvas");

	posenet = ml5.poseNet(video,modelLoaded);

	posenet.on('pose',gotposes);

}

		function modelLoaded(){
			console.log("Posenet Model Loaded");
	}

	function gotposes(result){
		if(result.length>0){
			console.log(result);
			array = result.length;
			nose_x = result[0].pose.nose.x;
			nose_y = result[0].pose.nose.y;
		}
		
	}

function draw() {
	game()
}






