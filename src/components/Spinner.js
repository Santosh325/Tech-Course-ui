import React from 'react'
import './Spinner.css';
export const Spinner = () => {
  return (
    <div className='flex space-y-2 items-center  justify-center mx-auto flex-col'>
        <div className='spinner'></div>
        <p className='text-lg font-semibold text-bgDark'>Loading...</p>
    </div>
  )
}
export default Spinner;
