import React from 'react'
import { useGlobalContext } from '../context'

const Meals = () => {
    const con = useGlobalContext()
    console.log(con);
  return (
    <div>Meals</div>
  )
}

export default Meals