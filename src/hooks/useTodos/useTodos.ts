import React from 'react'
import { TodosContext } from './TodosProvider'
import { TodosStateType } from './types'
import * as fromUtils from './utils'

/**
 * @summary Exposes requested Todos and status props (isError, isLoadingm, etc)
 * and also provides a few filter functions to modify the todo state.
 */
export const useTodos = () => {
  const [state, setState] = React.useContext(TodosContext)

  /**
   * @summary Returns all complete todos.
   */
  const filterTodosByComplete = (args: TodosStateType) => {
    //setState((args) => {
    return {
      isLoading: false,
      isError: false,
      todos:
        args.allTodos === undefined
          ? []
          : fromUtils.filterTodosByComplete(args.allTodos),
      allTodos: args.allTodos,
    }
  }
  /**
   * @summary Returns all incomplete todos.
   */
  const filterTodosByIncomplete = (args: TodosStateType) => {
    //setState((args) => {
    return {
      isLoading: false,
      isError: false,
      todos:
        args.allTodos === undefined
          ? []
          : fromUtils.filterTodosByIncomplete(args.allTodos),
      allTodos: args.allTodos,
    }
  }

  return {
    ...state,
    filterTodosByComplete,
    filterTodosByIncomplete,
  }
}
