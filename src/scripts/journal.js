/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntry = {
    date: "2019-05-21",
    concept: "HTML",
    entry:"Today I learned the basics of HTML",
    mood:"happy"
}

let journalEntries = []

journalEntries.push(journalEntry)

const journalEntry2 = {
    date: "2019-05-22",
    concept: "CSS",
    entry:"Today I practiced styling with CSS selectors and used Flexbox Froggy",
    mood:"happy"
}

const journalEntry3 = {
    date: "2019-05-31",
    concept: "Javascript",
    entry:"Today I learned about Javascript objects",
    mood:"happy"
}

journalEntries.push(journalEntry2, journalEntry3)

console.log(journalEntries)