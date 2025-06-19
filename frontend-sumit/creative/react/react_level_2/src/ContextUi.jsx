import React, { useContext } from 'react'
import {Plusmins} from './Context'
const ContextUi = () => {

  const {setCount} = useContext(Plusmins)
  const {minus} = useContext(Plusmins)
  const {plus} = useContext(Plusmins)
  return (
    <>
        <h1>Count:{setCount}</h1>
        <button onClick={minus}>-</button>
        <button onClick={plus}>+</button>
    </>
  )
}

export default ContextUi