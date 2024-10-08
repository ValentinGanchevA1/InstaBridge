-- Create Database
CREATE DATABASE instabridge;

-- Use the Database
USE instabridge;

-- 1. Users Table

-- This table will store user information for authentication.

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Categories Table

-- This table will store the various categories, like economic_disparity, healthcare_access, and education, which can be referenced by the data entries.

CREATE TABLE Categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(50) UNIQUE NOT NULL
);

-- Insert Initial Categories


INSERT INTO Categories (category_name) VALUES 
('economic_disparity'),
('healthcare_access'),
('education');

-- 3. Data Table

-- This table will store the actual data that will be visualized. Each entry is tied to a category and a user who added the data.


CREATE TABLE Data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    user_id INT NOT NULL,
    date DATE NOT NULL,
    value DECIMAL(10, 2) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES Categories(id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- 4. Filters Table

-- This table can store user preferences for filters (if needed). It's optional but useful if you want to save filter states.

CREATE TABLE Filters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    category_id INT NOT NULL,
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (category_id) REFERENCES Categories(id)
);

-- Sample Queries for Testing

-- Sample users
INSERT INTO Users (username, email, password_hash) VALUES 
('testuser1', 'test1@example.com', 'hashedpassword1'),
('testuser2', 'test2@example.com', 'hashedpassword2');

-- Sample data
INSERT INTO Data (category_id, user_id, date, value, description) VALUES
(1, 1, '2024-01-01', 45.50, 'Economic disparity indicator for January'),
(1, 1, '2024-02-01', 46.00, 'Economic disparity indicator for February'),
(2, 2, '2024-01-01', 80.75, 'Healthcare access rate for January'),
(3, 1, '2024-01-01', 92.30, 'Education performance rate for January');


-- Database Schema Summary

--     Users table holds user login information.
--     Categories table holds different categories for data.
--     Data table holds the actual information to be visualized, with relationships to users and categories.
--     Filters table can optionally store user filter preferences