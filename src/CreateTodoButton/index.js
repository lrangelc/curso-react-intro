import './index.css';

function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log('CreateTodoButton clicked...');
        console.log(event);
        console.log(event.target);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
