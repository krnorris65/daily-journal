API.getJournalEntries().then(renderJournalEntries)

document.querySelector("#saveEntry").addEventListener("click", () => {
    let entryToSave = {
        date: document.getElementById("journalDate").value,
        concept: document.getElementById("journalConcept").value,
        entry: document.getElementById("journalEntry").value,
        mood: document.getElementById("journalMood").value
    }

    //check to see if all fields have been completed
    if(checkAllComplete(entryToSave)){
        //check to see if the characters are valid
        if(checkCharValid(entryToSave)){
            console.log("not empty & valid")
        }else{
            alert("Invalid Character(s)")
            
        }
    }
})

const checkCharValid = (journalObj) => {

    // ^! means if the characters don't match the following
    let allowedChar = /[^!A-Z0-9a-z(){}:;. ]/g;

    let invalidCharConcept = journalObj.concept.match(allowedChar)
    let invalidCharEntry = journalObj.entry.match(allowedChar)

    if (invalidCharConcept === null && invalidCharEntry === null) {
        //if invalidCharConcept and invalidCharEntry are null then all characters are valid
        return true
    } else {
        //else invalid
        return false
    }
}

const checkAllComplete = (journalObj) => {
    if (journalObj.date !== "" && journalObj.concept !== "" && journalObj.entry !== "") {
        //all fields do not equal an empty string and are all completed
        return true
    } else {
        //else one or more fields are empty and not completed
        return false
    }
}