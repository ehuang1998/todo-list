let projectList = [];

projectList = [
    {
        id: 1,
      name: 'User Data Collection Improvements',
      tasks: [
        {
          description: 'Refactor data pipeline',
          date: '2024-07-11',
          priority: 'low',
          projectIndex: 0,
          taskIndex: 0,
          completed: false
        }
      ]
    },
    {
        id: 2,
      name: 'Shop Drawing Web Application',
      tasks: [
        {
          title: 'Shop Drawing Web Application',
          date: '2014-07-12',
          priority: 'high',
          projectIndex: 1,
          taskIndex: 0,
          completed: false
        }
      ]
    },
];

class Project {

    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.tasks = [];
    }
}

function createProject(id, name) {
    const project = new Project(id, name);
    projectList.push(project);
}

function editProject(id, name) {
    const project = projectList.find(proj => proj.id === id);
    if (project) {
            project.name = name;
    }
}

function deleteProject(id) {
    if (id > -1) {
        projectList.splice(id-1, 1);
    }
}   


export default projectList;
