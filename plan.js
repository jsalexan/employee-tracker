// ViewDepartments: Just a list of the departments sorted by ID

// View Roles: List of job titles, id, department, salary, sorted by id.

// View Employees: id, first name, last name, title, department, salaries, and manager, if any.

// Add Department: Prompts - Name of Dept, added to database

// Add Role: Prompts - Role name, salary, dept, added to database

// Add Employee: Prompts - Prompts - First name, Last name, role, manager, and added to database.

// Update Employee Role: Prompts - Select employee to update, new role, added to database.


function addRole() {
    db.query(`SELECT * FROM department;`, (err, res) => {
        if (err) throw err
        let departmentChoices = res.map(department => ({
           value: department.id,
           name: department.department_name,
        }));   
       inquirer
       .prompt ([ 
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
           message: "Please enter the Department for this role.",
           choices: departmentChoices,
           }
       ])
   })
      
       .then((response) => {
           db.query('INSERT INTO employee_role SET ?;'),
           {
               title: response.roleName,
               salary: response.salary,
               department_id: response.deptID,
           },
           function (err, results) {
               if (err) throw err;
               console.log('You have successfully added the role to the responsebase!');
               init();
       }
       })
   };

init();


// REnees code
function addRole() {
    let query = `SELECT * FROM department`
    db.query(query, function(err, response){
       if (err) throw err
        const departmentChoices = data.map((data)=>({
       value: data.id,
       name: data.department_name,
    }))
    })
   
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
           choices: departmentChoices,
           }
       ])
       
       .then((response) => {
           db.query('INSERT INTO employee_role SET ?;'),
           {
               title: response.roleName,
               salary: response.salary,
               department_id: response.deptID,
           },
           function (err, results) {
               if (err) throw err;
               console.log('You have successfully added the role to the responsebase!');
               init();
       }
       })
   };

init();