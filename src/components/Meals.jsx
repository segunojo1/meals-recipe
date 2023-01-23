import React from 'react'
import { useGlobalContext } from '../context'

const Meals = () => {
    const {meals} = useGlobalContext();

  return (
    <section>

      {
        meals.map(({idMeal, strMeal, strMealThumb}) => {
          return <div key={idMeal}>
            <img src={strMealThumb} alt={strMeal} />
            <h1>{strMeal}</h1>
          </div>
        })
      }
    </section>
  )
}

export default Meals