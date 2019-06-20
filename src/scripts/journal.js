API.getJournalEntries().then(renderJournalEntries)

document.querySelector("#saveEntry").addEventListener("click", saveJournalEntry)

document.getElementsByName("mood").forEach(moodInput => {
    moodInput.addEventListener("click", filterMood)
})

