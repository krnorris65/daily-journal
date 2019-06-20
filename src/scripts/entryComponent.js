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