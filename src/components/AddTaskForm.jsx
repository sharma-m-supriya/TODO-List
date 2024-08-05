import React, { useState, useEffect } from 'react';

const AddTaskForm = ({ handleAddTask, handleUpdateTask, editingTask }) => {
  const [taskText, setTaskText] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTaskText(editingTask.text);
      setTaskDescription(editingTask.description);
    } else {
      setTaskText('');
      setTaskDescription('');
    }
  }, [editingTask]);

  const handleSaveClick = () => {
    if (taskText.trim().length > 0) {
      if (editingTask) {
        handleUpdateTask(editingTask.id, taskText, taskDescription);
      } else {
        handleAddTask(taskText, taskDescription);
      }
      setTaskText('');
      setTaskDescription('');
    }
  };

  return (
    <div className="add-task-form">
      <input
        type="text"
        placeholder="Task title"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <textarea
        placeholder="Task description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      ></textarea>
      <button onClick={handleSaveClick}>
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </div>
  );
};

export default AddTaskForm;
