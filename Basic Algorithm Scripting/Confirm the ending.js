
function confirmEnding(str, target) {
    var len =  target.length;
    console.log('this is a number',len);
    str = str.substr(-len, len);
    console.log('here i am', str);

    return str === target;

//   console.log('correct?', str, target);
}

confirmEnding("Bastian", "n");
