import React from "react";
import { useState } from "react";
import Column from "./Column";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const TodoBoard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Prepare Presentation",
      status: "To Do",
      description: "Create slides for the upcoming meeting",
      dueDate: "2025-02-10",
      priority: "High",
    },
    {
      id: 2,
      title: "Code Review",
      status: "In Progress",
      description: "Review pull requests and provide feedback",
      dueDate: "2025-02-12",
      priority: "Medium",
    },
    {
      id: 3,
      title: "Deploy Application",
      status: "Done",
      description: "Deploy latest updates to the production server",
      dueDate: "2025-02-15",
      priority: "Low",
    },
    {
      id: 4,
      title: "Write Blog Post",
      status: "To Do",
      description: "Draft a new blog post on React best practices",
      dueDate: "2025-02-18",
      priority: "Medium",
    },
    {
      id: 5,
      title: "Team Meeting",
      status: "In Progress",
      description: "Discuss project updates and roadblocks",
      dueDate: "2025-02-20",
      priority: "High",
    },
  ]);

  const moveTask = (taskId, fromStatus, toStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: toStatus } : task
      )
    );
  };

  const addTask = (title, description, dueDate, priority) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: prevTasks.length + 1,
        title,
        status: "To Do",
        description,
        dueDate,
        priority,
      },
    ]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="todo-board">
        <button
          onClick={() =>
            addTask("New Task", "New Description", "2025-02-20", "Medium")
          }
        >
          Add Task
        </button>
        {["To Do", "In Progress", "Done"].map((status) => (
          <Column
            key={status}
            status={status}
            tasks={tasks.filter((t) => t.status === status)}
            moveTask={moveTask}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default TodoBoard;
