import React from 'react'

const Badge = ({titel}) => {
  return (
    <span className=" bg-black text-white text-xs sm:text-base py-2 px-7 absolute top-5 left-5">{titel}</span>
  )
}

export default Badge