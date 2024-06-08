var map,mapimg,r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,pauseimg,pause,roadgroup,title,nameimg,startimg,start,rulesimg,rules,player;
    var zombie=[],zombies,zimg,zimg1,zimg2,zimg3,pimg,pimg2,pimg3,pimg4,database,w;

var SERVE=1,PLAY=2,PAUSE=0,edges,checkpoint,i=0,playermark,mark,pmarkimg,markimg,zombie2,mark2,mark3,mark4,l=1,arrowimg,arrow,points=0,d,applause,bgsound,zsound,click,w2;


var gamestate=SERVE,zombiegroup;
function preload(){
 mapimg=loadImage("cityimage.jpg")
  pauseimg=loadImage("pause.png")
  nameimg=loadImage("name.png")
  startimg=loadImage("start.png")
  rulesimg=loadImage("rules.png")
 zimg=loadImage("zombie.png")
   zimg1=loadImage("zombie2.png")
  zimg2=loadImage("zombie3.png")
  
 pimg=loadImage("player2.png")
  pimg2=loadImage("player.png")
  pimg3=loadImage("player3.png")
  pimg4=loadImage("player4.png")
  pmarkimg=loadImage("m1.png")
  markimg=loadImage("m2.png")
  arrowimg=loadImage("arrow.png")
  applause=loadSound("applause.mp3")
  bgsound=loadSound("bg.mp3")
  zsound=loadSound("zombie.mp3")
  click=loadSound("Click.mp3")
}



function setup() {
  
  createCanvas(1100,700)
  
 // w1.shapeColor("red")
  database = firebase.database();
  
 
  map=createSprite(550,350,width,height)
 map.addAnimation("mapimg",mapimg)
  map.scale=1.5;
     zombiegroup=createGroup()
     title=createSprite(550,200,200,50)
   title.addAnimation("nameimg",nameimg)
     title.scale=0.3
  title.visible=false;
 start=createSprite(550,375,200,50)
   start.addAnimation("startimg",startimg)
    start.scale=0.4
  start.visible=false
 
 roadgroup=createGroup(); 
  player=createSprite(200,460,50,50)
  player.addAnimation("pimg",pimg)
    player.addAnimation("pimg2",pimg2)
    player.addAnimation("pimg3",pimg3)
    player.addAnimation("pimg4",pimg4)
  player.scale=0.3
  player.visible=false;
  player.setCollider("rectangle",0,0,500,60)
 // player.debug=true
  
  
   r1=createSprite(870,190,1200,400)
  roadgroup.add(r1)
   r1.visible=false;
  r2=createSprite(10,290,200,900)
    r2.visible=false;
   roadgroup.add(r2)
  r3=createSprite(870,630,1200,250)
    r3.visible=false;
   roadgroup.add(r3)
  r4=createSprite(300,1050,800,350)
    r4.visible=false;
   roadgroup.add(r4)
  r5=createSprite(1250,1050,800,350)
    r5.visible=false;
  roadgroup.add(r5)
  r6=createSprite(1500,1300,300,300)
   r6.visible=false;
   roadgroup.add(r6)
  r7=createSprite(350,1450,700,250)
    r7.visible=false;
   roadgroup.add(r7)
  r8=createSprite(250,1800,600,800)
   r8.visible=false;
   roadgroup.add(r8)
  r9=createSprite(1025,1650,400,600)
   r9.visible=false;
   roadgroup.add(r9)
  r10=createSprite(1025,2000,400,175)
    r10.visible=false;
   roadgroup.add(r10)
  r11=createSprite(1750,320,300,700)
    r11.visible=false;
   roadgroup.add(r11)
  r12=createSprite(1950,600,750,300)
   r12.visible=false;
   roadgroup.add(r12)
  r13=createSprite(2150,150,250,300)
    r13.visible=false;
   roadgroup.add(r13)
  r14=createSprite(2550,420,250,700)
     r14.visible=false;
   roadgroup.add(r14)
  r15=createSprite(3050,150,500,400)
     r15.visible=false;
   roadgroup.add(r15)
  r16=createSprite(3050,625,500,275)
     r16.visible=false;
   roadgroup.add(r16)
  r17=createSprite(3000,1300,1000,800)
     r17.visible=false;
   roadgroup.add(r17)
    r18=createSprite(2050,1150,500,600)
     r18.visible=false;
   roadgroup.add(r18)
    r19=createSprite(2900,2000,900,300)
     r19.visible=false;
   roadgroup.add(r19)
    r20=createSprite(1800,1750,900,300)
     r20.visible=false;
   roadgroup.add(r20)
    r21=createSprite(1750,2000,550,200)
     r21.visible=false;
   roadgroup.add(r21)
    r22=createSprite(2400,1200,200,600)
     r22.visible=false;
   roadgroup.add(r22)
    r23=createSprite(2300,1500,500,100)
     r23.visible=false;
  w=createSprite(50,800,50,200)
  //w.visible=false
  w.shapeColor="grey"
  w2=createSprite(50,1255,50,200)
  roadgroup.add(w)
  roadgroup.add(w2)
   roadgroup.add(r23)
  pause=createSprite(50,50,50,50)
  pause.addAnimation("pauseimg",pauseimg)
  pause.visible=false;
  playermark=createSprite(player.x+100,player.y-80,50,50)
  playermark.addAnimation("pmrkimg",pmarkimg)
 // playermark.debug=true
  playermark.scale=0.3
  playermark.setCollider("rectangle",0,250,400,400)
  playermark.visible=false
  mark=createSprite(2743,310,20,20)
  mark.addAnimation("markimg",markimg)
  mark.visible=false;
     mark.scale=0.5
 // mark.debug=2
  mark.setCollider("rectangle",0,0,150,400)
    mark2=createSprite(2043,310,20,20)
  mark2.addAnimation("markimg",markimg)
  mark2.visible=false;
     mark2.scale=0.5
  mark2.setCollider("rectangle",0,0,0,0)
    mark3=createSprite(2743,310,20,20)
  mark3.addAnimation("markimg",markimg)
  mark3.visible=false;
     mark3.scale=0.5
   mark3.setCollider("rectangle",0,0,0,0)
    mark4=createSprite(1944,1844,20,20)
  mark4.addAnimation("markimg",markimg)
  mark4.visible=false;
     mark4.scale=0.5
   mark4.setCollider("rectangle",0,0,0,0)
  arrow=createSprite(170,50,50,50)
  arrow.addAnimation("arrowimg",arrowimg)
  arrow.scale=0.3
  arrow.visible=false
}

function draw() {
  background("white");
  
  edges=createEdgeSprites()
  
 if (gamestate===SERVE){
 
 
 start.visible=true;
  // rules.visible=true;
   title.visible=true;
   map.scale=1.5;
   map.x=550
   map.y=350
 
 }  
  if(mousePressedOver(start)){
     
     gamestate=PLAY
    
    reset()
      map.x=1100;
    map.y=700;
     map.scale=6;
     player.visible=true;
    player.x=300
    start.visible=false;
  // rules.visible=false;
   title.visible=false;
    start.x=-10
    playermark.scale=0.3
    playermark.x=player.x+100
    playermark.y=player.y-80
    click.play()
  }
  if(gamestate===PLAY){
   // createCanvas(1100,700)
    // pause.visible=false;
    pause.scale=0.3
 // createCanvas(3300,2100)
    
 playermark.visible=true
    player.collide(edges)
   // zombies
    /*r1.visible=true;
     r2.visible=true;
     r3.visible=true;
     r4.visible=true;
     r5.visible=true;
     r6.visible=true;
     r7.visible=true;
     r8.visible=true;
     r9.visible=true;
     
     r11.visible=true;
     r12.visible=true;
     r13.visible=true;
     r14.visible=true;
     r15.visible=true;
     r16.visible=true;
     r17.visible=true;
     r18.visible=true;
     r19.visible=true;
     r20.visible=true;
     r21.visible=true;
     r22.visible=true;
     r23.visible=true;*/
   // r10.visible=true;
   // roadgroup.visibleEach=false;
 

if(frameCount%100===0){


 zombies = createSprite(player.x, random(player.y+200,player.y+300), random(10, 50), random(10, 50));
zombies.addAnimation("zimg",zimg)
zombies.scale=0.5
  zombies.velocityY=random(-1,-5)
  zombies.lifetime=100
  zombiegroup.add(zombies)
  //zombies.debug=true;
  zombies.setCollider("rectangle",0,0,150,150)
}
if(frameCount%200==0){
   
   
   
    zombie2 = createSprite(player.x, random(player.y-200,player.y-300), random(10, 50), random(10, 50));
zombie2.addAnimation("zimg",zimg)
zombie2.scale=0.5
  zombie2.velocityY=random(5,1)
  zombie2.lifetime=100
  
   
   zombiegroup.add(zombie2)
    zombie2.setCollider("rectangle",0,0,150,150)
   
   
   }
    
     if(player.isTouching(playermark)){
       
       
       pause.visible=true
       
       arrow.visible=true
       
       
       }else{
       
       pause.visible=false
       arrow.visible=false
       }
    if(l===1){
       
       mark.visible=true
       
        mark2.visible=false
       mark3.visible=false
       mark4.visible=false
       
       
       }else if(l===2){
                 mark.visible=false
       
        mark2.visible=true
       mark3.visible=false
       mark4.visible=false
                
                
                
                }else if(l===3){
                 mark.visible=false
       
        mark2.visible=false
       mark3.visible=true
       mark4.visible=false
                
                
                
                }else if(l===4){
                         
                            mark.visible=false
       
        mark2.visible=false
       mark3.visible=false
       mark4.visible=true
                         
                         
                         
                         
                         
                         
                         }
                            
if(player.isTouching(mark)){
   
   
 
   
   mark.setCollider("rectangle",0,0,0,0)
   mark2.setCollider("rectangle",0,0,150,400)
  
  reset()
  points=points+5
  l=2
  applause.play()
   }
if(player.isTouching(mark2)){
   
   

      mark3.setCollider("rectangle",0,0,150,400)
    mark.setCollider("rectangle",0,0,0,0)
  reset();
  points=points+10
  l=3
  applause.play()
   } 
    if(player.isTouching(mark3)){
   
   
 
      mark4.setCollider("rectangle",0,0,150,400)
    mark3.setCollider("rectangle",0,0,0,0)
     reset();
      points=points+15
      l=4
      applause.play()
   } 
    if(player.isTouching(mark4)){
   
   
 
      mark.setCollider("rectangle",0,0,150,400)
    mark4.setCollider("rectangle",0,0,0,0)
      reset()
      points=points+20
      l=1
      applause.play()
   } 
  if(keyDown("RIGHT_ARROW")&&map.x > -1420){
     
     
      player.setCollider("rectangle",0,0,500,60)
     player.x=player.x+10
    player.changeAnimation("pimg",pimg)
   // pause.visible=false
  }
    if(keyDown("DOWN_ARROW")&&map.y>-710){
     
       player.y=player.y+10;
         player.changeAnimation("pimg3",pimg3)
     player.setCollider("rectangle",0,0,60,500)
     // pause.visible=false
     } 
    if(keyDown("LEFT_ARROW")){
     
     
      player.setCollider("rectangle",0,0,500,60)
     player.x=player.x-10
          player.changeAnimation("pimg4",pimg4)
     // pause.visible=false
  }
    if(keyDown("UP_ARROW")){
     
       player.y=player.y-10;
         player.changeAnimation("pimg2",pimg2)
     player.setCollider("rectangle",0,0,60,500)
     // pause.visible=false
     }
    if(mousePressedOver(pause)){
       
       gamestate=PAUSE
       title.visible=false
      click.play()
       
       }
   
   
   
   if(player.isTouching(zombiegroup)){
      
      reset()
    points=points-5
    zsound.play()
      }


  }
  if(gamestate===PAUSE){
     
     map.scale=1.5
    
    map.x=550
    map.y=350
    player.x=2228899;
     start.visible=true
   // playermark.visible=false
    playermark.x=320
    playermark.y=260
    playermark.scale=0.05
    start.x=550
    zombiegroup.destroyEach()
    if(l===1){
    mark.x=955
    mark.y=280
    mark.scale=0.1
       }
    if(l===2){
       mark2.x=776
      mark2.y=261
      mark2.scale=0.1
       }
    if(l===3){
       mark3.x=593
      mark3.y=493
      mark3.scale=0.1
       }
    if(l===4){
        mark4.x=386
      mark4.y=587
      mark4.scale=0.1
       
       
       
       }
     }
 /* if(player.isTouching(roadgroup)&&keyDown("LEFT_ARROW")){
     
     
     
     player.x=player.x+0;
     
     
     
     }*/
  if(player.x>800&&gamestate===PLAY&&map.velocityX==0){
     
     map.velocityX=-15;
     player.velocityX=-15
    
     playermark.velocityX=-15;
   roadgroup.setVelocityXEach(-15);
   // pause.velocityX=-15
    //zombies.velocityX=-15
    zombiegroup.setVelocityXEach(-15)
    if(l===1){
       
       
       mark.velocityX=-15
       
       
       
       
       }
    if(l===2){
       
       
       mark2.velocityX=-15
       
       
       
       
       }
    if(l===3){
       
       
       mark3.velocityX=-15
       
       
       
       
       }
    if(l===4){
       
       
       mark4.velocityX=-15
       
       
       
       
       }
     }
  console.log(mouseY)
  if(player.x<600&&gamestate===PLAY&&map.velocityX==-15){
     
     
     
     map.velocityX=0;
     
      player.velocityX=0;
     // zombies.velocityX=0
     
     
    
      playermark.velocityX=0
     roadgroup.setVelocityXEach(0);
      // zombiegroup.setVelocityXEach(0)
    // pause.velocityX=0
     if(l===1){
       
       
       mark.velocityX=0
       
       
       
       
       }
     if(l===2){
       
       
       mark2.velocityX=0
       
       
       
       
       }
     if(l===3){
       
       
       mark3.velocityX=0
       
       
       
       
       }
     if(l===4){
       
       
       mark4.velocityX=0
       
       
       
       
       }
     }
  if(player.x<200&&gamestate===PLAY&&map.velocityX==0){
     
     map.velocityX=15;
     player.velocityX=15;
     playermark.velocityX=15
     mark.velocityX=15
   // pause.velocityX=15
    roadgroup.setVelocityXEach(15);
      zombiegroup.setVelocityXEach(15)
    if(l===1){
       
       
       mark.velocityX=15
       
       
       
       
       }
     if(l===2){
       
       
       mark2.velocityX=15
       
       
       
       
       }
     if(l===3){
       
       
       mark3.velocityX=15
       
       
       
       
       }
     if(l===4){
       
       
       mark4.velocityX=15
       
       
       
       
       }
     
     }
  if(player.x<200&&gamestate===PLAY&&map.velocityX==0&&map.x>500){
     
     map.velocityX=0;
     player.velocityX=0;
   // pause.velocityX=0
    roadgroup.setVelocityXEach(0);
     mark.velocityX=0
      //zombiegroup.setVelocityXEach(0)
    // zombies.velocityX=15
     if(l===1){
       
       
       mark.velocityX=0
       
       
       
       
       }
     if(l===2){
       
       
       mark2.velocityX=0
       
       
       
       
       }
     if(l===3){
       
       
       mark3.velocityX=0
       
       
       
       
       }
     if(l===4){
       
       
       mark4.velocityX=0
       
       
       
       
       }
     
     }
  if(player.x>600&&gamestate===PLAY&&map.velocityX==15){
     
     
     
     map.velocityX=0;
      mark.velocityX=0
      player.velocityX=0;
     
   //   zombies.velocityX=0
  //   pause.velocityX=0
     roadgroup.setVelocityXEach(0);
    
      playermark.velocityX=0
     
      // zombiegroup.setVelocityXEach(0)
     if(l===1){
       
       
       mark.velocityX=0
       
       
       
       
       }
     if(l===2){
       
       
       mark2.velocityX=0
       
       
       
       
       }
     if(l===3){
       
       
       mark3.velocityX=0
       
       
       
       
       }
     if(l===4){
       
       
       mark4.velocityX=0
       
       
       
       
       }
     }
  if(player.x<200&&map.x>=1100){
     
     
     roadgroup.setVelocityXEach(0);
    // pause.velocityX=0
     map.velocityX=0
     mark.velocityX=0
    player.velocityX=0
      playermark.velocityX=0
      // zombiegroup.setVelocityXEach(0)
    if(l===1){
       
       
       mark.velocityX=0
       
       
       
       
       }
     if(l===2){
       
       
       mark2.velocityX=0
       
       
       
       
       }
     if(l===3){
       
       
       mark3.velocityX=0
       
       
       
       
       }
     if(l===4){
       
       
       mark4.velocityX=0
       
       
       
       
       }
     }
   if(player.x>800&&map.x<=-790){
     
     
     roadgroup.setVelocityXEach(0);
     
     map.velocityX=0
    // pause.velocityX=0
      mark.velocityX=0
    player.velocityX=0
     playermark.velocityX=0
     // zombiegroup.setVelocityXEach(0)
     if(l===1){
       
       
       mark.velocityX=0
       
       
       
       
       }
     if(l===2){
       
       
       mark2.velocityX=0
       
       
       
       
       }
     if(l===3){
       
       
       mark3.velocityX=0
       
       
       
       
       }
     if(l===4){
       
       
       mark4.velocityX=0
       
       
       
       
       }
     }
   if(player.y>600&&gamestate===PLAY&&map.velocityX==0){
     
     map.velocityY=-15;
     player.velocityY=-15;
      mark.velocityY=-15
   //  pause.velocityY=-15
     playermark.velocityY=-15
    roadgroup.setVelocityYEach(-15);
      zombiegroup.setVelocityYEach(-15)
     if(l===1){
       
       
       mark.velocityY=-15
       
       
       
       
       }
     if(l===2){
       
       
       mark2.velocityY=-15
       
       
       
       
       }
     if(l===3){
       
       
       mark3.velocityY=-15
       
       
       
       
       }
     if(l===4){
       
       
       mark4.velocityY=-15
       
       
       
       
       }
     }
  if(player.y<400&&gamestate===PLAY&&map.velocityY==-15){
     
     
     
     
     // pause.velocityY=0
     map.velocityY=0;
     
      player.velocityY=0;
     
      mark.velocityY=0
     playermark.velocityY=0
     roadgroup.setVelocityYEach(0);
     
     // zombiegroup.setVelocityYEach(0)
     if(l===1){
       
       
       mark.velocityY=0
       
       
       
       
       }
     if(l===2){
       
       
       mark2.velocityY=0
       
       
       
       
       }
     if(l===3){
       
       
       mark3.velocityY=0
       
       
       
       
       }
     if(l===4){
       
       
       mark4.velocityY=0
       
       
       
       
       }
     
     }
   if(player.y<200&&gamestate===PLAY&&map.velocityX==0){
     
     map.velocityY=15;
     player.velocityY=15;
     mark.velocityY=15
    // pause.velocityY=15
     playermark.velocityY=15
    roadgroup.setVelocityYEach(15);
      zombiegroup.setVelocityYEach(15)
     if(l===1){
       
       
       mark.velocityY=15
       
       
       
       
       }
     if(l===2){
       
       
       mark2.velocityY=15
       
       
       
       
       }
     if(l===3){
       
       
       mark3.velocityY=15
       
       
       
       
       }
     if(l===4){
       
       
       mark4.velocityY=15
       
       
       
       
       }
     }
  if(player.y>400&&gamestate===PLAY&&map.velocityY==15){
     
     
     
     
      
     map.velocityY=0;
     mark.velocityY=0
      player.velocityY=0;
     
    // pause.velocityY=0
     playermark.velocityY=0
     roadgroup.setVelocityYEach(0);
    //  zombiegroup.setVelocityYEach(0)
     
  // console.log(map.y)
    if(l===1){
       
       
       mark.velocityY=0
       
       
       
       
       }
     if(l===2){
       
       
       mark2.velocityY=0
       
       
       
       
       }
     if(l===3){
       
       
       mark3.velocityY=0
       
       
       
       
       }
     if(l===4){
       
       
       mark4.velocityY=0
       
       
       
       
       }
     
     }
  if(map.y>=700&&player.y<600){
  
   map.velocityY=0;
     
      player.velocityY=0;
     mark.velocityY=0
    // pause.velocityY=0
     playermark.velocityY=0
     roadgroup.setVelocityYEach(0);
 // zombiegroup.setVelocityYEach(0)
  if(l===1){
       
       
       mark.velocityY=0
       
       
       
       
       }
     if(l===2){
       
       
       mark2.velocityY=0
       
       
       
       
       }
     if(l===3){
       
       
       mark3.velocityY=0
       
       
       
       
       }
     if(l===4){
       
       
       mark4.velocityY=0
       
       
       
       
       }
  }
  
  /* if(map.y>=700&&player.y>-665){
  
   map.velocityY=0;
     
      player.velocityY=0;
     
     
     
     roadgroup.setVelocityYEach(0);
  
  
  }*/
  
  console.log(mouseX)
       player.collide(roadgroup)
 //background(mapimg)cF
 
  drawSprites();
  textSize(50)
  stroke("black")
  fill("red")
  strokeWeight(10)
 text("SCORE:"+points,820,70)
  text("TARGET:50",520,70)
  if(points>49){
   
   points=0
    applause.play()
  
    
  }
  
}
function reset(){


   
   
   map.x=1100;
  map.y=700
  r1.x=870
  r1.y=180
   r2.x=10
   r2.y=290
   r3.x=870
   r3.y=630
  r4.x=300
  r4.y=1050
   r5.x=1250
   r5.y=1050
r6.x=1500
   r6.y=1300
   r7.x=350
   r7.y=1450
 r8.x=250
  r8.y=1800
  r9.x=1025
  r9.y=1650
  r10.x=1025
  r10.y=2000
  r11.x=1750
  r11.y=320
  r12.x=1950
  r12.y=600
 r13.x=2150
  r13.y=150
  r14.x=2550
  r14.y=420
  r15.x=3050
  r15.y=150
  r16.x=3050
  r16.y=625
  r17.x=3000
  r17.y=1300
  r18.x=2050
  r18.y=1150
  r19.x=2900
  r19.y=2000
  r20.x=1800
  r20.y=1750
  r21.x=1750
  r21.y=2000
  r22.x=2400
  r22.y=1200
  r23.x=2300
  r23.y=1500
  w.x=50
  w.y=800
 
player.x=290
  player.y=460
   
   playermark.x=390
  playermark.y=380
  pause.x=50
  pause.y=50
  zombiegroup.destroyEach()
   mark.x=2743
  mark.y=310
   mark2.x=2043
  mark2.y=310
  mark3.x=1233
  mark3.y=1293
  mark4.x=644
  mark4.y=1644
mark.scale=0.5
  mark2.scale=0.5
  mark3.scale=0.5
  mark4.scale=0.6
w2.x=50
  w2.y=1255

}
