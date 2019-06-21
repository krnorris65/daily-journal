const helperFunction = {
    resetValues() {
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
    },
    checkCharValid(conceptText, entryText) {
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
    },
    createJournalEntryObject(date, concept, entry, mood) {
        return {
            date: date,
            concept: concept,
            entry: entry,
            mood: mood
        }
    }
}

export {helperFunction}