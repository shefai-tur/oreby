import React from 'react'

const InputBox = (props) => {
  return (
    <div className=' mb-6'>
      <h2 className=' font-dm font-bold text-base text-[#262626] placeholder:font-dm placeholder:text-sm placeholder:text-[#767676] '>{props.title}</h2>
      <props.as placeholder={props.placeholder} className=" border-b border-[#F0F0F0] py-4 w-[50%] outline-0 resize-none"/>
    </div>
  )
}

export default InputBox