import './index.css';

function TodoItem({ item, index, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${item.completed ? 'Icon-check--active' : ''}`}
        onClick={() => {
          onComplete(item.id);
        }}
      >
        V
      </span>
      <p className={`TodoItem-p ${item.completed ? 'TodoItem-p--complete' : ''}`}>{item.text}</p>
      <span
        className="Icon Icon-delete"
        onClick={() => {
          onDelete(item.id);
        }}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
