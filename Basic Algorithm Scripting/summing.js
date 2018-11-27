([1,2,3,4], 5) => {
  // returns true b/c 1 + 4 = 5
}

([1,2,3,4], 9) => {
  // returns false b/c no 2 numbers add up to 9
}

function summing(array1, equalizer) {

console.log('what is the first array'+array1)


// for (i = 0; array1.length; i++) {
//    text += "The number is " + i + "<br>";
// }
var popper = array1.pop();

console.log('xxx' + popper)

if (equalizer - popper) > 0

then

var popper = array1.pop();

if (equalizer - popper) = 0
return true

if (equalizer - popper) < 0

return false

console.log('did i capture a number' + popper);
console.log('what is the first pop' + array1)


//**might use this again after we pop the variables out**//
// const initialSubtraction = array1.map(array1 => equalizer - array1)
//
// console.log('what is this capturing' + initialSubtraction);


///**this is garbage I think//
// const map2 = array2.map(array2 => array1 - array2)

// console.log ('what is map2' + array1 - initialSubtraction)
// console.log('what is in this new array' + map2)

}

summing([1,2,3,4], 9);

// take the index from the first array of numbers, and then subtract it from the second number.
// put the result of that into Var originalSum
//
// take the second index from the first array of numbers and subtract it from Var originalSum
// if originalSum = 0, then return true
// if not, return to the third index and subtract it from originalSum and continue through the array until
// complete.
//
// if none = 0, then return false
