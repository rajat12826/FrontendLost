# Lost and Found Website

This is a web application for the university community to report lost and found items on campus. Users can submit detailed information about items they have found or lost, including the category, brand, location, and identifying details. This documentation covers the application features, structure, tech stack, and development guidelines.

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation and Setup](#installation-and-setup)
4. [Scripts](#scripts)
5. [Folder Structure](#folder-structure)
6. [API Endpoints](#api-endpoints)
7. [Styling](#styling)
8. [Contributing](#contributing)

## Features

- **Report Lost Items**: Users can report items they have lost, providing details such as the category, brand, color, and location where they lost the item.
- **Report Found Items**: Users can report found items, providing similar information along with where they submitted the item.
- **View Items**: Users can view their reported lost and found items in the "Items" section.
- **Search Functionality**: Users can search for items based on various filters like category, location, or keywords to match identifying details.

## Tech Stack

- **Frontend**: 
  - [React](https://reactjs.org/): JavaScript library for building user interfaces.
  - [React Router](https://reactrouter.com/): For routing between pages.
  - [Axios](https://axios-http.com/): For making HTTP requests to the backend API.
  - [TailwindCSS](https://tailwindcss.com/): Utility-first CSS framework for styling.
  
- **Backend**: 
  - [Node.js](https://nodejs.org/): JavaScript runtime for server-side development.
  - [Express.js](https://expressjs.com/): Minimal web framework for building the REST API.
  
- **Database**: 
  - [Prisma ORM](https://www.prisma.io/): Type-safe database access using TypeScript&#8203;:contentReference[oaicite:2]{index=2}&#8203;:contentReference[oaicite:3]{index=3}.
  - PostgreSQL: Relational database to store item information and user reports.

## Installation and Setup

### Prerequisites
- Node.js and npm installed
- PostgreSQL installed and running

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/lost_and_found.git
   cd lost_and_found

2. Install dependencies:
   ```bash
   npm install

3. Run development server:
   ```bash
   npm start

The application at [http://localhost:3000](http://localhost:3000)

