import React, { useState } from 'react'
import { ReviewAPI } from '../../Backend/Axios'

// Review Button
function Btn1(props) {
  const [ReviewList, setReviewList] = useState([])
  const [ProductID, setProductID] = useState(0)

  const ReviewBtn = () => {
    ReviewAPI.get(`/product/review/${ProductID}`)
      .then(data =>{
        const DataList = Array.from(ReviewList)
        setReviewList(DataList)
      })
      .catch(error => {
        console.log(error)
        alert("리뷰 정보를 받아오지 못하였습니다.")
      })
  }

  

  return (
    <>
    
    </>
  )
}

export default Btn1