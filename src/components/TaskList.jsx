import React, { useState } from 'react';
import Task from './Task';

const TaskList = ({ tasks, handleToggleComplete, handleDeleteTask, handleEditTask }) => {
  const [expandedTaskId, setExpandedTaskId] = useState(null);

  const handleExpandClick = (id) => {
    setExpandedTaskId(expandedTaskId === id ? null : id);
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          expanded={task.id === expandedTaskId}
          onExpandClick={handleExpandClick}
          onToggleComplete={handleToggleComplete}
          onDeleteTask={handleDeleteTask}
          onEditTask={handleEditTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
