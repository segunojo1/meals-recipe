import React from 'react'
import { useGlobalContext } from '../context'

const Modal = () => {
  const {setShowModal, selectedMeal} = useGlobalContext()
  const close = () => {
    setShowModal(false)
  }
  const {idMeal, strMeal,strMealThumb, strInstructions} = selectedMeal
  return (
    <div className='w-full h-[100vh] bg-[green] fixed top-0 flex'>
      <div className='min-w-[70%] h-[80%] bg-[red] m-auto rounded-lg overflow-scroll' >
        <img src={strMealThumb} alt="" className='w-full h-[15rem] object-cover'/>
        <h1>{strMeal}</h1>
        <p>{strInstructions}</p>
        <button className='p-[1rem]' onClick={close}>close</button>
      </div>
    </div>
  )
}

export default Modal