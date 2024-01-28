import React from 'react';

function TodoSearch({ searchValue, setSearchValue }) {
  return (
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
  );
}

export { TodoSearch };
