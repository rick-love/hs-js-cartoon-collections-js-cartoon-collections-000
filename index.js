function dwarfRollCall(dwarves) {
let a  = [];

  for(var i = 0; i < dwarves.length; i++){
 a.push(`${[i+1]}. ${dwarves[i]}`);
}
return a.join(' ').concat(' ');
}

function summonCaptainPlanet(planeteerCalls){
  let a = [];

  for(let i = 0; i < planeteerCalls.length; i++){
      a.push(`${planeteerCalls[i].toUpperCase().concat('!')}`);
    }
    return a;
}

function longPlaneteerCalls(words) {

  let a = false;


  for(let i = 0; i < words.length; i ++){
    if((words[i].length) > 4){
     a = true;
    }

  }
  return a;
}

function findTheCheese (foods) {
  let cheese = ["cheddar", "gouda", "camembert"];

  for(let i = 0; i < foods.length; i++){
    for(let j = 0; j < cheese.length; j++){
      if(foods[i] === cheese[j]){
        return foods[i];
      }//end of else

    }
  }
  return 'no cheese!'
}
