// const styles = {
//   backgroundColor: 'red',
// };
import './index.css';

function TodoCounter({ completed, total }) {
  return (
    <div className="TodoCounter">
      {/* // <h1 style={styles}>
    // <h1 style={{ fontSize: '24px', backgroundColor: 'gray', textAlign: 'center', margin: 0, padding: '48px' }}> */}

      <h1>
        Completaste {completed} de {total} TODOs
      </h1>
    </div>
  );
}

export { TodoCounter };
