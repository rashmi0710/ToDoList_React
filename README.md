# React Todo App with Context API & Local Storage

## 📝 Project Overview
This is a **Todo App** built using **React, Context API, and Local Storage**. It allows users to add, update, delete, and mark tasks as completed. The app persists data using local storage, ensuring todos remain even after a page refresh.

## 🚀 Features
- ✅ Add new todos
- ✏️ Edit existing todos
- ❌ Delete todos
- 🔄 Toggle todo completion
- 💾 Data persistence with Local Storage
- 🎨 Styled using Tailwind CSS

## 🛠 Technologies Used
- **React** (Functional Components + Hooks)
- **Context API** (State Management)
- **Local Storage** (Data Persistence)
- **Tailwind CSS** (Styling)

## 📂 Project Structure
```
/react-todo-app
│── src
│   ├── components
│   │   ├── TodoForm.js
│   │   ├── TodoItem.js
│   ├── assets
│   │   ├── contexts
│   │   │   ├── TodoContext.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
│── public
│── package.json
│── README.md
```

## 📌 Installation & Setup

1️⃣ **Clone the repository:**
```sh
git clone https://github.com/your-username/react-todo-app.git
cd react-todo-app
```

2️⃣ **Install dependencies:**
```sh
npm install
```

3️⃣ **Start the development server:**
```sh
npm start  # or npm run dev (for Vite)
```

## ⚙️ How It Works

### **1. Context API for State Management**
- `TodoContext.js` manages all todo-related state and functions (add, delete, update, toggle completion).
- The `TodoProvider` wraps the `App.js`, providing todos and actions to all components.

### **2. Using Local Storage for Data Persistence**
- On app load, todos are fetched from `localStorage`.
- Every time a todo is added/updated/deleted, the updated list is saved in `localStorage`.

## 📜 Available Scripts
| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Runs tests (if implemented) |

## 📌 Future Improvements
- 🔹 Implement a filter (Completed/Pending Todos)
- 🔹 Add animations for UI interactions
- 🔹 Integrate with a backend for user authentication

## 🤝 Contributing
Feel free to fork this repository and submit pull requests. 🚀

## 🛡️ License
This project is licensed under the **MIT License**.

---
💡 **Happy Coding!** 🎯

