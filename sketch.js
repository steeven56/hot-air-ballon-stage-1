var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var b1, b2, b3;
var t1,t2;
var bottomObs, bottomObsGroup;
var topObs, topObsGroup;
function preload() {
    bgImg = loadImage("assets/bg.png")

    balloonImg = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png")

    b1=loadImage("assets/obsBottom1.png");
    b2=loadImage("assets/obsBottom2.png");
    b3=loadImage("assets/obsBottom3.png");

    t1=loadImage("assets/obsTop1.png");
    t2=loadImage("assets/obsTop2.png");

}

function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20)
    balloon = createSprite(80, height / 2)
    balloon.addAnimation("flying", balloonImg)
    balloon.scale = 0.2

    bottomGround = createSprite(width / 2, height - 5, width, 10)

    topGround = createSprite(width / 2, 5, width, 10)
    bottomObsGroup=new Group();
    topObsGroup=new Group();
}
function draw() {
    background(bgImg)

    if (keyDown("space")) {
        balloon.velocityY = -6
    }
    balloon.velocityY = balloon.velocityY + 0.8;

    spawnBottomObstacles();
    spawnTopObstacles();
    balloon.collide(bottomGround);
    balloon.collide(topGround);
    drawSprites()
}

function spawnBottomObstacles(){
    if(frameCount%80===0){
        bottomObs=createSprite(width,height-135);
        var x=Math.round(random(1,3));
        switch(x){
            case 1: bottomObs.addImage(b1);
            bottomObs.y=bottomObs.y-10;
            break;
            case 2: bottomObs.addImage(b2);
            break;
            case 3: bottomObs.addImage(b3);
            bottomObs.y=bottomObs.y-10;
            break;
        }
        bottomObs.scale=0.15;
        bottomObs.velocityX=-6;
        bottomObs.lifetime=800;
        bottomObsGroup.add(bottomObs)
    }

}
function spawnTopObstacles(){
    if(frameCount%40===0){
        topObs=createSprite(width,135);
        var x=Math.round(random(1,2));
        switch(x){
            case 1: topObs.addImage(t1);
            topObs.y=topObs.y+10;
            break;
            case 2: topObs.addImage(t2);
            break;
            
        }
        topObs.y=Math.round(random(80,200))
        topObs.scale=0.15;
        topObs.velocityX=-6;
        topObs.lifetime=800;
        topObsGroup.add(topObs)
    }
}
