import React from "react";
import { useState } from "react";
import Column from "./Column";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const TodoBoard = () => {
  const [tasks, setTasks] = useState([
    { title: "Task 1", status: "To Do" },
    { title: "Task 2", status: "In Progress" },
    { title: "Task 3", status: "Done" },
  ]);

  const moveTask = (taskIndex, fromStatus, toStatus) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      const task = newTasks.splice(taskIndex, 1)[0];
      task.status = toStatus;
      return [...newTasks, task];
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="todo-board">
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
