import './index.css';

function TodoItem({ item, index, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${item.completed ? 'Icon-check--active' : ''}`}
        onClick={() => {
          onComplete(index);
        }}
      >
        V
      </span>
      <p className={`TodoItem-p ${item.completed ? 'TodoItem-p--complete' : ''}`}>{item.text}</p>
      <span
        className="Icon Icon-delete"
        onClick={() => {
          onDelete(index);
        }}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
