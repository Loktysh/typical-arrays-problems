
exports.min = function min (array) {
  if (array === undefined) {
    return 0;
  }
  for (var i = 0, el = 0; i < array.length; i++) {
    if (array[i] < el && array.length !== undefined) {
      el = array[i];
    } else {
      
    }
  }
  return el;
};

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
};

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  for (var i = 0, avg_num = 0, avg_final = 0; i < array.length; i++) {
    avg_num += array[i];
    }
  return avg_final = avg_num / array.length;
};
