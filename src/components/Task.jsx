import React from "react";
import { useDrag } from "react-dnd";
import { TASK_TYPE } from "../constants/task";

const Task = ({ task, index }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: TASK_TYPE,
    item: { index, from: task.status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className="task" style={{ opacity: isDragging ? 0.5 : 1 }}>
      {task.title}
    </div>
  );
};

export default Task;
