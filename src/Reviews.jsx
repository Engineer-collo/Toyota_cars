import React, { useState } from 'react'
import { useEffect } from 'react'
import './Reviews.css'
import { Link } from 'react-router-dom'


const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:8001/comments')
        .then((response) => response.json())
        .then((data) => setReviews((data)))
        .catch((error) => console.error('Error fetching reviews', error))
    }, [])


  return (
    <div className='reviews'>
        <hr />
        <h1>Reviews</h1>
        {reviews.length === 0 ? (
            <p>No Reviews available</p>
        ) : (
            <ul>
                {reviews.map((review) => 
                    <li key={review.id}>
                        {review.body}
                    </li>
                )}
            </ul>
        )} 
        <Link to='/comments'>    
            <button>Leave A Review</button>
        </Link> 
    </div>
  )
}

export default Reviews