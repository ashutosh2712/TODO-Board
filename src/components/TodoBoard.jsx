import React from "react";
import { useState } from "react";
import Column from "./Column";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const TodoBoard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      status: "To Do",
      description: "Description 1",
      priority: "High",
    },
    {
      id: 2,
      title: "Task 2",
      status: "In Progress",
      description: "Description 2",
      priority: "Medium",
    },
    {
      id: 3,
      title: "Task 3",
      status: "Done",
      description: "Description 3",
      priority: "Low",
    },
  ]);

  const moveTask = (taskId, fromStatus, toStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: toStatus } : task
      )
    );
  };

  const addTask = (title, description, priority) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: prevTasks.length + 1,
        title,
        status: "To Do",
        description,
        priority,
      },
    ]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="todo-board">
        <button
          onClick={() => addTask("New Task", "New Description", "Medium")}
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
