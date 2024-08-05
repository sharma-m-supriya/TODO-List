import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Todo List</h1>
      <button onClick={handleToggleDarkMode} className="toggle-dark-mode">
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default Header;
