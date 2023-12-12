import "./AddTaskBtn.scss";
import FilterByStatusForm from "../filter-by-status-form/FilterByStatusForm";
import Modal from "react-modal";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Status } from "../../ts/enums/statusEnum";
import { useActions } from "../../hooks/useActions";
import { v4 as uuidv4 } from "uuid";

const AddTaskBtn = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(Status.Awaiting);

  const { addTodo } = useActions();

  const handleSetStatus = (value: Status) => setStatus(value);

  function openModal() {
    setIsOpen(true);
  }

  const shouldShowModal = () => {
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "480px",
        height: "320px",
        backgroundColor: "#d9d9ec",
        borderRadius: "10px",
        border: "none",
      },
    };

    function closeModal() {
      setIsOpen(false);
      setTitle("");
      setStatus(Status.Awaiting);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const trimmedTitle = title.trim();
      if (!trimmedTitle) {
        alert("Строка не должна быть пустой!");
        return;
      }
      addTodo({ id: uuidv4(), title: trimmedTitle, status });
      closeModal();
    };

    return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        portalClassName="modal"
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <IoMdClose onClick={closeModal} className="close-icon" />
        <h3>Добавить задачу</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Заголовок</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            pattern=".{1,30}"
            id="title"
            type="text"
          />
          <p>Длина заголовка должна быть 1-30 символов</p>

          <label htmlFor="status">Статус</label>
          <FilterByStatusForm handleSetStatus={handleSetStatus} />
          <div className="btns">
            <button className="btn-add">Добавить задачу</button>
            <button onClick={closeModal} className="btn-cancel">
              Отмена
            </button>
          </div>
        </form>
      </Modal>
    );
  };

  return (
    <div className="add-task-btn">
      <button onClick={openModal}>Добавить задачу</button>
      {shouldShowModal()}
      <FilterByStatusForm statusAll />
    </div>
  );
};

export default AddTaskBtn;
