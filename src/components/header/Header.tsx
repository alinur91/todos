import { useTypedSelector } from "../../hooks/useTypedSelector";
import { selectTodosDoneCount } from "../../store/todos/todosSlice";
import Icons from "../icons/Icons";
import "./Header.scss";

const Header = () => {
  const todosDoneCount = useTypedSelector(selectTodosDoneCount);

  return (
    <div className="header">
      <h1>TODO APP</h1>
      <Icons />
      <div className="header__todos-done-count">
        Количество выполненных задач: <span>{todosDoneCount}</span>
      </div>
    </div>
  );
};

export default Header;
