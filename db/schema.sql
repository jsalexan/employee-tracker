DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    dept_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    
);

CREATE TABLE employee_role (
    em_role_id PRIMARY KEY INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(19,4) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY(department_id) REFERENCES department(dept_id) ON DELETE CASCADE
);

CREATE TABLE employee (
    em_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY(role_id) REFERENCES employee_role(em_role_id) ON DELETE CASCADE
);