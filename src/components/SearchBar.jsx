import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  return showSearch ? (
    <div className="border-t border-b bg-gray-50 text-center p-4 relative">
      <div className="inline-flex items-center justify-between border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        {/* Search Input */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="flex-1 outline-none bg-inherit text-sm pl-2 pr-6 focus:ring-2 focus:ring-blue-400"
          placeholder="Search"
        />
        {/* Search Icon */}
        <img
          src={assets.search_icon}
          className="w-5 h-5 absolute right-2"
          alt="Search Icon"
        />
      </div>

      {/* Close Icon */}
      <img
        onClick={() => setShowSearch(false)}
        className="absolute top-4 right-4 w-5 h-5 cursor-pointer hover:scale-105 transform transition duration-200"
        src={assets.cross_icon}
        alt="Close Search"
      />
    </div>
  ) : null;
};

export default SearchBar;
