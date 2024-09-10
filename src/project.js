let projectList = [];

projectList = [
  {
    id: 1,
    name: "User Data Collection Improvements",
    tasks: [
      {
        description: "Refactor data pipeline",
        date: "2024-07-11",
        priority: "low",
        projectIndex: 0,
        taskIndex: 0,
        completed: false,
      },
    ],
  },
  {
    id: 2,
    name: "Shop Drawing Web Application",
    tasks: [
      {
        title: "Shop Drawing Web Application",
        date: "2014-07-12",
        priority: "high",
        projectIndex: 1,
        taskIndex: 0,
        completed: false,
      },
    ],
  },
];

class Project {
  constructor(name, startDate, endDate) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

function addProject() {  

  event.preventDefault(); //Prevent error from submitting to backend server
  const title = document.getElementById('title').value;
  const startDate = document.getElementById('start').value;
  const endDate = document.getElementById('end').value;

  const project = new Project(title, startDate, endDate);
  projectList.push(project);
  console.log(projectList);
  
}

function editProject(id, name) {
  const project = projectList.find((proj) => proj.id === id);
  if (project) {
    project.name = name;
  }
}

function deleteProject(id) {
  if (id > -1) {
    projectList.splice(id - 1, 1);
  }
}

export { projectList, addProject };
