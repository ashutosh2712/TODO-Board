import React from "react";
import { useState } from "react";
import Column from "./Column";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const TodoBoard = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Task 1",
      status: "To Do",
      description: "Description 1",
      priority: "High",
    },
    {
      title: "Task 2",
      status: "In Progress",
      description: "Description 2",
      priority: "Medium",
    },
    {
      title: "Task 3",
      status: "Done",
      description: "Description 3",
      priority: "Low",
    },
  ]);

  const moveTask = (taskIndex, fromStatus, toStatus) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      const task = newTasks.splice(taskIndex, 1)[0];
      task.status = toStatus;
      return [...newTasks, task];
    });
  };

  const addTask = (title, description, priority) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { title, status: "To Do", description, priority },
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
