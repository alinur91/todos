import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./TodosList.scss";
import {
  selectFilterByStatus,
  selectTodosList,
} from "../../store/todos/todosSlice";
import Todo from "../todo/Todo";
import { Status } from "../../ts/enums/statusEnum";

const TodosList = () => {
  const todosList = useTypedSelector(selectTodosList);
  const filterStatus = useTypedSelector(selectFilterByStatus);
  let filteredTodos;

  if (filterStatus === Status.All) {
    filteredTodos = todosList;
  } else {
    filteredTodos = todosList.filter((todo) => todo.status === filterStatus);
  }

  if (filteredTodos.length === 0) return;

  return (
    <div className="todos-container">
      {filteredTodos
        .map((todo) => <Todo key={todo.id} todo={todo} />)
        .reverse()}
    </div>
  );
};

export default TodosList;
