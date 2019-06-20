const renderJournalEntries = (entries) => {
    let entryEl = document.querySelector(".entryLog")
    entryEl.innerHTML = ""
    entries.forEach(entry => {
        entryEl.innerHTML += makeJournalEntryComponent(entry)
    })

    document.querySelectorAll(".deleteBtn").forEach(button => {
        button.addEventListener("click", deleteEntry)
    })
    document.querySelectorAll(".editBtn").forEach(button => {
        button.addEventListener("click", editEntry)
    })
}