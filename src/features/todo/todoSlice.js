import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllTodo } from "services/todoService";
import { API_STATUS } from "utils/constants";

const initialState = {
  apiStatus: API_STATUS.LOADING,
  todos: [],
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await getAllTodo();
  return res;
});

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.apiStatus = API_STATUS.LOADING;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.apiStatus = API_STATUS.SUCCESS;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.apiStatus = API_STATUS.FAILED;
        state.todos = [];
      });
  },
});

export const selectAllTodos = (state) => state.todos.todos;
export const selectTodoApiStatus = (state) => state.todos.apiStatus;

export default todoSlice.reducer;
