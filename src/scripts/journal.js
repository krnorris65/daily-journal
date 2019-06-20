const journalEntries = [
    {
        date: "2019-05-21",
        concept: "HTML",
        entry: "Today I learned the basics of HTML",
        mood: "happy"
    },
    {
        date: "2019-05-22",
        concept: "CSS",
        entry: "Today I practiced styling with CSS selectors and used Flexbox Froggy",
        mood: "happy"
    },
    {
        date: "2019-05-31",
        concept: "Javascript",
        entry: "Today I learned about Javascript objects",
        mood: "happy"
    }
]

const makeJournalEntryComponent = (journalEntry) => {
    return `
    <div>
        <h2>${journalEntry.concept}</h2>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.date}</p>
        <p>${journalEntry.mood}</p>
    </div>
    `
}

const renderJournalEntries = (entries) => {
    let entryEl = document.querySelector(".entryLog")
    entryEl.innerHTML = ""
    entries.forEach(entry => {
        console.log(makeJournalEntryComponent(entry))
        entryEl.innerHTML += makeJournalEntryComponent(entry)
    })
}

renderJournalEntries(journalEntries)