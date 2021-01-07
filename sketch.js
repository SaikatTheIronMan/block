var canvas;
var music;
var surface1,surface2,surface3,surface4;
var whiteb;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 surface1 = createSprite(100,560,200,20);
 surface1.shapeColor="red";
 surface2 = createSprite(300,560,200,20);
 surface2.shapeColor="blue";
 surface3 = createSprite(500,560,200,20);
 surface3.shapeColor="green";
 surface4 = createSprite(700,560,200,20);
 surface4.shapeColor="yellow";





 whiteb = createSprite(random(20,750),10,70,50);
 whiteb.shapeColor="white";
 whiteb.velocityY=10;
    



}
 
    

function draw() {
    background(rgb(169,169,169));
    music.play();
    if(surface1.isTouching(whiteb)){
      whiteb.shapeColor="red";
      whiteb.position.x=random(20,750);
      whiteb.position.y=10;
    }
    if(surface2.isTouching(whiteb)){
        whiteb.shapeColor="blue";
        whiteb.position.x=random(20,750);
        whiteb.position.y=10;
    }
    if(surface3.isTouching(whiteb)){
        whiteb.shapeColor="green";
        whiteb.position.x=random(20,750);
        whiteb.position.y=10;
    }
    if(surface4.isTouching(whiteb)){
        whiteb.shapeColor="yellow";
        whiteb.position.x=random(20,750);
        whiteb.position.y=10;
    }
      
      
      
    //create edgeSprite


drawSprites();
    //add condition to check if box touching surface and make it box
}
