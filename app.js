const inquirer = require("inquirer");
const mysql = require('mysql2');
const { rawListeners, allowedNodeEnvironmentFlags } = require("process");

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'RatDogCatWeasel1!',
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
    db.query(`SELECT * FROM department ORDER BY department_name DESC;`, function (err, results) {
        if (err) throw err;
        console.table(results);
        init();
      });
};

function viewRoles() {
    db.query(`SELECT * FROM employee_role ORDER BY title DESC;`, function (err, results) {
        if (err) throw err;
        console.table(results);
        init();
    });
};

function viewEmployees() {
    db.query(`SELECT * FROM employee ORDER BY id DESC;`, function (err, results) {
        if (err) throw err;
        console.table(results);
        init();
    });
};

function addDepartment() {
    inquirer.prompt ([ 
        {
        type: "input",
        name: "addDept",
        message: "What is the name of the Department you would like to add?",
        }
    ])
    .then((response) => {
        db.query(`INSERT INTO department SET ?;`,
        {
            department_name: response.addDept
        },
        function (err, results) {
            if (err) throw err;
            console.log('You have successfully added the Department ${response.addDept} to the responsebase!');
            init();
    })
    })
};

    function addRole() {
        db.query(`SELECT * FROM department;`, (err, res) => {
            if (err) throw err;
            let allDepartments = res.map(department => ({name: department.department_name, value: department.id }));

        inquirer.prompt ([ 
            {
            type: "input",
            name: "roleName",
            message: "What is the job title you would like to add?",
            }, 
            {
            type: "number",
            name: "salary",
            message: "What is the salary for this role? (Please don't include commas.)"
            },
            {
            type: "rawlist",
            name: "deptID",
            message: "Please enter the Department ID number for this role.", 
            choices: allDepartments         
            },
        ])
        
        .then((response) => {
            db.query(`INSERT INTO employee_role SET ?`,
            {
                title: response.roleName,
                salary: response.salary,
                department_id: response.deptID,
            },
            function (err, results) {
                if (err) throw err;
                console.log(`You have successfully added the role of ${response.title} to the database!`);
                init();
            })
        })
    })
};

init();