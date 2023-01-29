import React from 'react'
import { useGlobalContext } from '../context'

const Modal = () => {
  const {setShowModal, selectedMeal} = useGlobalContext()
  const close = () => {
    setShowModal(false)
  }
  const {idMeal, strMeal,strMealThumb} = selectedMeal
  return (
    <div className='w-full h-[100vh] bg-[green] fixed top-0 flex'>
      <div className='w-[70%] h-[50%] bg-[red] m-auto rounded-lg' >
        <img src={strMealThumb} alt="" />
        <h1>{strMeal}</h1>
        <p></p>
        <button className='p-[1rem]' onClick={close}>close</button>
      </div>
    </div>
  )
}

export default Modal