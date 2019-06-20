const makeJournalEntryComponent = (journalEntry) => {
    return `
    <div id="entry--${journalEntry.id}">
        <h2>${journalEntry.concept}</h2>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.date}</p>
        <p>${journalEntry.mood}</p>
        <button class="deleteBtn" id="delete--${journalEntry.id}">Delete Entry</button>
    </div>
    `
}