import React from 'react';
import { TodoContext } from '../TodoContext';
import './index.css';

function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder="Cortar cebolla para el almuerzo" value={newTodoValue} onChange={onChange} />
      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };