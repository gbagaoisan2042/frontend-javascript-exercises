module.exports.addItem = function(item, array){

  if(array.indexOf(item)) {
    array.push(item);
    return array
  }
  else {
    return array

  }
};

module.exports.reverseSortedList = function(array){

  array.sort();
  array.reverse();

   return array
};


// - Create a `reverseSortedList` function. This function should:
//   - take one argument, an array
//   - it should return the array sorted but in reverse
