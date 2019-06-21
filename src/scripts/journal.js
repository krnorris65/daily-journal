import {domManager} from "./entriesDOM.js"
import {API} from "./data.js"
// import { eventHandler} from "./entryEvents.js"


domManager.renderMoodOptions()
domManager.addFormEventListeners()

API.getJournalEntries().then(domManager.renderJournalEntries)
