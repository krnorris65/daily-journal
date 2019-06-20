const saveJournalEntry = () => {
    let date = document.getElementById("journalDate").value
    let concept = document.getElementById("journalConcept").value
    let entry = document.getElementById("journalEntry").value
    let mood = document.getElementById("journalMood").value

    //checks if fields are empty
    if (date !== "" && concept !== "" && entry !== "") {
        //then checks if the text in concept and entry are valid characters
        if (checkCharValid(concept, entry)) {
            let journalObj = createJournalEntryObject(date, concept, entry, mood)

            API.postJournalEntry(journalObj)
                .then(e => API.getJournalEntries())
                .then(entries => {
                    renderJournalEntries(entries)
                    resetValues()
                })

        } else {
            alert("Invalid Character Found.")
        }
    }
}

const resetValues = () => {
    document.getElementById("journalDate").value = ""
    document.getElementById("journalConcept").value = ""
    document.getElementById("journalEntry").value = ""
    document.getElementById("journalMood").value = "happy"
    document.getElementById("showAll").checked = true
}

const checkCharValid = (conceptText, entryText) => {
    // ^! means if the characters don't match the following
    let allowedChar = /[^!A-Z0-9a-z(){}:;. ]/g;

    let invalidCharConcept = conceptText.match(allowedChar)
    let invalidCharEntry = entryText.match(allowedChar)

    if (invalidCharConcept === null && invalidCharEntry === null) {
        //if invalidCharConcept and invalidCharEntry are null then all characters are valid
        return true
    } else {
        //else invalid
        return false
    }
}

const createJournalEntryObject = (date, concept, entry, mood) => {
    return {
        date: date,
        concept: concept,
        entry: entry,
        mood: mood
    }
}

const filterMood = () => {
    let mood = event.target.value

    if (mood === "all") {
        renderJournalEntries(API.cachedJournalEntries)
    } else {
        let filteredEntries = API.cachedJournalEntries.filter(entry => entry.mood === mood)
        renderJournalEntries(filteredEntries)
    }
}

const deleteEntry = () => {
    let idNum = event.target.id.split("--")[1]
    
    API.deleteJournalEntry(idNum)
        .then(e => API.getJournalEntries())
        .then(renderJournalEntries)

}