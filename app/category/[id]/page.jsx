import { allCategory } from '@/public/assets'
import Image from 'next/image';
import React from 'react'

const page = ({params}) => {
    const filteredItem = allCategory.find((item) => item.id === params.id);
  return (
    <div>
      <Image src={filteredItem.image}/>
      <h3>{filteredItem.title}</h3>
    </div>
  )
}

export default page
