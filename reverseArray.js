let reversedArray = [];
function arrayToReverse(arr) {
    for(let i=arr.length-1; i>=0; i--) {
        reversedArray.push(arr[i])
    }
    return reversedArray
}

arrayToReverse(["last", "middle", "first"])
arrayToReverse([4,3,2,1])