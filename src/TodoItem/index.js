import './index.css';
import { CompleteIcon } from '../CompleteIcon';
import { DeleteIcon } from '../DeleteIcon';

function TodoItem({ item, index, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={item.completed}
        onComplete={() => {
          onComplete(item.id);
        }}
      />
      <p className={`TodoItem-p ${item.completed ? 'TodoItem-p--complete' : ''}`}>{item.text}</p>
      <DeleteIcon
        onDelete={() => {
          onDelete(item.id);
        }}
      />
    </li>
  );
}

export { TodoItem };
