import React from 'react'
import { useGlobalContext } from '../context'

const Modal = () => {
  const {setShowModal, selectedMeal} = useGlobalContext()
  const close = () => {
    setShowModal(false)
  }
  const {idMeal, strMeal,strMealThumb, strInstructions, strSource} = selectedMeal
  return (
    <div className='w-full h-[100vh] bg-[grey] fixed top-0 flex'>
      <div className='min-w-[70%] h-[80%] bg-[red] m-auto rounded-lg overflow-scroll' >
        <img src={strMealThumb} alt="" className='w-full h-[15rem] object-cover'/>
        <h1 className='font-bold text-2xl'>{strMeal}</h1>
        <p>Cooking Instructions</p>
        <p>{strInstructions}</p>
        <a href={strSource}></a>
        <button className='p-[1rem]' onClick={close}>close</button>
      </div>
    </div>
  )
}

export default Modal