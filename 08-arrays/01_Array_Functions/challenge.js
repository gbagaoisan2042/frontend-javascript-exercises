module.exports.reversePlusOne = function(array){

  array.reverse();
  array.unshift(1);

  return array

};

module.exports.plusesEverywhere = function(array){

var str = array.join('+')

  return str
};

module.exports.arrayQuantityPlusOne = function(array){

var arrayLength = array.length;

return arrayLength + 1

};
