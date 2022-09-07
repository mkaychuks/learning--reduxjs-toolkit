import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    todos: []
  },
  reducers:{
    setTodo: (state, action) => {
      state.todos.push(action.payload)
    }
  }
});

export const actions = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});
