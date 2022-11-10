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
    console.log(" "),
    console.log(" "),
    console.log("-----------------------------"),
    console.log(`Welcome to Employee Tracker!`),
    console.log("-----------------------------"),
    console.log(" "),
    console.log(" "),
  
  );

  function init() {
    inquirer.prompt ([ 
        {
            type: "rawlist",
            name: "menu",
            message: "What would you like to do?",
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
                console.log(" ");
                console.log(" ");
                console.log("-----------------------------------------------");
                console.log("Thank you for using Employee Tracker! Goodbye!")  
                console.log("-----------------------------------------------");
                console.log(" ");
                console.log(" ");       
        }
    })
  }; 


function viewDepartments() {
    db.query(`SELECT * FROM department ORDER BY department.id ASC;`, function (err, results) {
        if (err) throw err;
        console.table(results);
        init();
      });
};

function viewRoles() {
    db.query(`SELECT * FROM employee_role ORDER BY employee_role.id ASC;`, function (err, results) {
        if (err) throw err;
        console.table(results);
        init();
    });
};

function viewEmployees() {
    const employees = `SELECT employee.first_name AS FirstName, employee.last_name AS LastName, employee_role.title AS Role, department.department_name AS Department, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN employee_role ON employee_role.id = employee.role_id INNER JOIN department ON department.id = employee_role.department_id LEFT JOIN employee e on employee.manager_id = e.id;`

    db.query(employees, function (err, results) {
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

function addEmployee() {
    db.query(`SELECT * FROM employee_role;`, (err, res) => {
        if (err) throw err;
        let allRoles = res.map(employee_role => ({name: employee_role.title, value: employee_role.id }));
    

    db.query(`SELECT * FROM employee;`, (err, res) => {
        if (err) throw err;
        let allEmployees = res.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.id }));

    inquirer.prompt ([ 
        {
        type: "input",
        name: "firstName",
        message: "What is the first name of your new employee?",
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the last name of your new employee?",
        }, 
        {
        type: "rawlist",
        name: "em_role",
        message: "What is the job title for this employee?",
        choices: allRoles
        },
        {
        type: "rawlist",
        name: "em_manager",
        message: "Please select the Manager for this role.", 
        choices: allEmployees         
        },
    ])
    
    .then((response) => {
        db.query(`INSERT INTO employee SET ?`,
        {
            first_name: response.firstName,
            last_name: response.lastName,
            role_id: response.em_role,
            manager_id: response.em_manager
        },
        function (err, results) {
            if (err) throw err;
            console.log(`You have successfully added your new employee to the database!`);
            init();
        })
    })
})
})
};

function updateRole() {
    db.query(`SELECT * FROM employee_role;`, (err, res) => {
        if (err) throw err;
        let allRoles = res.map(employee_role => ({name: employee_role.title, value: employee_role.id }));
    
    db.query(`SELECT * FROM employee;`, (err, res) => {
        if (err) throw err;
        let allEmployees = res.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.id }));
    
        inquirer.prompt ([ 
            {
            type: "rawlist",
            name: "employees",
            message: "Which employee would you like to update?", 
            choices: allEmployees         
            },
            {
            type: "rawlist",
            name: "roles",
            message: "Please select the new job title for this employee.", 
            choices: allRoles        
            },
        ])
        .then((response) => {
            db.query(`UPDATE employee SET ? WHERE ?`,
            {
                role_id: response.roles,
                id: response.employees,             
            },
            function (err, results) {
                if (err) throw err;
                console.log(`You have successfully updated your employee role in the database!`);
                init();
            })
        })
    })
    })
    };

init();