
import './App.css';
import CreateTask from './components/CreateTask'
import MyTask from './components/MyTask'


function App() {
  return (
    <div className="container">
    <h1 className="title">Todo Task</h1>
    <CreateTask/>
    <MyTask />
  </div>
  );
}

export default App;
