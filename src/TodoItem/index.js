import './index.css';

function TodoItem({ item, index }) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${item.completed ? 'Icon-check--active' : ''}`}>V</span>
      <p className={`TodoItem-p ${item.completed ? 'TodoItem-p--complete' : ''}`}>{item.text}</p>
      {/* <span className="Icon Icon-delete">X</span>
      <span>{item.completed ? '【✔︎】' : '【 】'}</span>
      <p>
        {index} {item.text}x
      </p>
      <span>X</span> */}
    </li>
  );
}

export { TodoItem };
