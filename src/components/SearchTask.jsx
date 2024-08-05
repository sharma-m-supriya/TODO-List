import React from 'react';

const SearchTask = ({ searchText, setSearchText }) => {
  return (
    <div className="search-task">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default SearchTask;
