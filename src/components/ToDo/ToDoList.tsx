import React from 'react'
import TodoModel from '../../models/todoModel'
import ToDoSingle from './ToDoSingle'

interface ToDoListProps {
    toDoList: TodoModel[],
    setToDoList: React.Dispatch<React.SetStateAction<TodoModel[]>>,
}
const ToDoList = ({toDoList, setToDoList}: ToDoListProps) => {
  return (
    <div>
    {
        toDoList?.map((toDo) => <ToDoSingle key={toDo.id} toDo={toDo} />) // Each TODO 
    }
    </div>
  )
}

export default ToDoList