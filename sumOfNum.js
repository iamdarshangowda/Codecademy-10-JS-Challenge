function numbers(num) {
    return num.reduce((sum, curr) => sum+curr, 0)
}

numbers([5,6,2,12,10])