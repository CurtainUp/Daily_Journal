const insertEntry = Object.create(null, {
  renderEntry: {
    value: (entries) => {
      document.querySelector(".entryLog").innerHTML += entries
    }
    }
  })
