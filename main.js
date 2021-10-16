noseX = 0;
noseY = 0;
function preload(){
    moustache_nose = loadImage(" https://i.postimg.cc/3x3QzSGq/m.png");

}

function setup(){
canvas = createCanvas(350,350);
canvas.center();
video = createCapture(VIDEO);
video.size(350,350);
video.hide();

poseNet= ml5.poseNet(video,modelloaded);
poseNet.on('pose', gotPoses);

}
function modelloaded() {
console.log(" poseNet is initialized");
}

function draw(){
    image(video,0,0,350,350);
    fill(255,0,0);
    stroke(255,0,0);
    //circle(noseX,noseY,20);
    image( moustache_nose,noseX,noseY,30,30);
    }

function gotPoses(results){
    if (results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y+25;
    console.log("nose x = "+  noseX);
    console.log("nose y = "+  noseY);
    }
    
    }

function take_snapshot(){
save("fliterimagethingy.png");
}
