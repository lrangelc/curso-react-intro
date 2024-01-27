// const styles = {
//   backgroundColor: 'red',
// };
import './TodoCounter.css';

function TodoCounter({ completed, total }) {
  return (
    // <h1 style={styles}>
    // <h1 style={{ fontSize: '24px', backgroundColor: 'gray', textAlign: 'center', margin: 0, padding: '48px' }}>
    <h1>
      Completaste {completed} de {total} TODOs
    </h1>
  );
}

export { TodoCounter };
