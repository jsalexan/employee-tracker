const inquirer = require("inquirer");
const mysql = require('mysql2');
const { rawListeners, allowedNodeEnvironmentFlags } = require("process");

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

  function init() {
    inquirer.prompt ([ 
        {
            type: "rawlist",
            name: "menu",
            message: "Welcome to Employee Tracker! What would you like to do?",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Exit"]
        }
    ])

    .then(function(answers){
        switch (answers.menu) {
            case "View all departments":
                viewDepartments();
                break;
            case "View all roles":
                viewRoles();
                break;
            case "View all employees":
                viewEmployees();
                break;
            case "Add a department":
                addDepartment();
                break;
            case "Add a role":
                addRole();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Update an employee role":
                updateRole();
                break;
            case "Exit":
                exit();  
                // TODO: Decide what this will be
        }
    })
  }; 


function viewDepartments() {
    db.query('SELECT * FROM departments ORDER BY department_id DESC;', function (err, results) {
        // TODO: Does this go in back ticks or quotes?
        if (err) throw err;
        console.log(results);
        // TODO: What does console.table add to this, if anything? Research...
        init();
      });
};

function viewRoles() {
    db.query('SELECT * FROM employee_role ORDER BY id DESC;', function (err, results) {
        if (err) throw err;
        console.log(results);
        init();
    });
};

function viewEmployees() {
    db.query('SELECT * FROM employee ORDER BY id DESC;', function (err, results) {
        if (err) throw err;
        console.log(results);
        init();
    });
};

