// import {makeJournalEntryComponent} from "./entryComponent.js"

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

const addFormEventListeners = () => {
    document.querySelector("#saveEntry").addEventListener("click", saveJournalEntry)

    document.getElementsByName("mood").forEach(moodInput => {
        moodInput.addEventListener("click", filterMood)
    })

    document.getElementById("dontSave").addEventListener("click", resetValues)

    document.getElementById("searchTerm").addEventListener("keypress", filterTerm)
}

// export {renderJournalEntries}