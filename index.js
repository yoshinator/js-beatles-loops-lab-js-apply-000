
function theBeatlesPlay(musicians, instruments){
  var arry = [];
  var i;
  for (i = 0; i < musicians.length; i++){
    arry[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return arry;
}

function johnLennonFacts(facts){
  var i = 0;
  while(i < facts.length ){
    facts[i] = facts[i]+"!!!"
    i++;
  }
  return facts;
}