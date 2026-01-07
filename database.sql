CREATE DATABASE IF NOT EXISTS internship_tracker;

USE internship_tracker;

CREATE TABLE IF NOT EXISTS applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    applied_date DATE NOT NULL,
    status VARCHAR(50) NOT NULL
);

INSERT INTO applications (company_name, role, applied_date, status) VALUES 
('Google', 'Software Engineering Intern', '2023-10-01', 'Applied'),
('Microsoft', 'Frontend Developer Intern', '2023-10-05', 'Interview'),
('Amazon', 'SDE Intern', '2023-09-20', 'Rejected');
