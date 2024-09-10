import { projectList, addProject } from './project.js';

const dropdownBtn = document.getElementById('burger-menu');
const dropdownMenu = document.getElementById('dropdown');

const projectModal = document.querySelector('#add-project-modal');
const addProjectBtn = document.querySelector('#add-project');

const submit = document.querySelector('#submit');

// Open add project modal when add button is clicked
addProjectBtn.addEventListener(
  'click',
  () => (projectModal.style.display = 'block'),
);

// Open profile drop down menu when arrow is clicked
dropdownBtn.addEventListener('click', function (event) {
  event.stopPropagation();
  toggleDropdown();
});

submit.addEventListener('click', () => {
  addProject();
  projectModal.style.display = 'none';
  displayHome();
});

// Handle document clicks when menu items are clicked and close add project modal.
document.addEventListener('click', (event) => {
  const { target } = event;

  if (
    target.classList.contains('menu-item') ||
    target.classList.contains('project-item')
  ) {
    selectLink(target);
  }

  if (dropdownMenu.classList.contains('show')) {
    toggleDropdown();
  }

  if (event.target == projectModal) {
    projectModal.style.display = 'none';
  }
});

// Function to toggle profile drop down menu optio  ns
const toggleDropdown = function () {
  dropdownMenu.classList.toggle('show');
};

//Function to select which tab you are viewing
function selectLink(target) {
  const allMenuItems = document.querySelectorAll('.menu-item, .project-item');

  allMenuItems.forEach((menuItem) => {
    menuItem.classList.remove('selected-menu');
  });

  target.classList.add('selected-menu');
}

//Function to display Home Page
function displayHome() {
  const activeContent = document.querySelector('.active-content');
  const pageTitle = document.querySelector('.main-page-title');
  const home = document.querySelector('.home');

  // Set page title and highlight the home menu
  pageTitle.textContent = 'Home';
  home.classList.add('selected-menu');

  // Clear previous content
  activeContent.innerHTML = '';

  // Create new elements
  const homePage = document.createElement('div');
  const projectName = document.createElement('div');
  const myProjects = document.createElement('div');

  homePage.setAttribute('class', 'home-page');
  myProjects.setAttribute('class', 'my-projects');

  myProjects.textContent = 'My Projects';

  // Append each project name from the projectList array
  projectList.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.textContent = project.name;
    homePage.appendChild(projectItem);
  })

  activeContent.append(myProjects);
  activeContent.append(homePage);
}


export default { selectLink, displayHome };
