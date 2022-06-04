import React from 'react'
import { Todo } from '../../components/Todo'
import { useTodos } from '../../hooks'

/**
 * ### Page
 *
 * @summary A page that lists all todos, regardless of
 * status.
 */
const AllTodos: React.FC = () => {
  const { allTodos, isLoading, isError } = useTodos()
  console.warn(allTodos)

  return (
    <>
      <h1 style={{ fontWeight: 800, fontSize: 24 }}>All Todos</h1>
      <br /> <br />

      {allTodos &&
        !isError &&
        !isLoading &&
        allTodos.map((todo, idx) => (
          <Todo
            key={idx}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
    </>
  )
}

export default AllTodos
