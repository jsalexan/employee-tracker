INSERT INTO department (id, department_name)
VALUES (1, "Marketing"),
(2, "Development"),
(3, "Production"),
(4, "Artistic"),
(5, "Education"),
(6, "Finance");

INSERT INTO employee_role (id, title, salary, department_id)
VALUES (1000, "Artistic Director", 250,000.00, 4),
(1001, "Marketing Director", 80,000.00, 1),
(1002, "Development Director", 80,000.00, 2),
(1003, "Production Manager", 100,000.00, 3),
(1004, "Education Director", 70,000.00, 5),
(1005, "Finance Director", 90,000.00, 6),
(1006, "Controller", 70,000.00, 6),
(1007, "Grants Writer", 70,000.00, 2),
(1008, "Producer", 150,000.00, 4),
(1009, "Teaching Assistant", 40,000.00, 5),
(1010, "Stage Supervisor", 70,000.00, 3),
(1011, "Events Manager", 50,000.00, 1);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES ("Barbara", "Cullins", 1001, 901),
(300, "Emily", "Munn", 1000, 900),
(301, "Roz", "Bluth", 1002, 902),
(302, "David", "Roth", 1003, 903),
(303, "Chris", "Hay", 1004, 904),
(304, "Tom", "Moses", 1005, 905),
(305, "Brenda", "Mike", 1006, 905),
(306, "Michael", "Marian", 1007, 902),
(307, "Mara", "Issly", 1008, 900),
(308, "Paula", "Stevens", 1009, 904), 
(309, "Steve", "Smith", 1010, 903),
(310, "Jennifer", "Spring", 1011, 901);