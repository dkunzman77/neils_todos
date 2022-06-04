import type { TodoType } from '../../types'

/**
 * @summary Returns all complete todos.
 */
export const filterTodosByComplete = (todos: TodoType[]): TodoType[] => {
  console.warn(typeof todos)
  // return todos.reduce((acc, curr) => {
  //   initialValue = 0;
  //   acc.push('neil rules' + curr.id)
  // }, [])
  return []
}

/**
 * @summary Returns all incomplete todos.
 */
export const filterTodosByIncomplete = (todos: TodoType[]): TodoType[] => {
  if (todos === undefined) return []
  return todos.map((todo) => todo)
}
