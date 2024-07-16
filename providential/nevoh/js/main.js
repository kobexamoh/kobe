// initialize and declare the variable(s)
var hamburgerOpen = document.querySelector('#hamburger-open');
var hamburgerClose = document.querySelector('#hamburger-close');
var mobileNavigationMenu = document.querySelector('.navigation-block');

// add event listeners
hamburgerOpen.addEventListener('click', menuOpen);
hamburgerClose.addEventListener('click', menuClose);

// create the functions
function menuOpen() {
    console.log('working!');

    // hide the 'hamburger-open' menu icon
    hamburgerOpen.style.display = 'none';

    // reveal the 'hamburger-close' menu icon
    hamburgerClose.style.display = 'block';

    // reveal the mobile navigation
    mobileNavigationMenu.style.display = 'block';
}

function menuClose() {
    console.log('working!');

    // hide the 'hamburger-close' menu icon
    hamburgerClose.style.display = 'none';

    // reveal the 'hamburger-open' menu icon
    hamburgerOpen.style.display = 'block';

    // hide the mobile navigation
    mobileNavigationMenu.style.display = 'none';
}