function theBeatlesPlay (musicians, instruments){
  var emptyArray =[];
  var mlength = musicians.length;
  var ilength = instruments.length;
  var l;
   for (l = 0; l < mlength; l++) {
     emptyArray[l] = musicians[l] + " plays "+ instruments[l];
   }
   return emptyArray
}
function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + " !!!";
  }
  return facts;
}
