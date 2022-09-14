import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const HomePage = () => {
  const router = useRouter()

   const handleClick = () => {
    console.log("placing your order")
    router.push('/product')
   }
  return (
    <div>
    <h1>home Page</h1>
    <Link href='/blog' >
    <a>Blog</a>
    </Link><br />
    <Link href='/product'>
    <a>Product</a>
    </Link>
    <br />
    <button onClick={handleClick}>Place order</button>
    </div>

  )
}

export default HomePage