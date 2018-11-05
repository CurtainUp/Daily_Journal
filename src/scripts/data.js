const API = Object.create(null, {
  getJournalEntries: {
    value: () => {
      return fetch("http://localhost:8088/entries")
        .then(response => response.json())
    }
  }
})
