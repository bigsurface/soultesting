let brain, img;
// let graphics;
let myShader;
let theta = 0;

function preload(){
    brain = loadModel('brain-simple-mesh.obj');
    img = loadImage('abstract.jpg');
    myShader = loadShader('basic.vert', 'basic.frag');
}

function setup(){
    createCanvas(400, 400, WEBGL);
    // noStroke();
    // graphics = createGraphics(128, 512);
    // graphics.img(img, 0, 0, 128, 512);
}

function draw(){
    // shader(myShader);
    // rect(0,0,width,height);
    background(255, 192, 203);
    scale(40);
    push();
    rotateX(theta);
    rotateY(theta/2);
    texture(img);
    model(brain);
    pop();

    theta+=0.05;
}