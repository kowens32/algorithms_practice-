//
function titleCase(str) {
    var arr = str.split(" ");
    var lower = arr.map (function toLower (arr){

        return arr.toLowerCase();


    });

    lower = lower.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());


    });
    lower = lower.join(" ");
    console.log(lower);

    return lower;
}

titleCase("I'm a little tea pot");