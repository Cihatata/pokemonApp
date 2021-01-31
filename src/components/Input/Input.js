import React from 'react';

const Input = (props) => {
  const { searchValue, setSearchValue, handleReset, handleSearch } = props
  return (
    <div className="input-wrapper">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        className="input"
        placeholder="Search"
      />
      <button className="button search-btn" onClick={handleSearch}>Search</button>
      <button className="button reset-btn" onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Input;