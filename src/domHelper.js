import './project.js'
function selectLink(target) {
    
    const allMenuItems = document.querySelectorAll('.menu-item')

    allMenuItems.forEach((menuItem) => {
        menuItem.classList.remove('selected-menu');
    })

    target.classList.add('selected-menu');
}

function displayHome() {

    const home = document.querySelector('.home');

    home.classList.add('selected-menu');


}

export default {selectLink, displayHome};
