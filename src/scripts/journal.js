let entries = document.querySelector(".entryLog")

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
fetch("http://localhost:3000/entries") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(parsedEntries => {
        console.table(parsedEntries);
        debugger;
          parsedEntries.forEach((log) => {
            return entries.innerHTML +=
            `<div class="entry">
            <h3>${log.date}</h3>
            <h4>${log.concept}</h4>
            <p>${log.entry}</p>
            <p>Mood: ${log.mood}</p>
            </div>`    
          })
        }
      )

