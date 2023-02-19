import api from "./config";

export const getAllTodo = async () => {
  const response = await api.get("/todo");
  return response.data;
};

export const addTodo = async (text) => {
  try {
    const response = await api.post("/todo", { text });
    return response.data;
  } catch (err) {
    throw err.message;
  }
};

export const updateTodo = async (id, text) => {
  const response = await api.put("/todo", { id: id, text: text });
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await api.delete("/todo", { id });
  return response.data;
};
