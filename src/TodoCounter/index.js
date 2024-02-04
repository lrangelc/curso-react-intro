import React from 'react';
import { TodoContext } from '../TodoContext';
import './index.css';

function TodoCounter() {
  const { completed, total } = React.useContext(TodoContext);

  return (
    <div className="TodoCounter">
      <h1>
        Completaste {completed} de {total} TODOs
      </h1>
    </div>
  );
}

export { TodoCounter };
