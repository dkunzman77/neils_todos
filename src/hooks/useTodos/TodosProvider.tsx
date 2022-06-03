import React from 'react'
import type * as fromTypes from './types'

type Props = {
  children: React.ReactNode
}

const defaultContext: fromTypes.TodosContextType = [
  {
    isLoading: true,
    isError: false,
    todos: undefined,
    allTodos: undefined,
  },
  () => null,
]

export const TodosContext =
  React.createContext<fromTypes.TodosContextType>(defaultContext)

/**
 * @summary Requests todos when the provider is initialized and stores them in state.
 */
export const TodosProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = React.useState<fromTypes.TodosStateType>(
    defaultContext[0]
  )

  React.useEffect(() => {
    ;(async () => {
      try {
        const todos = await (
          await fetch('https://jsonplaceholder.typicode.com/todos')
        ).json()
      } catch (err) {}
    })()
  }, [])

  return (
    <TodosContext.Provider value={[state, setState]}>
      {children}
    </TodosContext.Provider>
  )
}
