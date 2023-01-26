import React from 'react'
import { useGlobalContext } from '../context'

const Meals = () => {
    const {meals, loading, setShowModal} = useGlobalContext();
  if(loading) {
    return(
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  if(meals < 1) {
    return(
      <div>
        <h1>Sorry no food was found.</h1>
      </div>
    )
  }
  return (
    <section className='grid-cols-3 grid gap-[2rem]'>
      {
        meals.map(({idMeal, strMeal, strMealThumb}) => {
          return <div key={idMeal} className="meal w-[350px] border" onClick={showw}>
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