import React, { useState } from 'react'
import { useTodos } from '../../hooks'
import { AllToDosComponent } from './allToDosComponent'

export const ALL = 'all'
export const COMPLETE = 'complete'
export const INCOMPLETE = 'incomplete'

/**
 * ### Page
 *
 * @summary A page that lists all todos, regardless of
 * status.
 */
const AllTodos: React.FC = () => {
  const { todos, isLoading, isError } = useTodos()
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
    component = (
      <>
        <AllToDosComponent todos={todos} show={show} />
      </>
    )
  }
  return (
    <>
      <h1 style={{ fontWeight: 800, fontSize: 24 }}>All Todos</h1>
      <br /> <br />
      <div
        style={{
          display: 'flex',
          margin: '20px',
          flexGrow: '2',
          justifyContent: 'space-between',
        }}
      >
        <button onClick={() => handleClick(ALL)}>All </button>
        <button onClick={() => handleClick(COMPLETE)}>Complete</button>
        <button onClick={() => handleClick(INCOMPLETE)}>Incomplete</button>
      </div>
      {component}
    </>
  )
}

export default AllTodos
