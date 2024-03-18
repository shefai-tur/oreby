import React from 'react'
import LeftsSdbarContent from '../LeftsSdbarContent'
import { Category, colors, brands, Prices  } from '../data/data'
const Leftsidbarshop = () => {

  return (
    <>
    <LeftsSdbarContent Dropdown={true} title={"Shop by Category"} data={Category} />
    <LeftsSdbarContent Dropdown={true} title={"Shop by Color"} data={colors}/>
    <LeftsSdbarContent Dropdown={true} title={"Shop by Brand"}  data={brands}/>
    <LeftsSdbarContent Dropdown={false} title={"Shop by Brand"}  data={Prices}/> 
  
    </>
  )
}

export default Leftsidbarshop