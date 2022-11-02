// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

console.log("--------------------INSTRUCTOR EXAMPLE:")
// Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:
// A function that accepts two strings,
// and uses .length() and returns the more longer of the two
const returnLonger = (str1, str2) => {

    if (str1.length > str2.length){
        return(str1)
    }

    else if (str1.length < str2.length){
        return(str2)
    }

    else {
        return("The two objects are of equal length or something went wrong")
    }
}

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Use existing function to compare two strings (and log output) 

console.log('Expected outcome: "banana"')
console.log(`Student output: ${returnLonger(fruit1, fruit2)}`)

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

console.log('Expected outcome: "cherry"')
console.log(`Student output: ${returnLonger(fruit3, fruit4)}`)


console.log("--------------------1")
// Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:
// Store needed variables in memory
const bpF = 212

// A function that accepts an integer argument,
// compares to boiling point (F),
// and returns a string with comparison to boiling point (F)
const compareTemp = (sampleTemp) => {
    if (sampleTemp > bpF){
        return(`${sampleTemp} is above the boiling point`)
    }

    else if (sampleTemp < bpF){
        return(`${sampleTemp} is below the boiling point`)
    }

    else if (sampleTemp == bpF){
        return(`${sampleTemp} is at the boiling point`)
    }

    else {
        return("Oops, something went wrong")
    }
}

const temp1 = 42
console.log('Expected output: "42 is below boiling point"')
console.log(`Student output:${compareTemp(temp1)}`)

const temp2 = 350
console.log('Expected output: "350 is above boiling point"')
console.log(`Student output: ${compareTemp(temp2)}`)

const temp3 = 212
console.log('Expected output: "212 is at boiling point"')
console.log(`Student output: ${compareTemp(temp3)}`)


console.log("--------------------2") 
//Create the code that will combine the two arrays and return the length using the test variables provided below.
// Describe your process:
const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

// Create a function that accepts two arrays as arguments,
// combines the two arrays, using array concatenation
// then returns the length of the resultant
const combineAndLength = (arr1, arr2) => {
    let arr3 = arr1.concat(arr2)
    return(arr3.length)
}

console.log("Expected output: 9")
console.log(`Student output: ${combineAndLength(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns)}`)


console.log("--------------------3")
// Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
const currentCohort = "Golf 2022"

// Using a single for loop
// Create array from given string, using:
// .push and charAt respectively,
let arr = []
for (i = currentCohort.length-1 ; i > -1 ; i--){
    arr.push(currentCohort.charAt(i))
}
// then convert array to string and display using .join
console.log('Expected output: "2202 floG"')
console.log(`Student output: ${arr.join("")}`)


console.log("--------------------4")
// Create the code that will return the last index of the given value from the array using the test variables provided below.
// Describe your process:
const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// A function that takes an array and a value,
// then find the last index of the given value from the array, using .lastindexOf,
// then returns the value
const findLastIndex = (arr1, val1) => {
    let lastIndex = arr1.lastIndexOf(val1)
    return(lastIndex)
}
console.log('Expected output: 7')
console.log(`Student output: ${findLastIndex(myNumbers, givenValue1)}`)

const givenValue2 = 10
console.log("Expected output: 8")
console.log(`Student output: ${findLastIndex(myNumbers, givenValue2)}`)


console.log("--------------------5") 
//Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.
// Describe your process:
// A function that accepts an array,
// and returns that array arranged large to small

const arrSort = (arrToSort) => {

    // set a boolean flag and temporary storage enumber
    let bool = true
    let temporaryNum = 0

    // A function that accepts an array,
    // and sets and returns a boolean as true if sorting large to small still required
    const checkSort = (arrCheck) => {
        for (let i = 0 ; i < arrCheck.length-1 ; i++){
            if (arrCheck[i] < arrCheck[i+1]) {
                bool = true
            }
        }
        return bool
    }

    // This while loop iterates through and sorts the array,
    // as long as the flag remains of value
    while(bool) {
        for (let i = 0 ; i < arrToSort.length-1 ; i++){
            if (arrToSort[i] < arrToSort[i+1]){
                temporaryNum = arrToSort[i+1]
                arrToSort[i+1] = arrToSort[i]
                arrToSort[i] = temporaryNum
                bool = false
                bool = checkSort(arrToSort)
            }
        }
    }
    return arrToSort
}

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
console.log("The Expected output: [82, 80, 79, 77, 76, 73, 72]")
console.log(`Student output: ${arrSort(sanDiegoSummerTemperatures)}`)

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
console.log("The Expected output: [68, 67, 66, 66, 62, 59, 59]")
console.log(`Student output: ${arrSort(sanDiegoWinterTemperatures)}`)
