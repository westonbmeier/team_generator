const Manager = require("./Lib/Manager.js");
const Engineer = require("./Lib/Engineer.js");
const Intern = require("./Lib/Intern.js");
const generateHTML = require("./Templates/generateHTML.js");

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

// Each team member will be added to this array
let teamArray = [];
let teamHTML = "";

// Runs program
initProgram();

async function initProgram() {
  let newEmployee = "Yes";
  do {
    try {
      let { name } = await nameInput();
      let { id } = await idInput();
      let { email } = await emailInput();
      let { role } = await roleInput();

      let employeeData;
      if (role === "Manager") {
        employeeData = await officeNumInput();
        let manager = new Manager(name, id, email, employeeData.officeNumber);
        teamArray.push(manager);
      } else if (role === "Engineer") {
        employeeData = await githubInput();
        let engineer = new Engineer(name, id, email, employeeData.username);
        teamArray.push(engineer);
      } else if (role === "Intern") {
        employeeData = await schoolInput();
        let intern = new Intern(name, id, email, employeeData.school);
        teamArray.push(intern);
      }
      newEmployee = await addEmployee();
      
    } catch (err) {
      console.log(err);
    }
  } while (newEmployee.plusEmployee === "Yes");

  iterateTeamArr(teamArray);

  createPage(teamHTML);
}

// Asks for employees first and last name
function nameInput() {
  const name = inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please add new employees First and Last name."
  });
  return name;
}

// Asks to input the employees ID number
function idInput() {
  const id = inquirer.prompt({
    type: "input",
    name: "id",
    message: "Designate new employees ID number."
  });
  return id;
}

// Asks for the employees email
function emailInput() {
  const email = inquirer.prompt({
    type: "input",
    name: "email",
    message: "What is the new employees email address?"
  });
  return email;
}

// Asks for the role of the employee
function roleInput() {
  const role = inquirer.prompt({
    type: "list",
    name: "role",
    message: "What is the employees First and Last name?",
    choices: ["Manager", "Engineer", "Intern"]
  });
  return role;
}

// Asks for the managers office number
function officeNumInput() {
  const officeNumber = inquirer.prompt({
    type: "input",
    name: "officeNumber",
    message: "What is the Manager's office number?"
  });
  return officeNumber;
}

// Asks the engineer for their github username
function githubInput() {
  const username = inquirer.prompt({
    type: "input",
    name: "username",
    message: "What is the employees Github Username?"
  });
  return username;
}

// Asks the user what school the intern attends
function schoolInput() {
  const school = inquirer.prompt({
    type: "input",
    name: "school",
    message: "What school does the Intern attend?"
  });
  return school;
}

// add another employee prompt
function addEmployee() {
  const plusEmployee = inquirer.prompt([
    {
      type: "list",
      name: "plusEmployee",
      message: "Add another employee?",
      choices: ["Yes", "No"]
    }
  ]);
  return plusEmployee;
}

// ForEach loop iterates through team members and adds them to a html card
function iterateTeamArr(arr) {
  arr.forEach(function(member) {
    let employeeCard = generateHTML.dynamicContent(member);
    teamHTML += employeeCard;
  });
}

// Function create team.html file with content of employees
function createPage(partial) {
  let createHTML = generateHTML.mainContent(partial);

  writeFileAsync("./output/team.html", createHTML);

  console.log("Successfully created html file");
}