import React from 'react'
import { useGlobalContext } from '../context'

const Favourites = () => {
  const {favourites, removeFav, showw} = useGlobalContext()
  return (
    <div className='pt-[9rem] bg-black w-full grid gap-[1rem] p-[2rem] sm:flex sm:grid-cols-0 grid-cols-4'>{
     
      favourites.map(({idMeal, strMealThumb}) => {
        return(
          <div className=''>
          <img src={strMealThumb} alt="hfj" className='w-[60px] rounded-full border-white-500 border-4' onClick={() => showw(idMeal)}/>
          <p onClick={()=>removeFav(idMeal)} className="text-white cursor-pointer">remove</p>
        </div>
        )
      })
    }</div>
  )
}

export default Favourites