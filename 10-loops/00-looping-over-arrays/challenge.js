module.exports.sumNumbers = function(array) {

  for (var i = 0, sum = 0; i < array.length;sum += array[i++]);
  return sum;
}

module.exports.splitAndLowerCaseString = function(string) {

 var newArray = [];

 var stringSplit = string.split(",");

for (var i = 0; i < stringSplit.length; i++) {
    newArray.push(stringSplit[i].toLowerCase());
};

return newArray;


  // var splitArray = array.split(',');
  // return lowerCase;
}


module.exports.addIndex = undefined;
