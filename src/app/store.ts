import { configureStore } from "@reduxjs/toolkit";
// reducers
import counterReducer from "../slices/counter/counterSlice";
import toDoReducer from "../slices/todo/todoSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    toDos: toDoReducer,
  },
});

// Infer both RootState and AppDispatch TYPES from the store itself so that they will correctly infer the available slice written inside the above reducer
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
