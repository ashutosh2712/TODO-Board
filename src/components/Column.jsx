import React from "react";
import Task from "./Task";
import { useDrop } from "react-dnd";
import { TASK_TYPE } from "../constants/task";

const Column = ({ status, tasks, moveTask }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: TASK_TYPE,
    drop: (item) => moveTask(item.index, item.from, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="column"
      style={{ background: isOver ? "#f0f0f0" : "#e0e0e0" }}
    >
      <h3>{status}</h3>
      {tasks.map((task, index) => (
        <Task key={index} task={task} index={index} />
      ))}
    </div>
  );
};

export default Column;
