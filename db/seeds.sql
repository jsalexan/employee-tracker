INSERT INTO department (department_name)
VALUES ("Marketing"),
("Development"),
("Production"),
("Artistic"),
("Education"),
("Finance");

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Artistic Director", 250000, 4),
("Marketing Director", 80000, 1),
("Development Director", 80000, 2),
("Production Manager", 100000, 3),
("Education Director", 70000, 5),
("Finance Director", 90000, 6),
("Controller", 70000, 6),
("Grants Writer", 70000, 2),
("Producer", 150000, 4),
("Teaching Assistant", 40000, 5),
("Stage Supervisor", 70000, 3),
("Events Manager", 50000, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Emily", "Munn", 1, NULL),
("Barbara", "Collins", 2, NULL),
("Roz", "Bluth", 3, NULL),
("David", "Roth", 4, NULL),
("Chris", "Hay", 5, NULL),
("Tom", "Moses", 6, NULL),
("Brenda", "Mike", 7, 6),
("Michael", "Marian", 8, 3),
("Mara", "Issly", 9, 1),
("Paula", "Stevens", 10, 5), 
("Steve", "Smith", 11, 4),
("Jennifer", "Spring", 12, 2);