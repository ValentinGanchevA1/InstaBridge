# InstaBridge: Data Visualization Tool

InstaBridge is a powerful web application designed to bridge the gap between complex datasets and public understanding. By transforming raw data into interactive and engaging visualizations, InstaBridge empowers users to explore critical information in meaningful ways.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (registration, login, logout)
- Interactive data visualizations (line charts, bar charts, pie charts, etc.)
- Dynamic filtering of data by categories (economic disparity, healthcare access, education)
- Customizable views with save/load functionality for user preferences
- Real-time data updates with automatic refresh
- Responsive design for accessibility on various devices
- User-friendly dashboard layout with interactive elements (sliders, dropdowns)

## Technologies Used

- **Frontend**: 
  - React.js
  - Plotly.js
  - D3.js
  - CSS

- **Backend**: 
  - Node.js
  - Express.js
  - Sequelize (for MySQL ORM)
  - MySQL 8
  - dotenv (for environment variables)

- **Development Tools**:
  - Git
  - NPM

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MySQL (v8 or higher)

### Steps

1. **Clone the Repository**

   git clone https://github.com/OumaCavin/InstaBridge.git
   cd Instabridge

## Installation

2. **Set Up Backend**

  **Navigate to the backend directory:**
   
   cd backend

**Install dependencies:**

npm install

**Create a .env file in the backend directory and add your database credentials:**


DB_HOST=localhost
DB_USER=yourusername
DB_PASS=yourpassword
DB_NAME=yourdatabasename

**Run the database migrations:**

npx sequelize-cli db:migrate

**Start the server:**

    npm start

3. **Set Up Frontend**

    **Open another terminal window and navigate to the frontend directory:**

   cd frontend


    **Install dependencies:**

    npm install

    **Start the React application:**

    npm start

4. **Access the Application**

    **Open your browser and navigate to http://localhost:3000 to view the application.**

## Usage

- **User Registration**: New users can create an account to access the features of the application.
- **User Login**: Existing users can log in with their credentials.
- **Data Visualization**: Users can explore various data visualizations based on different categories.
- **Filters**: Users can apply dynamic filters to refine the data displayed in the visualizations.
- **Save Custom Views**: Users can save their filter preferences for future sessions.
- **Real-time Updates**: The application refreshes data at regular intervals to provide the latest insights.

## Database Schema

The project uses a MySQL database with the following tables:

- **Users**: Stores user login information.
- **Categories**: Holds different categories for data visualization.
- **Data**: Contains the actual data entries with relationships to users and categories.
- **Filters** (optional): Stores user filter preferences.

## API Endpoints

The backend provides several API endpoints for CRUD operations. Key endpoints include:

### User Authentication

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in a user.
- `POST /api/auth/logout`: Log out the current user.

### Data Management

- `GET /api/data`: Fetch all data.
- `POST /api/data`: Add new data.
- `PUT /api/data/:id`: Update data by ID.
- `DELETE /api/data/:id`: Delete data by ID.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
