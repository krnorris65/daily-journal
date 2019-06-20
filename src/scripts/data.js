const API = {
    cachedJournalEntries: [],
    getJournalEntries() {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
            .then(entries => this.cachedJournalEntries = entries)
    },
    postJournalEntry(newJournalEntry) {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
            .then(data => data.json())
    },
    deleteJournalEntry(journalId){
        return fetch(`http://localhost:3000/entries/${journalId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => data.json())
    }
}