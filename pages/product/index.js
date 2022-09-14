import React from 'react'
import Link from 'next/link'

const index = ({productIds=100 } ) => {
  return (
    <>
    <Link href ='/'>
      <a>Home</a>
    </Link>
    <h1> 
      <Link href = "/product/1"><a>product 1 </a></Link>
      </h1>
      <h1>
      <Link href = "/product/2"><a>product 2 </a></Link></h1>
      <h1>
   <Link href = "/product/3" replace><a>product 3 </a></Link></h1>

   <h1>
   <Link href = {`/product/${productIds}`}><a>product 100</a></Link></h1>
    </>
  )
}

export default index