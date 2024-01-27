import React from 'react';

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');

  console.log({ searchValue });
  return (
    <div className="TodoSearch">
      <input
        placeholder="Cortar cebolla"
        value={searchValue}
        onChange={(event) => {
          // console.log('TodoSearch onChange...');
          // console.clear();
          // console.log(event.target.value);
          setSearchValue((previousValue) => {
            console.log({ previousValue });
            return (previousValue = event.target.value);
          });
          // setSearchValue(() => {

          // })
        }}
      />
    </div>
  );
}

export { TodoSearch };
