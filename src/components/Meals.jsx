import React from 'react'
import { useGlobalContext } from '../context'

const Meals = () => {
    const {meals} = useGlobalContext();

  return (
    <section>

      {
        meals.map(meal => {
          return <h1>m</h1>
        })
      }
    </section>
  )
}

export default Meals