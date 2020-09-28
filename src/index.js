
exports.min = function min (array) {
  
}

exports.max = function max (array) {
  if (array === undefined) {
    return 0;
  }
  for (var i = 0, el = 0; i < array.length; i++) {
    if (array[i] > el && array.length !== undefined) {
      el = array[i];
    } else {
      
    }
  }
  return el;
}

exports.avg = function avg (array) {
  return 0;
}
