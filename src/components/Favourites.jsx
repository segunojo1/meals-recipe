import React from 'react'
import { useGlobalContext } from '../context'

const Favourites = () => {
  const {favourites, removeFav, showw} = useGlobalContext()
  return (
    <div className='pt-[7rem] bg-black w-full flex gap-[1rem] p-[2rem]'>{
      favourites.map(({idMeal, strMealThumb}) => {
        return(
          <div className=''>
          <img src={strMealThumb} alt="hfj" className='w-[60px] rounded-full' onClick={() => showw(idMeal)}/>
          <p onClick={()=>removeFav(idMeal)} className="text-white cursor-pointer">remove</p>
        </div>
        )
      })
    }</div>
  )
}

export default Favourites