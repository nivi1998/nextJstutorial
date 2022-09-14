import React from 'react'
import { useRouter } from 'next/router'

const review = () => {
    const router = useRouter()
    const {productIds, reviewId}  = router.query
  return (
    <div>review {reviewId} for product {productIds} </div>
  )
}

export default review