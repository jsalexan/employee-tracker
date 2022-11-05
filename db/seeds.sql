INSERT INTO department (department_name)
VALUES ("Marketing"),
("Development"),
("Production"),
("Artistic"),
("Education"),
("Finance");

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Artistic Director", 250000.00, 4),
("Marketing Director", 80000.00, 1),
("Development Director", 80000.00, 2),
("Production Manager", 100000.00, 3),
("Education Director", 70000.00, 5),
("Finance Director", 90000.00, 6),
("Controller", 70000.00, 6),
("Grants Writer", 70000.00, 2),
("Producer", 150000.00, 4),
("Teaching Assistant", 40000.00, 5),
("Stage Supervisor", 70000.00, 3),
("Events Manager", 50000.00, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Barbara", "Cullins", 1001, 1),
("Emily", "Munn", 1000, 1),
("Roz", "Bluth", 1002, 1),
("David", "Roth", 1003, 1),
("Chris", "Hay", 1004, 1),
("Tom", "Moses", 1005, 1),
("Brenda", "Mike", 1006, 905),
("Michael", "Marian", 1007, 902),
("Mara", "Issly", 1008, 900),
("Paula", "Stevens", 1009, 904), 
("Steve", "Smith", 1010, 903),
("Jennifer", "Spring", 1011, 901);