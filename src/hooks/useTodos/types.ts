import type React from 'react'
import type { TodoType } from '../../types'

export type TodosStateType =
  | {
      isLoading: true
      isError: false
      todos: undefined
      allTodos: undefined
    }
  | {
      isLoading: false
      isError: false
      /**
       * A property for filtered Todo items.
       */
      todos: TodoType[]
      /**
       * A property where all todo items can be added.
       * Not intended to be manipulated.
       */
      allTodos: TodoType[]
    }
  | {
      isLoading: false
      isError: true
      todos: undefined
      allTodos: undefined
    }

export type TodosContextType = [
  TodosStateType,
  React.Dispatch<React.SetStateAction<TodosStateType>>
]
