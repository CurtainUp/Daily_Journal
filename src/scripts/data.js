const API = Object.create(null, {
  getJournalEntries: {
    value: () => {
      return fetch("http://localhost:3000/entries")
        .then(response => response.json())
    }
  }
})
