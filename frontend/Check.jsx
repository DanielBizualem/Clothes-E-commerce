import React from 'react'
import { products } from './src/assets/assets/frontend_assets/assets'

const Check = () => {
  const applyFilter = (e)=>{
    let copyProduct = products.slice()
    copyProduct = copyProduct.filter(item=>category.include(e.target.value))
  }
  return (
    <div>Check</div>
  )
}

export default Check