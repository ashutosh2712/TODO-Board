import React, { useState } from "react";
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

  const [isEditing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleEdit = () => {
    setEditing(!isEditing);
  };

  return (
    <div ref={drag} className="task" style={{ opacity: isDragging ? 0.5 : 1 }}>
      {isEditing ? (
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => setEditing(false)}
          autoFocus
        />
      ) : (
        <span onClick={handleEdit}>{title}</span>
      )}
      <p>{task.description}</p>
      <span className={`priority-${task.priority.toLowerCase()}`}>
        {task.priority}
      </span>
    </div>
  );
};

export default Task;
