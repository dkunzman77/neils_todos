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

  return (
    <>
      <h1>All Todos</h1>
      {allTodos.map((todo) => (
        <Todo lastName={todo.title} />
      ))}
    </>
  )
}

export default AllTodos
