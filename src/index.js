import './styles.css';
import dom from './domHelper';
import './project.js';

dom.displayHome();

document.addEventListener('click', (event) => {
    const { target } = event;

    if (target.classList.contains('menu-item') || target.classList.contains('project-item')) {
        dom.selectLink(target);
    }

})