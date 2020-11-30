let horse, img;
let graphics;
let myShader;
let theta = 0;

function preload(){
    horse = loadModel('chess-horse.obj');
    img = loadImage('Connect2.jpg');
    myShader = loadShader('basic.vert', 'basic.frag');
}

function setup(){
    createCanvas(1400, 1200, WEBGL);
    // noStroke();
    // graphics = createGraphics(128, 512);
    // graphics.img(img, 0, 0, 128, 512);
}

function draw(){
    // background(220);
    shader(myShader);
    rect(1000,1000,width,height);
    scale(1000);
    rotateX(theta*4);
    rotateY(theta*8);
    texture(img);
    model(horse);

    theta+=0.25;
}