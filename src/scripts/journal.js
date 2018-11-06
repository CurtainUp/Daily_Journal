/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

API.getJournalEntries()
    .then(entries => {
        entries.forEach((entry) => {
            const singleEntry = journalEntries.createJournalComponent(entry)
            insertEntry.renderEntry(singleEntry)
        })
    })

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
document.querySelector(".recordButton").addEventListener("click", (event) => {
    event.preventDefault
    // Checks form validation for required fields
    const form = document.getElementsByTagName('form')[0]
    if (form.checkValidity() === false) {
        alert("Please complete all required fields")
    } else {
        const newEntry = createEntry()
        saveEntry(newEntry)
        alert("Entry Saved!")
    }
})