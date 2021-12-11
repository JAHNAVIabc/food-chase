
var girl;
var girlImage;

function preload() {
    girlImage=loadAnimation("images/girl1.png","images/girl2.png");
}

function setup(){
    createCanvas(1400,800);
    girl = createSprite(50,750,20,50);
    girl.addAnimation("running", girlImage);
    girl.scale=2

    

}

function draw() {

    background("blue");

    if(keyDown(UP_ARROW)){
        girl.y=girl.y-10
    }

    if(keyDown(DOWN_ARROW)){
        girl.y=girl.y+10
    }

    if(keyDown(LEFT_ARROW)){
        girl.x=girl.x-10
    }

    if(keyDown(RIGHT_ARROW)){
        girl.x=girl.x+10
    }

    drawSprites();
}


