import './FilterByStatusForm.scss'

const FilterByStatusForm = () => {
  return (
    <div className="filter-form">
      <select name="" id="">
        <option value="Ожидание">Ожидание</option>
        <option value="В работе">В работе</option>
        <option value="Выполнено">Выполнено</option>
      </select>
    </div>
  );
};

export default FilterByStatusForm;
