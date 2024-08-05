import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import SearchTask from './components/SearchTask';
import Header from './components/Header';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetch('/tasks.json')
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const handleAddTask = (text, description) => {
    const date = new Date();
    const newTask = {
      id: nanoid(),
      text,
      description,
      completed: false,
      date: date.toLocaleDateString(),
    };
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = (id, newText, newDescription) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newText, description: newDescription } : task
      )
    );
    setEditingTask(null);
  };

  const handleToggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleToggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={`${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <Header handleToggleDarkMode={handleToggleDarkMode} />
        <SearchTask searchText={searchText} setSearchText={setSearchText} />
        <AddTaskForm
          handleAddTask={handleAddTask}
          handleUpdateTask={handleUpdateTask}
          editingTask={editingTask}
        />
        <TaskList
          tasks={tasks.filter((task) =>
            task.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleToggleComplete={handleToggleComplete}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      </div>
    </div>
  );
};

export default App;