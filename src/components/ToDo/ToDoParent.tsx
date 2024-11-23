import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import TodoModel from "../../models/todoModel";
import ToDoList from "./ToDoList";
import { nanoid } from "nanoid";
import { toDoAdd } from "../../slices/todo/todoSlice";
import { ADD_TODO } from "../../constants/ToDoConstant";

const ToDoParent = () => {
  // reducer values
  const toDoMockListFromStore = useAppSelector(
    (state: RootState) => state.toDos
  );
  // dispatcher
  const dispatch = useAppDispatch();
  // state
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState<TodoModel[]>([]);
  const inputElement = useRef<HTMLInputElement | null>(null);

  // handleSubmit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const addNewToDo: TodoModel = {
      todo: toDo,
      id: nanoid(),
      isDone: false,
    };
    dispatch(toDoAdd(addNewToDo));
    setToDo('');
  }; 

  // effect for focusing input field
  useEffect(() => {
    setToDoList(toDoMockListFromStore);
    inputElement?.current?.focus();
  }, [toDoMockListFromStore]);

  return (
    <>
      <h2>TODO LIST - at your pocket</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          ref={inputElement}
        />
        <button type="submit">{ADD_TODO}</button>
      </form>
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
    </>
  );
};

export default ToDoParent;
