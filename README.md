# 📝 Todo App

A modern and feature-rich Todo application built with React and Vite. This app is designed to help users manage their tasks efficiently using categories, filters, and a clean, responsive user interface.

---

## ✨ Project Overview

This Todo App offers a robust task management system with essential features like task categorization, dynamic filtering, and an intuitive layout. Built using modern React practices and a modular component-based architecture, it ensures smooth usability and scalable maintainability.

---

## 🚀 Tech Stack

### Frontend
- **React** – v19
- **Vite** – v6
- **JavaScript / JSX**

### Styling
- **CSS Modules** – for scoped styling and component isolation

### State Management
- **React Context API** – for global state handling

### Development Tools
- **ESLint** – for code quality enforcement
- **PropTypes** – for runtime type checking
- **React Hooks** – for logic encapsulation
- **HMR (Hot Module Replacement)** – for fast development experience

---

## 🔑 Key Features

### ✅ Task Management
- Create, edit, and delete tasks
- Mark tasks as complete or incomplete
- Categorize tasks for better organization

### 🔍 Filtering & Organization
- Filter tasks by status (e.g., completed, pending)
- Sidebar with category-based organization
- Category color indicators for quick visual cues

### 💻 User Interface
- Clean and minimal UI
- Responsive sidebar for navigation
- Intuitive controls for seamless task flow

---

## 📁 Project Structure

```bash
todo-app/
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── TodoItem.jsx        # Displays individual task
│   │   ├── Sidebar.jsx         # Sidebar with navigation and categories
│   │   ├── FilterList.jsx      # Controls to filter tasks
│   │   ├── CategoryList.jsx    # Category management UI
│   │   └── FilterPanel.jsx     # Wrapper for filter section
│   ├── context/                # React Context providers
│   ├── constants.js            # Shared constant values
│   ├── App.jsx                 # Main application component
│   └── main.jsx                # Application entry point
├── public/                     # Static assets
└── package.json                # Project metadata and dependencies

---

## 🛠️ Setup and Installation

1. Clone the repository
\\\bash
git clone [repository-url]
cd todo-app
\\\

2. Install dependencies
\\\bash
npm install
\\\

3. Start the development server
\\\bash
npm run dev
\\\
