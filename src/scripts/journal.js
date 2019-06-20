API.getJournalEntries().then(renderJournalEntries)

document.querySelector("#saveEntry").addEventListener("click", () => {
    let date = document.getElementById("journalDate").value
    let concept = document.getElementById("journalConcept").value
    let entry = document.getElementById("journalEntry").value
    let mood = document.getElementById("journalMood").value

    //checks if fields are empty
    if (date !== "" && concept !== "" && entry !== "") {
        //then checks if the text in concept and entry are valid characters
        if(checkCharValid(concept, entry)){
            let journalObj = createJournalEntryObject(date, concept, entry, mood)
            API.postJournalEntry(journalObj)
            .then(API.getJournalEntries)
            .then(renderJournalEntries)
        } else{
            alert("Invalid Character Found.") 
        }
    }

})

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
