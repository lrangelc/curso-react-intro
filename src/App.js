import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter completed={5} total={10} />
      <TodoSearch />
      
      <TodoCounter2 completed={15} total={30} />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

function TodoSearch() {
  return (<></>)
}

function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Llorar con la Llorona</p>
      <span>X</span>
    </li>
  );
}

function TodoCounter(props) {
  return (
    <h1>
      Completaste {props.completed} de {props.total} TODOs
    </h1>
  );
}
function TodoCounter2(props) {
  return React.createElement('h1', null, `Completaste ${props.completed} de ${props.total} TODOs`);
}

export default App;
