import './App.css';
import NewTask from './components/NewTask';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="app">
      <NewTask />
      <TodoList />
    </div>
  );
}

export default App;
