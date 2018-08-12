
function theBeatlesPlay(musicians, instruments){
  var arry = [];
  var i;
  for (i = 0; i < musicians.length; i++){
    arry[i] = musicians[i] + instruments[i]
  }
  return arry;
}