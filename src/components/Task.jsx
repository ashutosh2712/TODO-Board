import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { TASK_TYPE } from "../constants/task";

const Task = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: TASK_TYPE,
    item: { id: task.id, from: task.status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [isEditing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [showDetails, setShowDetails] = useState(false);

  const handleEdit = () => {
    setEditing(!isEditing);
  };

  return (
    <div
      ref={drag}
      className="task"
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onClick={() => setShowDetails(!showDetails)}
    >
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
      {showDetails && (
        <div className="task-details">
          <p>{task.description}</p>
          <p>
            <strong>Due Date:</strong> {task.dueDate}
          </p>
          <span className={`priority-${task.priority.toLowerCase()}`}>
            {task.priority}
          </span>
        </div>
      )}
    </div>
  );
};

export default Task;
