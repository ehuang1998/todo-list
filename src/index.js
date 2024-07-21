import './styles.css';
import selectLink from './domHelper';

const home = document.querySelector('.home');

home.classList.add('selected-menu');

document.addEventListener('click', (event) => {
    const { target } = event;
    console.log(target);

    if (target.classList.contains('menu-item')) {
        selectLink(target);
    }
})