import React, { useState } from 'react'
import { useTodos } from '../../hooks'
import { AllToDosComponent } from './allToDos'
/**
 * ### Page
 *
 * @summary A page that lists all todos, regardless of
 * status.
 */
const AllTodos: React.FC = () => {
  const { allTodos, todos, isLoading, isError } = useTodos()
  console.warn(allTodos)
  console.warn(todos)
  const [show, setShow] = useState('all')

  const handleClick = (value: string) => {
    setShow(value)
  }
  let component: JSX.Element[] | JSX.Element = <></>

  if (isLoading) {
    component = <h2>Loading...</h2>
  } else if (isError) {
    component = <h2>Error...</h2>
  } else {
    switch (show) {
      case 'all':
        component = (
          <>
            <AllToDosComponent todos={todos} />
          </>
        )
        break
      // case 'complete':
      //   component = <CompleteToDosComponent todos={todos} />
      //   break
      // case 'incomplete':
      //   component = <InCompleteToDosComponent todos={todos} />
      //   break
    }
  }
  return (
    <>
      <h1 style={{ fontWeight: 800, fontSize: 24 }}>All Todos</h1>
      <br /> <br />
      <div>
        <button onClick={() => handleClick('all')}>All </button>
        <button onClick={() => handleClick('complete')}>Complete</button>
        <button onClick={() => handleClick('incomplete')}>Incomplete</button>
      </div>
      {component}
    </>
  )
}

export default AllTodos
