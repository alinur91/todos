import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as todosReducer } from "./todos/todosSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
