function findVowels(string) {
    return string.match(/[aeiou+]/g).length
}

findVowels("Return the number of vowels in a string")