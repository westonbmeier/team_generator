// file requirements
const Manager = require("./Lib/Manager.js");
const Engineer = require("./Lib/Engineer.js");
const Intern = require("./Lib/Intern.js");
const generateHTML = require("./Templates/generateHTML.js");
// npm requirements //
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// Team Array 
let employeeArr = [];

let employeeHTML = "";

// Runs program
init();

async function init() {

  let newTeamMember = "Yes";

  do {
    try {
      let { name } = await nameInput();

      let { id } = await idInput();

      let { email } = await emailInput();

      let { role } = await roleInput();

      let empInfo;

      if (role === "Manager") {

        empInfo = await officeNum();

        let manager = new Manager(name, id, email, empInfo.officeNumber);

        employeeArr.push(manager);

      } else if (role === "Engineer") {

        empInfo = await githubInput();

        let engineer = new Engineer(name, id, email, empInfo.username);

        employeeArr.push(engineer);
        
      } else if (role === "Intern") {

        empInfo = await schoolInput();

        let intern = new Intern(name, id, email, empInfo.school);

        employeeArr.push(intern);
      }
      newTeamMember = await newEmp();
      
    } catch (err) {
      console.log(err);
    }
  } while (newTeamMember.addEmployee === "Yes");

  genEmployeeArray(employeeArr);

  generate(employeeHTML);
}

// Prompt functions for employee information //
function nameInput() {

  const name = inquirer.prompt({
    type: "input",
    name: "name",
    message: "Employees First and Last name."

  });
  return name;
}


function idInput() {

  const id = inquirer.prompt({
    type: "input",
    name: "id",
    message: "Add new employees ID number."

  });
  return id;
}


function emailInput() {

  const email = inquirer.prompt({
    type: "input",
    name: "email",
    message: "New employees email address?"

  });
  return email;
}


function roleInput() {

  const role = inquirer.prompt({
    type: "list",
    name: "role",
    message: "New employees Role?",
    choices: ["Manager", "Engineer", "Intern"]

  });
  return role;
}


function officeNum() {

  const officeNumber = inquirer.prompt({
    type: "input",
    name: "officeNumber",
    message: "What is the Manager's office number?"

  });
  return officeNumber;
}


function githubInput() {

  const username = inquirer.prompt({
    type: "input",
    name: "username",
    message: "Employees Github Username?"

  });
  return username;
}


function schoolInput() {

  const school = inquirer.prompt({
    type: "input",
    name: "school",
    message: "What school does the Intern attend?"

  });
  return school;
}


function newEmp() {

  const addEmployee = inquirer.prompt([
    {
      type: "list",
      name: "addEmployee",
      message: "Add another employee?",
      choices: ["Yes", "No"]
    }
  ]);
  return addEmployee;
}

function genEmployeeArray(arr) {

  arr.forEach(function(member) {

    let employeeInfoDoc = generateHTML.generatedContent(member);

    employeeHTML += employeeInfoDoc;
  });
}

// Function that creates the team.html file using employee info //
function generate(partial) {
  
  let createHTML = generateHTML.content(partial);

  writeFileAsync("./output/team.html", createHTML);

  console.log("Successfully created html file");
}