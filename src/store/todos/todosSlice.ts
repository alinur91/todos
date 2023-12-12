import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { initialState, TodoType } from "../../ts/types/types";
import { Status } from "../../ts/enums/statusEnum";
import { postTodos } from "../../rtk-query/rtk-query";

const initialState: initialState = {
  todosList: [] as TodoType[],
  filterTodosByStatus: Status.All,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, { payload }: PayloadAction<TodoType>) {
      state.todosList.push(payload);
    },
    changeStatusForTodo(
      state,
      { payload }: PayloadAction<Pick<TodoType, "id" | "status">>
    ) {
      const { status, id } = payload;
      const foundTodo = state.todosList.find((todo) => todo.id === id);
      if (foundTodo) {
        foundTodo.status = status;
      }
    },
    removeTodo(state, { payload }: PayloadAction<Pick<TodoType, "id">>) {
      const { id } = payload;
      const doesExist = state.todosList.some((todo) => todo.id === id);
      if (doesExist) {
        const index = state.todosList.findIndex((todo) => todo.id === id);
        if (index !== -1) state.todosList.splice(index, 1);
      }
    },
    setFilterByStatus(state, { payload }: PayloadAction<Status>) {
      state.filterTodosByStatus = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postTodos.pending, (state, action) => console.log(state, action))
      .addCase(postTodos.fulfilled, (state, action) =>
        console.log(state, action)
      )
      .addCase(postTodos.rejected, (state, action) =>
        console.log(state, action)
      );
  },
});

export const selectTodosDoneCount = (state: RootState) =>
  state.todos.todosList.reduce(
    (acc, todo) => (todo.status === Status.Done ? acc + 1 : acc),
    0
  );

export const selectTodosList = (state: RootState) => state.todos.todosList;
export const selectFilterByStatus = (state: RootState) =>
  state.todos.filterTodosByStatus;

export const { actions, reducer } = todosSlice;
