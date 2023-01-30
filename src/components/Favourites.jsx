import React from 'react'
import { useGlobalContext } from '../context'

const Favourites = () => {
  const {favourites, removeFav} = useGlobalContext()
  return (
    <div className='pt-[7rem] bg-black w-full'>{
      favourites.map((fav) => <div>
        <img src={fav.strMealThumb} alt="hfj" />
        <p onClick={removeFav}>remove</p>
      </div>)
    }</div>
  )
}

export default Favourites