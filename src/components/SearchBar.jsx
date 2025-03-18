import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const SearchBar = () => {
    const {search,setSearch,showSearch,serShowSearch} = useContext(ShopContext);
  return  showSearch ? (
    <div>
      <div>
        
      </div>

    </div>
  )
}

export default SearchBar