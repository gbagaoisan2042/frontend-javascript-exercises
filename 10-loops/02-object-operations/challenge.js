module.exports.copy = function(object){

  var newObj = {};

  for (var property in object) {
     newObj[property] = object[property]
  }

  return newObj;
};

module.exports.extend = function(dest, src){


  for (var property in src) {
     dest[property] = src[property]
  }
  return dest;
};

module.exports.hasElems = function(object, array){


// for(var propt in obj){
//     propt + ': ' + obj[propt]
// }

      for (var i = 0; i < array.length; i++) {

       if (array[i]  == object[array[i]]) {
        return true
       }
       else {
        return false
       }

    };


};
