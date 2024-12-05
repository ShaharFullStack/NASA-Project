
# NASA Project

Welcome to the **NASA Project**, a modern application that integrates NASA's API to provide exciting data about space and exploration. This project demonstrates the power of external API integration combined with a clean, responsive interface.

---

## 📖 Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation and Usage](#installation-and-usage)
5. [Project Structure](#project-structure)
6. [API Documentation](#api-documentation)
7. [Author](#author)

---

## Project Overview

The NASA Project leverages NASA's public APIs to fetch and display space-related data.
 It serves as a learning tool and a showcase of building interactive web applications 
 that connect to external APIs.

---

## Features

### - Fetch and display data from NASA's API as a background image of the page 
#### (may take a few seconds to load due to NASA's API limitations).
#### (e.g., Astronomy Picture of the Day, Mars Rover photos).

### - Responsive and clean user interface.
#### ( intuitive navigation, CSS design).

### - Efficient handling of API requests and state management.

### - Modular and scalable codebase.

---

## Technologies Used

- **Frontend**: React, TypeScript, CSS.
- **Backend**: Node.js, Express.js.
- **API**: NASA APIs (e.g., APOD, Mars Rover Photos).

---

## Installation and Usage

### Prerequisites

- Node.js installed on your machine.
- An API key from NASA (available at [NASA API Portal](https://api.nasa.gov)).

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/ShaharFullStack/NASA-Project.git
   cd NASA-Project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add your NASA API key in the `.env` file:
   ```env
   REACT_APP_NASA_API_KEY=your_api_key_here
   ```
4. Run the development server:
   ```bash
   npm start
   ```
5. Open your browser at `http://localhost:3000`.

---

## Project Structure

```
NASA-Project/
├── public/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Page-level components
│   ├── services/        # API calls and utilities
│   ├── styles/          # CSS or styling files
│   ├── App.tsx          # Main application entry
│   ├── index.tsx        # React entry point
├── .env                 # Environment variables
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

---

## API Documentation

This project uses NASA's public APIs. You can explore the available APIs and their usage at the [NASA API Portal](https://api.nasa.gov).

---

## Author
# Shahar Maoz
### - GitHub: [ShaharFullStack](https://github.com/ShaharFullStack)  
### - LinkedIn: [Shahar Maoz](www.linkedin.com/in/shaharmaozh)
---

