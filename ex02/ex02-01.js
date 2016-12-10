/**
 *
 */
var questionBaseHandler = (function(questionArr) {
  // generate an array filled with a natural sequence [0,1,2,...] and shuffle it
  var length = questionArr.length;
  var getNext;
  if (length == 0) getNext = () => null;
  else if (length == 1) getNext = () => questionArr[0];
  else {
    let enumerationOrder = shuffleArray([...Array(length)].map((v, i) => i));
    let pointer = 0;
    getNext = function() {
      if (pointer >= length) {
        let enumLast = enumerationOrder[pointer - 1];
        enumerationOrder = shuffleArray(enumerationOrder);
        if (enumerationOrder[0] === enumLast) pointer = 1;
        else pointer = 0;
      }
      return questionArr[enumerationOrder[pointer++]];
    };
  }
  return {
    getNext
  }
})(questions);
