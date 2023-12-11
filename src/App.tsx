import AddTask from "./components/add-task-form/AddTaskBtn";
import Header from "./components/header/Header";
import "./scss/style.scss";

function App() {
  return (
    <div className="container">
      <div>
        <Header />
        <AddTask/>
      </div>
    </div>
  );
}

export default App;
