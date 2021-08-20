var ballonoon,ballonoonImage1,ballonoonImage2;
// create database and position variable here
var database,position;

function preload(){
   bg =loadImage("cityImage.png");
   ballonoonImage2=loadAnimation("hotairballonoon1.png","hotairballonoon1.png",
   "hotairballonoon1.png","hotairballonoon2.png","hotairballonoon2.png",
   "hotairballonoon2.png","hotairballonoon3.png","hotairballonoon3.png","hotairballonoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  ballonoon=createSprite(250,450,150,150);
  ballonoon.addAnimation("hotAirballonoon",ballonoonImage1);
  ballonoon.scale=0.5;

  var ballononPosition = database.ref('ballonon/height');
  ballononPosition.on("value", readPosition, showError);

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    ballonoon.addAnimation("hotAirballonoon",ballonoonImage2);
    //write code to move air ballonoon in left direction
    updateHeight(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    ballonoon.addAnimation("hotAirballonoon",ballonoonImage2);
    //write code to move air ballonoon in right direction
    updateHeight(1,0);
  }
  else if(keyDown(UP_ARROW)){
    ballonoon.addAnimation("hotAirballonoon",ballonoonImage2);
    //write code to move air ballonoon in up direction
    updateHeight(0,-1);
    ballon.scale = ballon.scale+0.01
  }
  else if(keyDown(DOWN_ARROW)){
    ballonoon.addAnimation("hotAirballonoon",ballonoonImage2);
    //write code to move air ballonoon in down direction
    updateHeight(0,+1);
    ballon.scale = ballon.scale-0.01
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air ballonoon!",40,40);
}

function updateHeight(x,y){
  database.ref('ballon/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readHeight(data){
  position = data.val();
  console.log(position.x);
  ballon.x = position.x;
  ballon.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
