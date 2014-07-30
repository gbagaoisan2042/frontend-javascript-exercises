module.exports.stream = function(conditionalFn, actionFn) {
while (conditionalFn())

  actionFn();

};

module.exports.sumNumbers = function(array) {

  var counter = 0;
  var sum = 0;

  while (counter < array.length) {
    sum = array[counter] + sum;
    counter++;
  }



  // for (var i = 0; i < array.length; i++) {
  //   sum = array[i] + sum;
  // }

  return sum;

}

