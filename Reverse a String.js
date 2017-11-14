
function reverseString(str) {
    var newString = str.split("");
    var reverseString = newString.reverse(str);
    var singleString = reverseString.join('');
    return singleString;
    return str.split("").reverse().join('');
}

reverseString("hello");