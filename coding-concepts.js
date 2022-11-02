// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: ["tangerine", "magenta", "lilac", "daffodil", "indigo"]
// b) Verify and explain: Wrong, the push method returns colors.length, 5
console.log(colors.length)

// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: Correct, the number of characters in the string, or max index + 1

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer:o
// b) Verify and explain: Correct, the character in index 4 will be output

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Correct, index 1 of languages array, the string Ruby

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY","SUNDAY"]
// b) Verify and explain: Error, toUpperCase is not a function, need to iterate through array to modify

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: Error, argument of typeof needs to be in parentheses
// b) Verify and explain: Output "number", because the output of length operator is an integer, apparently parentheses not required
console.log(typeof(dataTypes.length))