import './App.css';
import TaskSection from './components/TaskSection';
import { tasks } from './tasks';

function App() {
  return (
    <div className='wrapper' style={{
      height: "100vh",
      width: "100vw",
      overflowY: "hidden"
    }}>
      <div className="p-3 d-flex" style={{
        gap: "10px",
      }}>
        <TaskSection title="Incomplete" tasks={tasks.filter((task) => task.status === "Incomplete")}/>
        <TaskSection title="Todo" tasks={tasks.filter((task) => task.status === "Todo")}/>
        <TaskSection title="Doing" tasks={tasks.filter((task) => task.status === "Doing")}/>
        <TaskSection title="Under Review" tasks={tasks.filter((task) => task.status === "Under Review")}/>
        <TaskSection title="Completed" tasks={tasks.filter((task) => task.status === "Completed")}/>
        <TaskSection title="Overview" tasks={tasks.filter((task) => task.status === "Overview")}/>
      </div>
    </div>
  );
}

export default App;


