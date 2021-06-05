var ball;
var database,position
function setup(){
    database=firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballposition=database.ref('ball/position')
    ballposition.on("value",readposition,showerror)
}

function draw(){
    background("white");
    if(position!==undefined)
    if(keyDown(LEFT_ARROW)){
       write (-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        write(1,0);
    }
    else if(keyDown(UP_ARROW)){
        write(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        write(0,+1);
    }
    drawSprites();
}



function readposition(data){
    position=data.val()
    ball.x=position.x
    ball.y=position.y
}
function write(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })
}
function showerror(){
    console.log()
}