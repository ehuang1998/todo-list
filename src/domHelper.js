import projectList from './project.js'

function selectLink(target) {
    
    const allMenuItems = document.querySelectorAll('.menu-item')

    allMenuItems.forEach((menuItem) => {
        menuItem.classList.remove('selected-menu');
    })

    target.classList.add('selected-menu');
}

function displayHome() {

    const activeContent = document.querySelector('.active-content');
    const home = document.querySelector('.home');
    const pageTitle = document.querySelector('.main-page-title');


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


    homePage.append(myProjects);
    activeContent.append(homePage);

}

export default {selectLink, displayHome};
