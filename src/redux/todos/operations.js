
//https://64f9b0c04098a7f2fc14d411.mockapi.io/todos
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "redux/auth/operations";


export const fetchTodos = createAsyncThunk("todos/fetchTodos", async (_, thunkApi) => {
    try {
        const { data } = await instance.get("/tasks");
        return(data);
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
} )

export const addTodo = createAsyncThunk("todos/addTodo", async (text, thunkApi) => {
    try {
        const { data } = await instance.post("/tasks", { text });
        return(data);
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
} )

export const deleteTodo  = createAsyncThunk("todos/deleteTodo", async (id, thunkApi) => {
    try {
        const { data } = await instance.delete(`/tasks/${id}`);
        return(data);
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
} )