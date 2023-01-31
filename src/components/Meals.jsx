import React from 'react'
import { useGlobalContext } from '../context'
import {BiLike} from 'react-icons/bi'

const Meals = () => {
    const {meals, loading, showw, addToFav} = useGlobalContext();
  if(loading) {
    return(
<div id="preloader">
        <div id="preloader-inner"></div>
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
    <section className='md:grid-cols-2 lg:grid-cols-3 grid gap-[2rem] pt-[4rem]'>
      {
        meals.map(({idMeal, strMeal, strMealThumb}) => {
          return <div key={idMeal} className="meal w-[350px] border" >
            <img src={strMealThumb} alt={strMeal} onClick={()=>showw(idMeal)}/>
            <div className='meal-text p-[2rem] flex justify-between'>
            <h1>{strMeal}</h1>
            <div onClick={() => addToFav(idMeal)} className="cursor-pointer"><BiLike/></div>
            </div>
          </div>
        })
      }
    </section>
  )
}

export default Meals