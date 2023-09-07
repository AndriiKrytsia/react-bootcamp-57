

//https://64f9b0c04098a7f2fc14d411.mockapi.io/todos
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: 'https://64f9b0c04098a7f2fc14d411.mockapi.io',
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async (_, thunkApi) => {
    try {
        const { data } = await instance.get("/todos");
        return(data);
    } catch (error) {
        return thunkApi.rejectWithValue(error.massage)
    }
} )

export const addTodo = createAsyncThunk("todos/addTodo", async (text, thunkApi) => {
    try {
        const { data } = await instance.post("/todos", { text });
        return(data);
    } catch (error) {
        return thunkApi.rejectWithValue(error.massage)
    }
} )

export const deleteTodo  = createAsyncThunk("todos/deleteTodo", async (id, thunkApi) => {
    try {
        const { data } = await instance.delete(`/todos/${id}`);
        return(data);
    } catch (error) {
        return thunkApi.rejectWithValue(error.massage)
    }
} )