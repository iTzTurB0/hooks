import React from 'react';

const Filter = ({ title, rate, onTitleChange, onRateChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={onTitleChange}
      />
      <input
        type="number"
        min="1"
        max="10"
        placeholder="Filter by rating"
        value={rate}
        onChange={onRateChange}
      />
    </div>
  );
};

export default Filter;
