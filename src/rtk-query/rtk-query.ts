import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { selectTodosDoneCount } from "../store/todos/todosSlice";

export const postTodos = createAsyncThunk("postTodos", async () => {
  const doneTodosCount = useTypedSelector(selectTodosDoneCount);
  const config = {
    method: "post",
    url: "",
    headers: {
      Authorization: "",
      "Content-Type": "",
    },
    data: doneTodosCount,
  };

  const response = await axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response.data;
});
