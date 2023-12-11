import "./AddTaskBtn.scss";
import FilterByStatusForm from "../filter-by-status-form/FilterByStatusForm";
import Modal from "react-modal";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const AddTaskBtn = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

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
        height: "300px",
        backgroundColor: "#e8e8f8",
        borderRadius: "10px",
      },
    };

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    }

    function closeModal() {
      setIsOpen(false);
    }

    return (
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        portalClassName="modal"
        contentLabel="Example Modal"
      >
        <IoMdClose onClick={closeModal} className="close-icon" />
        <h3>Добавить задачу</h3>
        <form>
          <label htmlFor="title">Заголовок</label>
          <input id="title" type="text" />
          <label htmlFor="status">Статус</label>
          <input id="status" type="text" />
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
      <FilterByStatusForm />
    </div>
  );
};

export default AddTaskBtn;
