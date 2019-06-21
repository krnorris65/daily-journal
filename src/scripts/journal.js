import {domManager} from "./entriesDOM.js"
import {API} from "./data.js"
// import { eventHandler} from "./entryEvents.js"


domManager.addFormEventListeners()

API.getJournalEntries().then(domManager.renderJournalEntries)

// document.querySelector("#saveEntry").addEventListener("click", eventHandler.saveJournalEntry)

// document.getElementsByName("mood").forEach(moodInput => {
//     moodInput.addEventListener("click", eventHandler.filterMood)
// })

// document.getElementById("dontSave").addEventListener("click", eventHandler.resetValues)

// document.getElementById("searchTerm").addEventListener("keypress", eventHandler.filterTerm)