const journalEntries = Object.create(null, {
  createJournalComponent: {
    value: (entry) => {
      // create div in entry log with id of entry.id
      let entryDiv = document.createElement("div")
      entryDiv.className = `entry${entry.id}`
      // create h3, give it value, append to div
      let entryDate = document.createElement("h3")
      entryDate.textContent += `${entry.date}`
      entryDiv.appendChild(entryDate)
      // create h4, give it value, append to div
      let entryConcepts = document.createElement("h4")
      entryConcepts.textContent += `${entry.concepts}`
      entryDiv.appendChild(entryConcepts)
      // create p, give it value, append to div
      let entryContent = document.createElement("p")
      entryContent.textContent += `${entry.entry}`
      entryDiv.appendChild(entryContent)
      // create p, give it value, append to div
      let entryMood = document.createElement("p")
      entryMood.textContent += `Mood: ${entry.mood}`
      entryDiv.appendChild(entryMood)
      return entryDiv
    }
  }
})


