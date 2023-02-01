import React, { useState } from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
  const [inp, setInp]= useState('');
  const { setSearch, getRandom} = useGlobalContext()
  const handleChange = (e) => {
    setInp()
    setSearch(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inp){
      setSearch(inp)
    }
  }
  return (
    <div className='w-full bg-white p-[1rem] min-h-[5rem]  fixed z-index-99'>
      <div className='flex items-center min-h-[5rem] md:ml-[4rem] justify-center'>
      <form action="" className='md:flex grid gap-[1rem] ' onSubmit={handleSubmit}>
      <div className='flex gap-[1rem]'>
        <input type="text" className='p-[1rem] h-[2.5rem] border rounded-md' placeholder='type your favourite meal' onChange={handleChange}/>
        <button type="submit" className='px-[1rem] bg-[#03449d] rounded-md text-white'>Submit</button>
      </div>
        <button className='px-[1rem] h-[2.5rem] bg-[#b4d3fe] rounded-md' onClick={getRandom}>Random Meal</button>
      </form>
      </div>
    </div>
  )
}

export default Search