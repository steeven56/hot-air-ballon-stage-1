var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obs_b1, obsb2, obs_b3
function preload() {
    bgImg = loadImage("assets/bg.png")

    balloonImg = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png")
}

function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20)
    balloon = createSprite(80, height / 2)
    balloon.addAnimation("flying", balloonImg)
    balloon.scale = 0.2

    bottomGround = createSprite(width / 2, height - 5, width, 10)

    topGround = createSprite(width / 2, 5, width, 10)
}
function draw() {
    background(bgImg)

    if (keyDown("space")) {
        balloon.velocityY = -6
    }
    balloon.velocityY = balloon.velocityY + 0.8
    balloon.collide(bottomGround)
    balloon.collide(topGround)
    drawSprites()
}