
var sixNumArray = [1,2,3,4,5,6]

function incArray (arr) {
  newArray = arr.map(x => x + 1);

    return newArray;
}

incArray(sixNumArray);

console.log(newArray);

function evenValues (arr) {

    evens = arr.filter( (x) => {
        x % 2 === 0
    });

    return evens;
}
evenValues(newArray);

console.log(evens);

function reduction (arr){

    let addUp = (acc, curr) => {
        return acc + curr;
    }

    sumArr = arr.reduce(addUp)

    return sumArr;
}

reduction(evens);
console.log(sumArr);