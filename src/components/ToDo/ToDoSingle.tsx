import React, { useEffect, useRef, useState } from "react";
import TodoModel from "../../models/todoModel";
import {
  DELETE_BUTTON,
  EDIT_BUTTON,
  SAVE_BUTTON,
} from "../../constants/ToDoConstant";
import { toDoCheckBox, toDoDelete, toDoUpdate } from "../../slices/todo/todoSlice";
import { useAppDispatch } from "../../app/hooks";

// model for ToDoSingleProps
interface ToDoSingleProps {
  toDo: TodoModel;
}

const ToDoSingle = ({ toDo }: ToDoSingleProps) => {
  // state
  const [editToDo, setEditToDo] = useState<string>(toDo.todo);
  const [isEdit, setIsEdit] = useState(false);
  // dispatch events
  const dispatch = useAppDispatch();
  // refs
  const editRef = useRef<HTMLInputElement>(null)

  // handleUpdate
  const handleUpdate = (editToDo: string, toDoId: string) => {
    console.log("editToDo: ", editToDo , "toDoId: ", toDoId);
    dispatch(toDoUpdate({editToDo, toDoId}));
    setIsEdit((prev) => !prev);
  };

  // handleCheckBoxUpdate
  const handleCheckBoxUpdate = (toDoId: string) => {
    dispatch(toDoCheckBox(toDoId))
  }

  // effect focus if Edit is TRUE
  useEffect(() => {
    editRef?.current?.focus();
  }, [isEdit])

  return (
    <>
      <div>
        {isEdit ? (
          <input
            type="text"
            value={editToDo}
            onChange={(event) =>
              setEditToDo(event?.target.value)
            }
            ref={editRef}
          />
        ) : (
          toDo?.isDone ? <s><h4>{toDo.todo}</h4></s> : <h4>{toDo.todo}</h4>
        )}
        {isEdit ? (
          <button
            type="button"
            onClick={() => handleUpdate(editToDo, toDo?.id ?? '')}
          >
            {SAVE_BUTTON}
          </button>
        ) : (
          <>
            <input type="checkbox" checked={toDo?.isDone} onChange={() => handleCheckBoxUpdate(toDo?.id ?? '')} />
            <button onClick={() => dispatch(toDoDelete(toDo?.id || ""))}>
              {DELETE_BUTTON}
            </button>
            <button onClick={() => setIsEdit((prev) => !prev)}>
              {EDIT_BUTTON}
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default ToDoSingle;
