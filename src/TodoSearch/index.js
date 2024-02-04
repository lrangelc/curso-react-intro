import React from 'react';
import { TodoContext } from '../TodoContext';
import './index.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
