import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  selectTodosDoneCount,
  selectTodosList,
} from "../../store/todos/todosSlice";
import Icons from "../icons/Icons";
import "./Header.scss";

const Header = () => {
  const todosDoneCount = useTypedSelector(selectTodosDoneCount);
  const todosList = useTypedSelector(selectTodosList);

  return (
    <div className="header">
      <h1>TODO APP</h1>
      <Icons />
      {todosList.length > 0 && (
        <div className="header__todos-done-count">
          Количество выполненных задач: <span>{todosDoneCount}</span>
        </div>
      )}
    </div>
  );
};

export default Header;
