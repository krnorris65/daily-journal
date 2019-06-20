const API = {
    cachedJournalEntries: [],
    getJournalEntries() {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
            .then(entries => this.cachedJournalEntries = entries)
    },
    getSingleEntry(id) {
        return fetch(`http://localhost:3000/entries/${id}`)
            .then(response => response.json())
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
    },
    putJournalEntry(updatedEntry){
        return fetch(`http://localhost:3000/entries/${updatedEntry.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedEntry)
        })
            .then(data => data.json())
    }
}