import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllTodo } from "services/todoService";
import { API_STATUS } from "utils/constants";

const initialState = {
  apiStatus: API_STATUS.LOADING,
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.apiStatus = API_STATUS.LOADING;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.apiStatus = API_STATUS.SUCCESS;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.apiStatus = API_STATUS.FAILED;
        state.todos = [];
      });
  },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  return getAllTodo();
});

export default todoSlice.reducer;
