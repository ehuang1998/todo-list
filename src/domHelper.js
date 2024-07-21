export default function selectLink(target) {
    
    const allMenuItems = document.querySelectorAll('.menu-item')

    allMenuItems.forEach((menuItem) => {
        menuItem.classList.remove('selected-menu');
    })

    target.classList.add('selected-menu');
}