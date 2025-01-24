import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets/frontend_assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext)
    const Location = useLocation()
    const [visible,setVisible] = useState(false)

    useEffect(()=>{
        if(Location.pathname.includes('collection')&&showSearch){
            setVisible(true)
        }else{
            setVisible(false)
        }
    },[Location])

  return showSearch && visible ?(
    <div className='border-t border-b text-center bg-gray-50'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
            <img className='w-4' src={assets.search_icon} alt="" />
        </div>
        <img onClick={()=>setShowSearch(false)} className='w-3 inline cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  ):null
}

export default SearchBar