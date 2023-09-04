import { nanoid } from "nanoid";

export const addTodo = text => {
   return { type: 'todos/addTodo', payload: {id: nanoid(), text} };
}

export const deleteTodo = id => {
    return {type: 'todos/deleteTodo' , payload: id}
}

export const addFilter = value => {
    return{type: "add/filter", payload: value}
}