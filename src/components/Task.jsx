import React from 'react';
import { MdEdit, MdDelete, MdExpandMore, MdExpandLess, MdCheckCircle, MdRadioButtonUnchecked } from 'react-icons/md';

const Task = ({ task, expanded, onExpandClick, onToggleComplete, onDeleteTask, onEditTask }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <div className="task-header">
        <span onClick={() => onToggleComplete(task.id)}>
          {task.completed ? (
            <MdCheckCircle size="1.5em" style={{ color: 'green', cursor: 'pointer' }} />
          ) : (
            <MdRadioButtonUnchecked size="1.5em" style={{ color: 'gray', cursor: 'pointer' }} />
          )}
        </span>
        <span className="task-text">{task.text}</span>
        <div className="task-actions">
          <MdEdit onClick={() => onEditTask(task)} className="edit-icon" size="1.3em" style={{ cursor: 'pointer' }} />
          <MdDelete onClick={() => onDeleteTask(task.id)} className="delete-icon" size="1.3em" style={{ cursor: 'pointer' }} />
          {expanded ? (
            <MdExpandLess onClick={() => onExpandClick(task.id)} size="1.3em" style={{ cursor: 'pointer' }} />
          ) : (
            <MdExpandMore onClick={() => onExpandClick(task.id)} size="1.3em" style={{ cursor: 'pointer' }} />
          )}
        </div>
      </div>
      {expanded && (
        <div className="task-details">
          <p>{task.description}</p>
          <small>Last updated: {task.date}</small>
        </div>
      )}
    </div>
  );
};

export default Task;

