import { useActions } from "../../hooks/useActions";
import { TodoType } from "../../ts/types/types";
import FilterByStatusForm from "../filter-by-status-form/FilterByStatusForm";
import { MdDelete } from "react-icons/md";
import './Todo.scss'

const Todo = ({ todo }: { todo: TodoType }) => {
  const { removeTodo } = useActions();
  return (
    <div className="todo">
      <div className="todo__titleAndStatus">
        <FilterByStatusForm todo={todo} />
        <h5>{todo.title}</h5>
      </div>
      <MdDelete
        onClick={() => removeTodo({ id: todo.id })}
        className="todo__delete"
      />
    </div>
  );
};

export default Todo;
