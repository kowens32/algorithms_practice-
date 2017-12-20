
function repeatStringNumTimes(str, num) {
    // repeat after me

    if (num < 0) {
        return ""
    }
    else
        var result = str.repeat(num);

    return result
}

repeatStringNumTimes("abc", 3);