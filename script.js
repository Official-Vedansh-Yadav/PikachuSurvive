var rs = 0;

// Audio 
var jump = new Audio('jump.mp3');

// Function for jump making jump key 

document.onkeydown = function(e){
    console.log('hello');
   if (e.keyCode == 38){
       let pikachu = document.querySelector(".pikachu");
       pikachu.classList.add('jump');

       setTimeout(() => {
         pikachu.classList.remove('jump');  
       }, 700);
   }

   if (e.keyCode == 39){
    let pikachu = document.querySelector(".pikachu");
    let px = parseInt(window.getComputedStyle(pikachu,null).getPropertyValue('left'));
    pikachu.style.left = px + 112 + 'px';

   }
    if (e.keyCode == 37){
  let pikachu = document.querySelector(".pikachu");
  let px = parseInt(window.getComputedStyle(pikachu,null).getPropertyValue('left'));
  pikachu.style.left = (px -112) + 'px';

    } }



// game Scorer

var scorer = setInterval(score, 100);

function score(){
     rs = rs + 1;
    document.querySelector(".score").innerHTML = "Your Score :" + rs;
}


// Collision Detecter

setInterval(() => {
    let pikachu = document.querySelector(".pikachu");
    let gameover = document.querySelector(".GameOver");
    let charizard = document.querySelector(".charizard");
  
    // left distance of both characters
    let px = parseInt(window.getComputedStyle(pikachu,null).getPropertyValue('left'));
    let cx = parseInt(window.getComputedStyle(charizard,null).getPropertyValue('left'));
  
    // bottom distance of both characters
    let py = parseInt(window.getComputedStyle(pikachu,null).getPropertyValue('bottom'));
    let cy = parseInt(window.getComputedStyle(charizard,null).getPropertyValue('bottom'));
  
    var x = Math.abs(px - cx);
    var y = Math.abs(py - cy);
    if(x < 30 && y<30){
      gameover.style.visibility = 'visible';
      charizard.classList.remove('run');
      pikachu.classList.add("out");
      charizard.classList.add("celebrate");
      clearInterval(scorer);
      jump.play();
      bg.pause();
    }
  }, 5);

// Speed Increse

setInterval(() => {
  setTimeout(() => {
    let charizard = document.querySelector(".charizard");
    var Speed =  parseFloat(window.getComputedStyle(charizard,null).getPropertyValue('animation-duration'));
    var newspeed = Speed - 0.05;
    charizard.style.animationDuration = newspeed + 's';
  }, 10000);
}, 1000);
