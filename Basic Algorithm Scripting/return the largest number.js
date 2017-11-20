
function largestOfFour(arr) {
    return arr.map((intArray) => {
        let maxValue = intArray[0];
    for (i = 0; i <intArray.length; i++) {
        if (intArray[i] > maxValue) {
            maxValue = intArray[i];
        }
    }
    return maxValue;
});
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);