const insertEntry = Object.create(null, {
  renderEntry: {
    value: (entry) => {
      document.querySelector(".entryLog").appendChild(entry)
    }
    }
  })
