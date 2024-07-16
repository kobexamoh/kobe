/* On click, ease in (with CSS) what has been hidden */
// Variable declaration
let clickMe = document.querySelector('.click-me')
let showcased = document.querySelector('.just-for-fun')

// Event listener and function
clickMe.addEventListener('click', () => {
    // remove the 'hidden' class and leave the animation class 'toggled'
    showcased.classList.toggle('hidden')
})