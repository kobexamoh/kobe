// variable declaration
let hamburgerMenu = document.querySelector('#hamburger');
let cancelMenu = document.querySelector("#close"); // todo: think of a better name for this variable

// event listener(s)
hamburgerMenu.addEventListener('click', openMenu);
cancelMenu.addEventListener('click', closeMenu);

// function(s)
function openMenu(evt) {
    
    // pseudocode for the menu is as follows:
    // when the hamburger menu is tapped, it should
    // become the 'X' menu. That is, it should disappear,
    // and the 'X' should appear.
    hamburgerMenu.classList.add('hidden');
    cancelMenu.classList.remove('hidden');
    evt.preventDefault();
}

function closeMenu(evt) {
    // pseudocode is as follows:
    // when the 'X' is tapped, it should disappear
    // and the hamburger menu should reappear
    cancelMenu.classList.add('hidden');
    hamburgerMenu.classList.remove('hidden');
    evt.preventDefault();
}


