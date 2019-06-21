import { makeJournalEntryComponent } from "./entryComponent.js"
import { eventHandler} from "./entryEvents.js"
import {helperFunction} from "./helper.js"

const domManager = {

    renderJournalEntries(entries) {
        let entryEl = document.querySelector(".entryLog")
        entryEl.innerHTML = ""
        entries.forEach(entry => {
            entryEl.innerHTML += makeJournalEntryComponent(entry)
        })

        document.querySelectorAll(".deleteBtn").forEach(button => {
            button.addEventListener("click", eventHandler.deleteEntry)
        })
        document.querySelectorAll(".editBtn").forEach(button => {
            button.addEventListener("click", eventHandler.editEntry)
        })
    },
    addFormEventListeners () {
        document.querySelector("#saveEntry").addEventListener("click", eventHandler.saveJournalEntry)

        document.getElementsByName("mood").forEach(moodInput => {
            moodInput.addEventListener("click", eventHandler.filterMood)
        })

        document.getElementById("dontSave").addEventListener("click", helperFunction.resetValues)

        document.getElementById("searchTerm").addEventListener("keypress", eventHandler.filterTerm)
    }
}
export { domManager }