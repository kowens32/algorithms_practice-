
function factorialize(num) {

    var newNum = (num - 1);
    for (a = 1; num >=1; num--){
        a = num * a
    }

    return a;
}

factorialize(10);
