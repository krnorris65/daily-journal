API.getJournalEntries().then(renderJournalEntries)

document.querySelector("#saveEntry").addEventListener("click", () => {
    let date = document.getElementById("journalDate").value
    let concept = document.getElementById("journalConcept").value
    let entry = document.getElementById("journalEntry").value
    let mood = document.getElementById("journalMood").value

    if(date !== "" && concept !== "" && entry !== ""){
        let journalObj = {
            date: date,
            concept: concept,
            entry: entry,
            mood: mood
        }
        console.log(journalObj)
    }
})