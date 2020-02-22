const fs = require('fs');
const test = require('jest');
const inquirer = require('inquirer');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const managers = [];
const engineers = [];
const interns = [];
const ids = [];
const officeNumbers = [];
var add = true;
var cardPlacement = '';
var endCap = `</div></body></html>`;

newMemberPrompt();

async function newTeamMember() {
    if(add === true) {
        inquirer.prompt([
            {
                type: 'list',
                message: 'Team member title',
                name: 'title',
                choices: ['Intern', 'Engineer', 'Manager']
            }
        ]).then(async function(a){
            if (a.title === 'Manager') {
                await newManager();
                return newMemberPrompt();
            } else if (a.title === 'Engineer') {
                await newEngineer()
                return newMemberPrompt();
            } else if (a.title === 'Intern') {
                await newIntern();
                return newMemberPrompt();
            }
            
        });
    } else {
        buildTeam();
    }
}

async function newManager() {
    await inquirer.prompt([
        {
            type: 'input',
            message: 'Enter team member name',
            name: 'name',
            validate: function(input) {
                if(isNaN(parseInt(input)) === true && input !== '') {
                    return true;
                } else {
                    return 'Please enter name';
                }
            } 
        },
        {
            type: 'input',
            message: 'Enter team member ID',
            name: 'id',
            validate: function(input) {
                if(Number.isInteger(parseInt(input)) && ids.indexOf(input) === -1) {
                    ids.push(input);
                    return true;
                } else {
                    return 'Please enter a valid unused id';
                }
            }
        },
        {
            type: 'input',
            message: 'Enter team member Email',
            name: 'email',
            validate: function(input) {
                if(input.includes('@') && input.includes('.')) {
                    return true;
                } else {
                    return 'Please enter a valid email address';
                }
            }
        },
        {
            type: 'input',
            message: 'Enter team member office number',
            name: 'officeNumber',
            validate: function(input) {
                if(Number.isInteger(parseInt(input)) && officeNumbers.indexOf(input) === -1) {
                    officeNumbers.push(input);
                    return true;
                } else {
                    return 'Please enter a valid unused office number';
                }
            }
        }
    ]).then(async function(a){
        var newManager = await new Manager(a.name, a.id, a.email, a.officeNumber);
        managers.push(newManager);
        return
    });
}

async function newEngineer() {
    await inquirer.prompt([
        {
            type: 'input',
            message: 'Enter team member name',
            name: 'name',
            validate: function(input) {
                if(isNaN(parseInt(input)) === true && input !== '') {
                    return true;
                } else {
                    return 'Please enter name';
                }
            } 
        },
        {
            type: 'input',
            message: 'Enter team member ID',
            name: 'id',
            validate: function(input) {
                if(Number.isInteger(parseInt(input)) && ids.indexOf(input) === -1) {
                    ids.push(input);
                    return true;
                } else {
                    return 'Please enter a valid unused id';
                }
            }
        },
        {
            type: 'input',
            message: 'Enter team member Email',
            name: 'email',
            validate: function(input) {
                if(input.includes('@') && input.includes('.')) {
                    return true;
                } else {
                    return 'Please enter a valid email address';
                }
            }
        },
        {
            type: 'input',
            message: 'Enter team member github username',
            name: 'github',
            validate: function(input) {
                if(isNaN(parseInt(input)) === true && input !== '') {
                    return true;
                } else {
                    return 'Please enter github username';
                }
            } 
        }
    ]).then(function(a){
        var newEngineer = new Engineer(a.name, a.id, a.email, a.github);
        engineers.push(newEngineer)
        return
    });
}

async function newIntern() {
    await inquirer.prompt([
        {
            type: 'input',
            message: 'Enter team member name',
            name: 'name',
            validate: function(input) {
                if(isNaN(parseInt(input)) === true && input !== '') {
                    return true;
                } else {
                    return 'Please enter name';
                }
            } 
        },
        {
            type: 'input',
            message: 'Enter team member ID',
            name: 'id',
            validate: function(input) {
                if(Number.isInteger(parseInt(input)) && ids.indexOf(input) === -1) {
                    ids.push(input);
                    return true;
                } else {
                    return 'Please enter a valid unused id';
                }
            }
        },
        {
            type: 'input',
            message: 'Enter team member Email',
            name: 'email',
            validate: function(input) {
                if(input.includes('@') && input.includes('.')) {
                    return true;
                } else {
                    return 'Please enter a valid email address'
                }
            }
        },
        {
            type: 'input',
            message: 'Enter team member school name',
            name: 'school',
            validate: function(input) {
                if(isNaN(parseInt(input)) === true && input !== '') {
                    return true;
                } else {
                    return 'Please enter name of school';
                }
            } 
        }
    ]).then(function(a){
        var newIntern = new Intern(a.name, a.id, a.email, a.school);
        interns.push(newIntern)
        return
    });
}

async function newMemberPrompt() {
    await inquirer.prompt({
        type: 'list',
        message: 'Would you like to add a team member?',
        name: 'teamMember',
        choices: ['yes', 'no']
    }).then(function(a) {
        if(a.teamMember === 'yes'){
            add = true;
            return newTeamMember()
        } else {
            add = false
            return newTeamMember()
        }
    });
}

function buildTeam() {
    var HTML= `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <!--Font Awesome-->
        <script src="https://kit.fontawesome.com/d2599b4445.js" crossorigin="anonymous"></script>
        <title>Team</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-1 text-center">Your Team</h1>
            </div>
        </div>
        <br>
        <div class="container">
            <div class="row team-roster">
            <div>${cardPlacement}</div>`;

    managers.forEach(m => 
        HTML += (`<div class="col-3 mt-2">
        <div class="card">
            <div class="card-header bg-primary">
                <h4 class="manager-name">${m.name}</h4>
                <h4><i class="fas fa-mug-hot"> Manager</i></h4>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item ID">${m.id}</li>
                    <li class="list-group-item email">${m.email}</li>
                    <li class="list-group-item office-number">${m.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>`));

    engineers.forEach(e =>
        HTML += (`<div class="col-3 mt-2">
        <div class="card">
            <div class="card-header bg-primary">
                <h4 class="engineer-name">${e.name}</h4>
                <h4><i class="fas fa-cog"></i> Engineer</h4>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item ID">${e.id}</li>
                    <li class="list-group-item email">${e.email}</li>
                    <li class="list-group-item github">${e.github}</li>
                </ul>
            </div>
        </div>
    </div>`));

    interns.forEach(i => 
        HTML += (`<div class="col-3 mt-2">
        <div class="card">
            <div class="card-header bg-primary">
                <h4 class="intern-name">${i.name}</h4>
                <h4><i class="fas fa-graduation-cap"></i> Intern</h4>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item ID">${i.id}</li>
                    <li class="list-group-item email">${i.email}</li>
                    <li class="list-group-item school">${i.school}</li>
                </ul>
            </div>
        </div>
    </div>`));

    HTML += endCap;

    fs.writeFile('./output/index.html', HTML, function(err) {
        if (err) console.log('failed');
        console.log('Success');
    });
}