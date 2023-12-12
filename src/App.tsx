import AddTask from "./components/add-task-form/AddTaskBtn";
import Header from "./components/header/Header";
import TodosList from "./components/todos-list/TodosList";
import "./scss/style.scss";

function App() {
  return (
    <div className="container">
      <div>
        <Header />
        <AddTask />
        <TodosList />
      </div>
    </div>
  );
}

export default App;
