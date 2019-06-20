API.getJournalEntries().then(renderJournalEntries)

document.querySelector("#saveEntry").addEventListener("click", saveJournalEntry)

const filterMood = () => {
    let mood = event.target.value
    API.getJournalEntries()
    .then(entriesArray => {
        if(mood === "all"){
            renderJournalEntries(entriesArray)
        } else {
        let filteredEntries = entriesArray.filter(entry => entry.mood === mood)
        renderJournalEntries(filteredEntries)
        }
    })
}


document.getElementsByName("mood").forEach(moodInput => {
    moodInput.addEventListener("click", filterMood)
})

