import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({toDoList}) {
  return (
    <div>
        {
            toDoList.map((todo) => (
            <ToDo key={todo.id} todo={todo}/>
            ))
        }
    </div>
  )
}
