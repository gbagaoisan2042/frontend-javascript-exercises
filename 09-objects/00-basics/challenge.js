module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {

  return {title: courseTitle, duration: courseDuration, students: courseStudents}

}

module.exports.addProperty = function(object, newProp, newValue) {

  if (object[newProp]) {
    return object
  }

  else {
    object[newProp] = newValue
    return object
  }

}


module.exports.formLetter = function(object) {

   return "Hello " + object.recipient + ",\n\n" + object.msg + "\n\nSincerely,\n" + object.sender
}


module.exports.canIGet = function(item, money) {

  var priceList = { "MacBook Air": 999, "MacBook Pro": 1299, "Mac Pro": 2499, "Apple Sticker": 1 }

  return (money >= priceList[item])

}



// - Complete the `canIGet` function. This function should:
//     - Take two arguments:
//         - `item`: represents what the user wants to buy
//         - `money`: represents how many dollars a user has
//     - return `true` if a user can afford a given item according to the price chart below, and false otherwise:
//         - 'MacBook Air' - $999
//         - MacBook Pro' - $1299
//         - 'Mac Pro' - $2499
//         - 'Apple Sticker' - $1
//     - Return `false` if the `item` is not in the above list of Apple products

//     > Do this with 0 'if' conditions! (Hint: Place the above price table in an object).

//     For example:

//     ```javascript
//     canIGet('MacBook Air', 100) // returns false
//     canIGet('MacBook Air', 1000) // returns true
//     ```
