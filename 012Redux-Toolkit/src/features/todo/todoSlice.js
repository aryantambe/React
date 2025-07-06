import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello world",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, //payload is an object
      }
      state.todos.push(todo)
    }, //You can also give reference of the function here instead of defining it here, that is also valid
    removeTodo: (state,action) => {
         state.todos=state.todos.filter((todo)=>todo.id!==action.payload) 
    },
  },
});

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer