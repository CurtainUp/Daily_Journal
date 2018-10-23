const htmlJournalEntries = Object.create(null, {
  createJournalComponent: {
    value: (entry) => {
      return `
    <div class="entry">
    <h3>${entry.date}</h3>
    <h4>${entry.concept}</h4>
    <p>${entry.entry}</p>
    <p>Mood: ${entry.mood}</p>
    </div>`
    }
  }
})