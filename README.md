# React TODO Board

## Overview
This is a **Drag-and-Drop TODO Board** built with **React** and **react-dnd**. It allows users to:
- Add new tasks
- Edit task titles
- View task details (description, due date, priority)
- Drag and drop tasks between columns (To Do, In Progress, Done)
- Maintain task priorities

## Features
✅ **Drag and Drop:** Move tasks seamlessly between columns.
✅ **Task Editing:** Click to edit a task title inline.
✅ **Task Details:** Click on a task to reveal description, due date, and priority.
✅ **Task Prioritization:** High, Medium, and Low priority labels with color coding.
✅ **Add New Tasks:** Quickly add new tasks to the board.
✅ **Responsive UI:** Works on desktop, tablet, and mobile screens.

## Tech Stack
- **React** – Frontend framework
- **react-dnd** – Drag and drop library
- **HTML5 Backend for react-dnd** – Drag-and-drop backend
- **CSS** – Styled for a clean UI

## Installation
### 1️⃣ Clone the Repository
```bash
 git clone https://github.com/ashutosh2712/TODO-Board.git
 cd todo-board
```
### 2️⃣ Install Dependencies
```bash
 npm install
```
### 3️⃣ Run the Project
```bash
 npm run dev
```

## File Structure
```
/src
  ├── components
  │   ├── TodoBoard.jsx  # Main Board Component
  │   ├── Column.jsx      # Columns for task categories
  │   ├── Task.jsx        # Individual Task Component
  │   ├── constants.js   # Constants for DnD types
  ├── app.css         # Custom Styling
  ├── App.jsx            # Main entry point
```

## Usage
1. Click **"Add Task"** to create a new task.
2. Click on a task title to **edit it**.
3. Click on a task to view **details (description, due date, priority)**.
4. **Drag & Drop** tasks between columns to update their progress.


## Future Enhancements
- 📝 **Persist tasks in local storage**
- 📅 **Set task deadlines and reminders**
- 🎨 **Customizable themes**
- 📊 **Analytics on task completion trends**

## License
MIT License - Free to use and modify.

## Contributions
Pull requests and improvements are welcome! 🎉

