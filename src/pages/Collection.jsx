import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [ShowFilter, setShowFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row items-center gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'></div>
      <p 
        className='my-2 text-xl flex items-center cursor-pointer gap-2' 
        onClick={() => setShowFilter(!ShowFilter)}
      >
        FILTERS
      </p>
      <div className={`border border-gray-300 pl-5 py-3 mt-6 w-full sm:w-1/3 ${ShowFilter ? 'block' : 'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <label className='flex gap-2'>
            <input className='w-3' type="checkbox" value="MEN" /> Men
          </label>
          <label className='flex gap-2'>
            <input className='w-3' type="checkbox" value="WOMEN" /> Women
          </label>
          <label className='flex gap-2'>
            <input className='w-3' type="checkbox" value="KIDS" /> Kids
          </label>
        </div>
      </div>
    </div>
  )
}

export default Collection;
