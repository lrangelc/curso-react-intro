function TodoItem({ item, index }) {
  return (
    <li>
      <span>{item.completed ? '【✔︎】' : '【 】'}</span>
      <p>
        {index} {item.text}x
      </p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
