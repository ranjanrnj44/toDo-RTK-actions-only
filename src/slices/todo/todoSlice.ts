import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TodoModel from "../../models/todoModel";
import toDoMock from "../../mocks/toDoMock";

// initialState
const initialState: TodoModel[] = toDoMock;

// interface
interface EditToDoModel {
  editToDo: string;
  toDoId: string;
}

const toDoSlice = createSlice({
  name: "toDoSlice",
  initialState,
  reducers: {
    // add toDo to the existing TODO LIST
    toDoAdd: (state, action: PayloadAction<TodoModel>) => {
      return (state = [...state, action.payload]);
    },
    // delete toDo from the TODO LIST
    toDoDelete: (state, action: PayloadAction<string>) => {
      const remainingToDo = state.filter((todo) => todo.id !== action.payload);
      return remainingToDo;
    },
    // update toDo in the existing TODO LIST
    toDoUpdate: (state, action: PayloadAction<EditToDoModel>) => {
      const editedToDo = state?.map((toDo) =>
        toDo.id === action?.payload?.toDoId
          ? { ...toDo, todo: action?.payload?.editToDo }
          : toDo
      );
      return editedToDo;
    },
    // update checkbox state and make it STRIKE-THROUGH or just STRING in the TODO LIST (Based on BOOLEAN value)
    toDoCheckBox: (state, action: PayloadAction<string>) => {
      const updateCheckBoxData = state?.map((toDo) =>
        toDo.id === action?.payload ? { ...toDo, isDone: !toDo?.isDone } : toDo
      );
      return updateCheckBoxData;
    },
  },
});

export const { toDoAdd, toDoDelete, toDoUpdate, toDoCheckBox } =
  toDoSlice.actions;
export default toDoSlice.reducer;
