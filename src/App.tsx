/**
 * This is your application root.
 */
import React from 'react'
import * as fromComponents from './components'
import AllTodos from './pages/AllTodos'
import { TodosProvider } from './hooks'

export default function App() {
  return (
    <>
      <fromComponents.Header />
      <TodosProvider>
        <fromComponents.Layout>
          <AllTodos />
        </fromComponents.Layout>
      </TodosProvider>
    </>
  )
}
