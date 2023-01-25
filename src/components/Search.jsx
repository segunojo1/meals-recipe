import React, { useState } from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
  const [inp, setInp]= useState('');
  const { setSearch} = useGlobalContext()
  const handleChange = (e) => {
    setInp(e.target.value)
    setSearch(inp)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inp){
      setSearch(inp)
    }
  }
  return (
    <div className='w-full bg-[red] h-[5rem]  fixed '>
      <div className='flex items-center h-[5rem] ml-[4rem]'>
      <form action="" className='flex gap-[1rem]' onSubmit={handleSubmit}>
        <input type="text" className='p-[1rem] h-[2.5rem] border rounded-md' placeholder='type your favourite meal' onChange={handleChange}/>
        <button type="submit" className='px-[1rem] bg-[blue] rounded-md text-white'>Submit</button>
        <button className='px-[1rem] bg-[aqua] rounded-md'>Random Meal</button>
      </form>
      </div>
    </div>
  )
}

export default Search