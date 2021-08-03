// Accessing all <div class='panel'>
const panels = document.querySelectorAll('.panel');
// Iterate through each div
panels.forEach(panel => {
  // Listen to a click & execute the code block
  panel.addEventListener('click', () => {
    // Call this function
    removeActiveClasses();
    // Add an active class to the div that was clicked-on
    panel.classList.add('active');
  })
})
// Function that removes the active class on the clicked panel
function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
}