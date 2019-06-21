const saveJournalEntry = () => {
    let date = document.getElementById("journalDate").value
    let concept = document.getElementById("journalConcept").value
    let entry = document.getElementById("journalEntry").value
    let mood = document.getElementById("journalMood").value
    let journalId = document.getElementById("journalId").value
    //checks if fields are empty
    if (date !== "" && concept !== "" && entry !== "") {
        //then checks if the text in concept and entry are valid characters
        if (checkCharValid(concept, entry)) {
            let journalObj = createJournalEntryObject(date, concept, entry, mood)

            //if there is no journalId, then do a post
            //if there is a journalId, then do a put
            if (journalId === "") {
                API.postJournalEntry(journalObj)
                    .then(e => API.getJournalEntries())
                    .then(entries => {
                        renderJournalEntries(entries)
                        resetValues()
                    })
            } else {
                journalObj.id = parseInt(journalId)
                API.putJournalEntry(journalObj)
                    .then(e => API.getJournalEntries())
                    .then(entries => {
                        renderJournalEntries(entries)
                        resetValues()
                    })
            }

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
    
    //part of changes made when edit button is pressed
    document.getElementById("journalId").value = ""
    document.getElementById("editHeader").hidden = true
    document.getElementById("saveEntry").innerHTML = "Record Journal Entry"
    document.getElementById("dontSave").hidden = true
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

const editEntry = () => {
    window.scrollTo(0, 0)

    let idNum = event.target.id.split("--")[1]
    let journalId = document.getElementById("journalId")
    let date = document.getElementById("journalDate")
    let concept = document.getElementById("journalConcept")
    let entry = document.getElementById("journalEntry")
    let mood = document.getElementById("journalMood")

    let saveBtn = document.getElementById("saveEntry")
    let discardBtn = document.getElementById("dontSave")
    let editHead = document.getElementById("editHeader")

    API.getSingleEntry(idNum)
        .then(oneEntry => {
            discardBtn.hidden = false
            editHead.hidden = false
            journalId.value = oneEntry.id
            date.value = oneEntry.date
            concept.value = oneEntry.concept
            entry.value = oneEntry.entry
            mood.value = oneEntry.mood
            saveBtn.innerHTML = "Update Entry"
        })




}

const filterTerm = () => {
    if (event.keyCode === 13) {
        let searchedTerm = document.getElementById("searchTerm").value.toLowerCase()
        let searchResults = []

        API.cachedJournalEntries.forEach(entry => {
            //need to create a new object wihtout the id because you can't do a .includes() or .toLowerCase() on a number
            //convert values to lower case so that in same format as searched term
            let journalObject = createJournalEntryObject(entry.date.toLowerCase(), entry.concept.toLowerCase(), entry.entry.toLowerCase(), entry.mood.toLowerCase())

            for (const value of Object.values(journalObject)) {
                if (value.includes(searchedTerm) && !searchResults.includes(entry)) {
                    //check to see if the entry is already in the searchResults array
                    //if not added it
                    searchResults.push(entry)
                }
            }
        })
        renderJournalEntries(searchResults)

    }
}