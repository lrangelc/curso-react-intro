import React from 'react';
import { TodoContext } from '../TodoContext';
import './index.css';

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <div className="TodoCounter">
      <h1>
        Completaste {completedTodos} de {totalTodos} TODOs
      </h1>
    </div>
  );
}

export { TodoCounter };
