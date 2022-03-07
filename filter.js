function number(num) {
    return num.filter(a => a>=0)
}

console.log(number([6,0,-5,8,-12]))