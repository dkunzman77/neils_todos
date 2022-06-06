import React from 'react'
import { TodosContext } from './TodosProvider'

/**
 * @summary Exposes requested Todos and status props (isError, isLoadingm, etc)
 * and also provides a few filter functions to modify the todo state.
 */
export const useTodos = () => {
  const [state] = React.useContext(TodosContext)

  return {
    ...state,
  }
}
