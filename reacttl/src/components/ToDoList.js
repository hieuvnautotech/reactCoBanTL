import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({toDoList, onCheckBtnClick}) {
  return (
    <>
        {
            toDoList.map((todo) => (
            <ToDo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick}/>
            ))
        }
    </>
  )
}
