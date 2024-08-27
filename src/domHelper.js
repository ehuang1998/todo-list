import projectList from './project.js'

const projectModal = document.querySelector('#modal');
const addProjectBtn = document.querySelector('#add-project');
const submitBtn = docment.querySelector('#submit');
const btnClose = document.getElementsByClassName("btn-close")[0];

addProjectBtn.addEventListener('click', () => projectModal.style.display = "block");

//Function to select which tab you are viewing
function selectLink(target) {
    
    const allMenuItems = document.querySelectorAll('.menu-item, .project-item');

    console.log(allMenuItems);

    allMenuItems.forEach((menuItem) => {
        menuItem.classList.remove('selected-menu');
    })

    target.classList.add('selected-menu');
}

//Function to display Home Page
function displayHome() {

    const activeContent = document.querySelector('.active-content');
    const pageTitle = document.querySelector('.main-page-title');
    const home = document.querySelector('.home');

    pageTitle.textContent = 'Home';
    home.classList.add('selected-menu');

    const homePage = document.createElement('div');
    const projectName = document.createElement('div');
    const myProjects = document.createElement('div');

    homePage.setAttribute('class', 'home-page');
    myProjects.setAttribute('class', 'my-projects');

    myProjects.textContent = "My Projects"
    homePage.textContent = projectList[0].name;
    console.log(projectList[0].name);    

    activeContent.append(myProjects);
    activeContent.append(homePage);

}

export default {selectLink, displayHome};
