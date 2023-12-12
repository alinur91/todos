import AddTask from "./components/add-task-form/AddTaskBtn";
import Header from "./components/header/Header";
import TodosList from "./components/todos-list/TodosList";
import { postTodos } from "./rtk-query/rtk-query";
import "./scss/style.scss";

function App() {
  postTodos()

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
