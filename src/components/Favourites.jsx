import React from 'react'
import { useGlobalContext } from '../context'

const Favourites = () => {
  const {favourites, removeFav} = useGlobalContext()
  return (
    <div className='pt-[7rem] bg-black w-full'>{
      favourites.map((fav) => {
        const {idMeal, strMealThumb} = fav
        return(
          <div key={idMeal}>
          <img src={strMealThumb} alt="hfj" />
          <p onClick={()=>removeFav(idMeal)}>remove</p>
        </div>
        )
      })
    }</div>
  )
}

export default Favourites