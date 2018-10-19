let entries = document.querySelector(".entryLog")

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (page) => {
  page.forEach((log) => {
    return entries.innerHTML +=
    `<div class="entry">
    <h3>${log.date}</h3>
    <h4>${log.concept}</h4>
    <p>${log.entry}</p>
    <p>Mood: ${log.mood}</p>
    </div>`    
  })
}

const journalEntries = [
  {
    date: "10/1/2018",
    concept: "Welcome to NSS",
    entry: "We saw Cohort 27's capstones. Hope I can figure out a fun project",
    mood: "Happy Happy Joy Joy"
  },
  {
    date: "10/4/2018",
    concept: "Linux Subsystem",
    entry: "Today we installed our Linux shell and mounted our Windows drive. My brain hurts.",
    mood: "Meh"
  },
  {
    date: "10/19/2018",
    concept: "Fetching from APIs",
    entry: "I think I get it. I just feel like I've forgotten everything up to this point. First cry on campus!",
    mood: "Discouraged"
}
]

// Invoke the render function
renderJournalEntries(journalEntries)