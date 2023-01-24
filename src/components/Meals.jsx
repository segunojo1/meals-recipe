import React from 'react'
import { useGlobalContext } from '../context'

const Meals = () => {
    const {meals} = useGlobalContext();

  return (
    <section>
      {
        meals.map(({idMeal, strMeal, strMealThumb}) => {
          return <div key={idMeal} className="meal">
            <img src={strMealThumb} alt={strMeal} />
            <div className='meal-text'>
            <h1>{strMeal}</h1>
            </div>
          </div>
        })
      }
    </section>
  )
}

export default Meals