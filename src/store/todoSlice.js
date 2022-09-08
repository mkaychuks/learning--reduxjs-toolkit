import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "counter",
  initialState: {
    todos: [],
  },
  reducers: {
    //  add toDo to the list of empty todo
    setTodo(state, action) {
      state.todos.push(action.payload); // add te payload to the state
    },

    // delete a todo with reference to the id
    deleteTodo(state, action) {
      const deleted = state.todos.filter((task) => task.id !== action.payload); // filter the todos, leaving out the actions ID
      state.todos = deleted; // setting the state of the todo
    },
  },
});

const todoActions = todoSlice.actions;
export { todoSlice, todoActions };
