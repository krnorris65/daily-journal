const renderJournalEntries = (entries) => {
    let entryEl = document.querySelector(".entryLog")
    entryEl.innerHTML = ""
    entries.forEach(entry => {
        entryEl.innerHTML += makeJournalEntryComponent(entry)
    })
}