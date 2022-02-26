//declarando as variáveis
var trex,trex_running;
var edges

//preload carrega as mídias do jogo
function preload(){
  //animação do trex correndo
  trex_running = loadAnimation("images/trex3.png","images/trex4.png")

  //animação do solo
}


//setup faz a configuração
function setup(){
  createCanvas(600,200);

  //sprite trex
  trex = createSprite(50,165,20,40);
  trex.addAnimation("running",trex_running)//carregando a animação do trex
  trex.scale = 0.5;


  //sprite Solo
  
  
  //criando bordas
  edges = createEdgeSprites();
  
}

//draw faz o movimento, a ação do jogo
function draw(){
  background("lightgray");

  //pulo do trex
  if (keyDown("space")) {
    trex.velocityY = -10
  }

  gravity();

  //colisão do trex
  trex.collide(edges)

  //movimento do solo



 
  //coordenadas do mouse na tela
  text("X: "+mouseX+" / Y: "+mouseY,mouseX,mouseY)
  drawSprites();
}

function gravity(){
  trex.velocityY += 0.5 
}