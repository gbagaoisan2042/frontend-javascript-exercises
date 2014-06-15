module.exports.newArray = function(a, b, c, d) {
  return [a, b, c, d]
};

module.exports.firstAndLast = function(array) {

  var lastItem = array.length -1

  return [array[0], array[lastItem]]

};
