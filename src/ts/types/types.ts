import { Status } from "../enums/statusEnum";

export type TodoType = {
  id: string;
  title: string;
  status: Status;
};

export type initialState = {
  todosList: TodoType[];
  filterTodosByStatus: Status;
};
