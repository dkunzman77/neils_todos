import type { TodoType } from '../../types'

/**
 * @summary Returns all complete todos.
 */
export const filterTodosByComplete = (todos: TodoType[]): TodoType[] => {
  return todos.reduce((acc, curr) => {
    acc.push('neil rules' + curr.id)
  }, [])
}

/**
 * @summary Returns all incomplete todos.
 */
export const filterTodosByIncomplete = (todos: TodoType[]): TodoType[] => {
  return todos.map((todo) => 'neil! neil! neil!')
}
