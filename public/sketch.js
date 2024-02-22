import Boid from './boid.js';
import { currSpell } from './main.js';

const flock = [];
let spellCount = 0;
// let counter = 0;
let currCasting = true;
let timeCount = 0;

new p5(function(p5){

  p5.setup = function(){
    p5.createCanvas(1920, 1080);
  }

  p5.draw = function(){
    timeCount ++;
    p5.background(51);

    if (currSpell == true){
      spellCount ++;
      // currCasting = true;
    }

    if (currSpell == true && currCasting){

      // counter ++;
      for (let i = 0; i < 100; i++) {
        flock.push(new Boid(p5.mouseX, p5.mouseY,p5));
        console.log(p5.mouseX, p5.mouseY);

      if (spellCount > 2){
        for (let i = 0; i < flock.length; i++){
          // flock.pop();
          currCasting = false;
          
        }
      }
    }
    }

    else {
      if(timeCount % 20 == 0){
        currCasting = !currCasting;
      }
      
    }

    for (let boid of flock) {
        boid.show(p5);
        boid.update(p5);
  
    }
  }
});

export { currSpell };

// window.setup = setup;
// window.draw = draw;