// Now, you could attach the event listeners to each individually. You could also use the document.getElementsByName() method, and a forEach() to add them more dynamically.

// To get the selected mood, you need to look at the value property of the radio button that was clicked. When you click on any DOM element, that element becomes the target of the click event. You can access the element, and its value with the code below.

// radioButton.addEventListener("click", event => {
//     const mood = event.target.value
// })

let moodFilterListener = () => {
  let moodRadios = document.getElementsByName("mood")
  moodRadios.forEach(radio => {
    radio.addEventListener("click", (e) =>
    moodFetch(e.target.id))
  })
}

// moodFetch function