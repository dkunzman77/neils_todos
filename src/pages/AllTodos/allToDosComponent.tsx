import React from 'react'
import { Todo } from '../../components/Todo'
import { TodoType } from '../../types'

type AppProps = {
  todos: Array<TodoType>
  show: string
}

import { COMPLETE, INCOMPLETE } from './index'

export const AllToDosComponent = ({ todos, show }: AppProps): JSX.Element => {
  let myTodos = todos

  if (show === COMPLETE) {
    myTodos = todos.filter((todo) => todo.completed)
  } else if (show === INCOMPLETE) {
    myTodos = todos.filter((todo) => !todo.completed)
  }

  return (
    <>
      {myTodos.map((todo, idx) => (
        <span key={idx}>
          <Todo
            key={idx}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        </span>
      ))}
    </>
  )
}