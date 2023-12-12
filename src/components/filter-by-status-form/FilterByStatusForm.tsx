import { useActions } from "../../hooks/useActions";
import { Status } from "../../ts/enums/statusEnum";
import { TodoType } from "../../ts/types/types";
import "./FilterByStatusForm.scss";

const FilterByStatusForm = ({
  handleSetStatus,
  todo,
  statusAll,
}: {
  handleSetStatus?: (value: Status) => void;
  todo?: TodoType;
  statusAll?: boolean;
}) => {
  const { changeStatusForTodo, setFilterByStatus } = useActions();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (handleSetStatus) {
      handleSetStatus(e.target.value as Status);
      return;
    }
    const status = e.target.value as Status;

    if (todo) {
      changeStatusForTodo({ id: todo.id, status });
      return;
    }

    setFilterByStatus(status);
  };

  return (
    <div className="filter-form">
      <select
        defaultValue={todo?.status}
        onChange={handleChange}
        name="status"
        id=""
      >
        {statusAll && <option value={Status.All}>Все</option>}
        <option value={Status.Awaiting}>Ожидание</option>
        <option value={Status.Underway}>В работе</option>
        <option value={Status.Done}>Выполнено</option>
      </select>
    </div>
  );
};

export default FilterByStatusForm;
