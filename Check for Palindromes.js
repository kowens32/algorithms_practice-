

function palindrome(str) {
    var arr = str.replace(/[^0-9a-z]/gi, '').toLowerCase().split('');

    var reduceString = arr.join('');
    var reversedString = arr.reverse().join('');

    return reduceString == reversedString;
}

palindrome("Cat");