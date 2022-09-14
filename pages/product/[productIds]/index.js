import React from 'react'
import {useRouter} from 'next/router'

const ProductDetails = () => {
    const router = useRouter();
    const productIds = router.query.productIds
  return (
    <div> Details About Product {productIds} </div>
  )
}

export default ProductDetails