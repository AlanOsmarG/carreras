var canvas ;
var background_image;
var bg_image;
var form, player;
var database;
var car1img, car2img, track, car1, car2;
var playerCount, name;
var game_state;
var cars = []

function preload(){
background_image = loadImage("./assets/background.png");
car1img = loadImage("./assets/car1.png");
car2img = loadImage("./assets/car2.png");
track = loadImage("./assets/track.jpg")
}

function setup(){
canvas = createCanvas(windowWidth, windowHeight);
database = firebase.database();
//bg_image = background_image;
game = new Game();
game.getState()
game.start()
}

function draw(){
background(background_image)

if(game_state === 1){
    game.play()
}

if(playerCount === 2){
    game.update(1)
}
}

function windowResized(){
    resizeCanvas(windowWidth, windowWidth)
}

