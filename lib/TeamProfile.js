const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const generateTeamRoster = require('../src/generateTeamRoster');

class TeamProfile {
  employees = [];
  employeePrompts = [
    {
      type: 'list',
      name: 'role',
      message: "What type of employee would you like to add?",
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: "Name:",
      validate: nameInput => {
        if (nameInput.trim() !== '') {
          return true;
        }
        return 'Please enter a name.';
      }
    },
    {
      type: 'input',
      name: 'employeeId',
      message: "Employee ID:",
      validate: employeeIdInput => {
        if (employeeIdInput.trim() !== '') {
          return true;
        }
        return 'Please enter an Employee ID.';
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Email address:",
      validate: emailInput => {
        if (emailInput.trim() !== '' && emailInput.indexOf('@') !== -1) {
          return true;
        }
        return 'Please enter a valid email address.';
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Office number:",
      validate: officeNumberInput => {
        if (officeNumberInput.trim() !== '') {
          return true;
        }
        return 'Please enter an office number.';
      },
      when(answers) {
        return answers.role === 'Manager';
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "GitHub username:",
      when(answers) {
        return answers.role === 'Engineer';
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "Intern's school:",
      when(answers) {
        return answers.role === 'Intern';
      }
    },
    {
      type: 'list',
      name: 'whatNext',
      message: "What would you like to do next?",
      choices: ['Add a team member', 'Complete team'],
      default: 'Add a team member'
    }
  ];

  constructor() {
    console.log("\nLet's start building the team.\n");
    this.addManager();
  }

  addManager() {
    console.log('\nTeam Manager Name');
    console.log('-----------------');
    inquirer.prompt(this.employeePrompts, { role: 'Manager' })
    .then(answers => {
      const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
      this.employees.push(manager);

      if (answers.whatNext === 'Add a team member') {
        this.addTeamMember();
      } else {
        this.generateProfile();
      }
    });
  }

  addTeamMember() {
    console.log('\nTeam Member #' + this.employees.length);
    console.log('--------------');
    inquirer.prompt(this.employeePrompts)
    .then(answers => {
      if (answers.role === 'Engineer') {
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
        this.employees.push(engineer);

      } else if (answers.role === 'Intern') {
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        this.employees.push(intern);
      }

      if (answers.whatNext === 'Add a team member') {
        this.addTeamMember();
      } else {
        this.generateProfile();
      }
    });
    return;
  }

  generateProfile() {
    const teamHtml = generateTeamRoster(this.employees);
    fs.writeFileSync('./dist/index.html', teamHtml);
    fs.copyFileSync('./src/style.css', './dist/style.css');

    console.log("\nTeam profile complete. Please check 'dist' folder for HTML.\n")
  }
}

module.exports = TeamProfile;