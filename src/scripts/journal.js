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
        entryEl.innerHTML += makeJournalEntryComponent(entry)
    })
}

fetch("http://localhost:3000/entries")
.then(data => data.json())
.then(entriesArray => renderJournalEntries(entriesArray))