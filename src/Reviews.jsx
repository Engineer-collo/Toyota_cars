


function Reviews({ reviews }) {
    return (
      <div className="reviews-container">
        <h1>CLIENT REVIEWS</h1>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h2>{review.name}</h2>
            <p>{review.comment}</p>
            <p>
              <strong>Date:</strong> {new Date(review.date).toISOString().split('T')[0]}
            </p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Reviews;
  