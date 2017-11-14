
function findLongestWord(str) {
    var longestWordLength = 0;
    var arr = str.split(" ");

    arr.forEach(function(element){
        if (element.length > longestWordLength) {
            longestWordLength = element.length;
        }
    });

    return longestWordLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
