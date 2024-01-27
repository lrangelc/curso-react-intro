function TodoItem({ item, index }) {
  return (
    <li className={item.completed ? 'TodoItem.completed' : 'TodoItem'}>
      <span>{item.completed ? '【✔︎】' : '【 】'}</span>
      <p>
        {index} {item.text}x
      </p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
