import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  return (
    <TodoContext.Consumer>
      {({ searchValue, setSearchValue }) => (
        <div className="TodoSearch">
          <input
            placeholder="Cortar cebolla"
            value={searchValue}
            onChange={(event) => {
              setSearchValue((previousValue) => {
                return (previousValue = event.target.value);
              });
            }}
          />
        </div>
      )}
    </TodoContext.Consumer>
  );
}

export { TodoSearch };
