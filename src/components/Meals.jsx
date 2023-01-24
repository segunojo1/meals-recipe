import React from 'react'
import { useGlobalContext } from '../context'

const Meals = () => {
    const {meals, loading} = useGlobalContext();

  return (
    <section className='grid-cols-3 grid gap-[2rem]'>
      {
        loading ? <div>Loading</div> :
        meals.map(({idMeal, strMeal, strMealThumb}) => {
          return <div key={idMeal} className="meal w-[350px] border">
            <img src={strMealThumb} alt={strMeal} />
            <div className='meal-text p-[2rem]'>
            <h1>{strMeal}</h1>
            </div>
          </div>
        })
      }
    </section>
  )
}

export default Meals