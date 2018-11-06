/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

API.getJournalEntries()
    .then(entries => {
        entries.forEach((entry) => {
            const htmlEntry = htmlJournalEntries.createJournalComponent(entry)
            insertEntry.renderEntry(htmlEntry)
        })
    })

// In your main JavaScript module (journal.js) add a click event listener to
// the Record Journal Entry button at the bottom of your form. When the user
// clicks the button, you need to create a new entry in your API.
// The HTTP method that you use to create resources is POST. Guidance on
// syntax is provided below.

// Empty entry object (this needs to eventually be a class. This is absurd)
const entry = {
    date: "",
    concepts: "",
    entry: "",
    mood: ""
}

// Function that creates journal entry object
const createEntry = () => {
    const journalEntryObject = Object.create(entry)

    journalEntryObject.date = document.querySelector("#journalDate").value
    journalEntryObject.concepts = document.querySelector("#concepts").value
    journalEntryObject.entry = document.querySelector("#journalEntry").value
    let currentMood = document.querySelector("#currentMood")
    journalEntryObject.mood = currentMood.options[currentMood.selectedIndex].value

    return journalEntryObject
}

// Function that posts the user's entry to the database.
const saveEntry = (entry) => {
    fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
}

// Event listener that calls the entry save function
document.querySelector(".recordButton").addEventListener("click", () => {
    const newEntry = createEntry()
    saveEntry(newEntry)
    console.log("Entry Saved")
})