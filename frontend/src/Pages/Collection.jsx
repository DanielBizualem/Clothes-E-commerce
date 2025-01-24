import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets, products } from '../assets/assets/frontend_assets/assets'
import Title from '../Component/Title'
import ProductItem from '../Component/ProductItem'

const Collection = () => {
  const {products,search, showSearch} = useContext(ShopContext)
  const [showFilter,setShowFilter] = useState(false)
  const [filterProduct,setFilterProduct] = useState([])
  const [category,setCategory] = useState([])
  const [subCategory,setSubCategory] = useState([])
  const [sortType,setSortType] = useState('relevant')

  const sortByProduct = ()=>{
    let fpCopy = filterProduct.slice()
    switch(sortType){
      case 'low-high':
        setFilterProduct(fpCopy.sort((a,b)=>(a.price-b.price)))
        break
      case 'high-low':
        setFilterProduct(fpCopy.sort((a,b)=>b.price-a.price))
        break
      default:
        applyFilter()
        break
    }
  }


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
      setSubCategory(prev=>subCategory.filter(item=>subCategory.includes(item.category)))
    }else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }

  const applyFilter = ()=>{
    let CopyProducts = products.slice()
    if(search&&showSearch){
      CopyProducts = CopyProducts.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length>0){
      CopyProducts = CopyProducts.filter(item=>category.includes(item.category))
    }
    
    if(subCategory.length>0){
      CopyProducts = CopyProducts.filter(item=>subCategory.includes(item.subCategory))
    }

    setFilterProduct(CopyProducts)
  }
  useEffect(()=>{
    sortByProduct()
  },[sortType])

  useEffect(()=>{
    applyFilter()
  },[category,subCategory,search, showSearch])

  useEffect(()=>{
    setFilterProduct(products)
  },[])
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/**All collection page */}
      <div className="min-w-60">
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2' onClick={()=>setShowFilter(!showFilter)}>FILTERS
        <img className={`h-3 sm:hidden ${showFilter?'rotate-90':''}`} src={assets.dropdown_icon} alt="" />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATAGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3 cursor-pointer' type="checkbox" value={'Men'} onChange={toggleCategory}/>
              Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3 cursor-pointer' type="checkbox" value={'Women'} onChange={toggleCategory}/>
              Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3 cursor-pointer' type="checkbox" value={'Kids'} onChange={toggleCategory}/>
              Kids
            </p>
          </div>
        </div>
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3 cursor-pointer' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/>
              Top Wear
            </p>
            <p className='flex gap-2'>
              <input className='w-3 cursor-pointer' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/>
              Bottom Wear
            </p>
            <p className='flex gap-2'>
              <input className='w-3 cursor-pointer' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/>
              Winter wear
            </p>
          </div>
        </div>
      </div>

      {/**right side of the page */}
      <div className="flex-1">
        {/**Top side of right side of the page */}
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'}></Title>

          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2 cursor-pointer'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: low-high</option>
            <option value="high-low">Sort by: high-low</option>
          </select>
        </div>
        {/**Bottom down of the right side page */}

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-flow-cols-4 lg:grid-cols-4 gap-2'>
          {/** when he mapped filterProduct he also update the product,in which we get only by object, which means only
          information, but now its assigned into ProductItem. This is called pass by reference!*/}
          {
            filterProduct.map((item,index)=>(
              <ProductItem key={index} name={item.name} image={item.image} id={item._id} price={item.price}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection