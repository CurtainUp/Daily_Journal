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