import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import ProductItem from '../Component/ProductItem'
import Title from '../Component/Title'

const Contact = () => {
  const {products} = useContext(ShopContext)
  const [category,setCategory] = useState([])
  const [subCategory,setSubCategory] = useState([])
  const [filterProduct,setFilterProduct] = useState([])
  const [sortType,setSortType] = useState('relevant')

  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=>category.filter(item=>item!==e.target.value))
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
    
  }
  const toggleSubCategory = (e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>subCategory.filter(item=>item!==e.target.value))
    }
    else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }
  const sortByPrice = ()=>{
    let cpProduct = filterProduct.slice()
    switch(sortType){
      case 'low-high':
        setFilterProduct(cpProduct.sort((a,b)=>(a.price-b.price)))
        break
      case 'high-low':
        setFilterProduct(cpProduct.sort((a,b)=>(b.price-a.price)))
        break
      default:
        applyFilter()
        break
    }
  }

  useEffect(()=>{
    sortByPrice()
  },[sortType])

  const applyFilter =() =>{
    let copyProduct = products.slice()
    if(category.length>0){
      copyProduct = copyProduct.filter(item=>category.includes(item.category))
    }
    if(subCategory.length>0){
      copyProduct = copyProduct.filter(item=>subCategory.includes(item.subCategory))
    }
    setFilterProduct(copyProduct)
  }

  useEffect(()=>{
    applyFilter()
  },[category,subCategory])

  return (
    <div className='flex gap-4 mt-8 gap-x-6'>
      <div className='flex flex-col gap-y-2 w-[35%]'>
        <p className='flex text-xl'>FILTERS</p>
      <div className='border px-8 py-3'>
        <p className='flex text-sm mb-4'>CATEGORIES</p>
        <p className='flex gap-x-2'>
          <input type="checkbox" value={'Men'} onChange={toggleCategory}/>
          Men
        </p>
        <p className='flex gap-x-2'>
          <input type="checkbox" value={'Women'} onChange={toggleCategory}/>
          Women
        </p>
        <p className='flex gap-x-2'>
          <input type="checkbox" value={'Kids'} onChange={toggleCategory}/>
          Kids
        </p>
      </div>
      <div className='border px-8 py-3'>
        <p className='flex text-sm mb-4'>TYPES</p>
        <p className='flex gap-x-2'>
          <input type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/>
          Top Wear
        </p>
        <p className='flex gap-x-2'>
          <input type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/>
          Bottom Wear
        </p>
        <p className='flex gap-x-2'>
          <input type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/>
          Winter wear
        </p>
      </div>
      </div>
      
      <div className='flex flex-col gap-y-4'>
        <div className='flex justify-between'>
          <Title text1={'ALL'} text2={'COLLECTION'}/>
          <div className='flex border px-6 py-2 cursor-pointer'>
          <p>Sort by:</p>
          <select onChange={(e)=>setSortType(e.target.value)}>
            <option value="relevant" >Relevant</option>
            <option value="high-low" >High-Low</option>
            <option value="low-high" >Low-High</option>
          </select>
          </div>
        </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-2'>
        {
          filterProduct.map((item,index)=>(
            <ProductItem key={index} image={item.image} name={item.name} price={item.price} id={item._id}/>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Contact
































{/**
import React from 'react'
import Title from '../Component/Title'
import { assets } from '../assets/assets/frontend_assets/assets'
import NewsLatterBox from '../Component/NewsLatterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54983 William Station <br />Suits 350, Washington, USA</p>
          <p className='text-gray-500'>Tel: (+32) 555-3437 <br />Email: admin@forever.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLatterBox/>
    </div>
  )
}

export default Contact
 */}