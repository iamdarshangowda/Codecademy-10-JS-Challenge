let even = []

function numbers(num) {
for(let i=0; i<num.length; i++) {
    if(num[i] % 2 === 0) {
       even.push(num[i])
    }
}
return even
}

//example
numbers([8,9,7,54,1026,355,98,57])

//odd numbers
// let even = []

// function numbers(num) {
// for(let i=0; i<num.length; i++) {
//     if(num[i] % 2 === 0) {
//        even.push(num[i])
//     }
// }
// return even
// }

// //example
// numbers([8,9,7,54,1026,355,98,57])