API.getJournalEntries().then(renderJournalEntries)

document.querySelector("#saveEntry").addEventListener("click", saveJournalEntry)

document.getElementsByName("mood").forEach(moodInput => {
    moodInput.addEventListener("click", filterMood)
})

document.getElementById("dontSave").addEventListener("click", resetValues)

document.getElementById("searchTerm").addEventListener("keypress", () => {
    if (event.keyCode === 13) {
        let searchedTerm = document.getElementById("searchTerm").value.toLowerCase()
        let searchResults = []

        API.cachedJournalEntries.forEach(entry => {

            for (const value of Object.values(entry)) {
                if (typeof value === "string") {
                    if (value.toLowerCase().includes(searchedTerm)) {
                        if (!searchResults.includes(entry)) {
                            searchResults.push(entry)
                        }
                    }
                }
            }
        })
        renderJournalEntries(searchResults)

    }
})