import React from 'react'
import Heading from './Heading'
import Container from './Container'
import Flex from './Flex'
import Product from './Product'

const NewArrivals = () => {
  return (
    <Container>
       <div className=" mt-10 lg:mt-32">
       <Heading titel="New Arrivals"/>
        <Flex className=" flex flex-wrap justify-between gap-y-10">
            <div className= " max-w-[165px] sm:max-w-[310px] md:max-w-[355px]  lg:max-w-[230px] xl:max-w-[370px]">
                <Product src="assets/images/product1.png" badge={false}/>
            </div>
            <div className= "max-w-[165px] sm:max-w-[310px] md:max-w-[355px] lg:max-w-[230px] xl:max-w-[370px]">
            <Product src="assets/images/product2.png" badge={true}/>
            </div>
            <div className= " max-w-[165px] sm:max-w-[310px] md:max-w-[355px] lg:max-w-[230px] xl:max-w-[370px]">
            <Product src="assets/images/product3.png" badge={true}/>
            </div>
            <div className= " max-w-[155px] sm:max-w-[310px] md:max-w-[355px] lg:max-w-[230px] xl:max-w-[370px]">
            <Product src="assets/images/product4.png" badge={true}/>
            </div>
           
            
        </Flex>
       </div>
    </Container>
  )
}

export default NewArrivals