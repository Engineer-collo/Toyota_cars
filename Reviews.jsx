import React, { useState, useEffect } from "react";

function Reviews() {
  // State to store the list of reviews fetched from the server
  const [reviews, setReviews] = useState([]);

  // State to store the form input values (name and comment)
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });

  // Fetch existing reviews from the server when the component mounts
  useEffect(() => {
    console.log("Fetching reviews...");
    fetch("http://localhost:8001/reviews") // API call to get reviews
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => {
        console.log("Fetched reviews:", data);
        setReviews(data); // Update state with the fetched reviews
      })
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  // Function to handle changes in the form fields
  function handleChange(e) {
    setFormData({
      ...formData, // Spread the existing form data
      [e.target.name]: e.target.value, // Update the field that changed
    });
  }

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevents the default form submission behavior

    // Create a new review object with the current date
    const newReview = {
      ...formData, // Copy existing form data (name, comment)
      date: new Date().toISOString().split("T")[0], // Add current date (YYYY-MM-DD)
    };

    console.log("Submitting review:", newReview);

    // Send the new review to the server
    fetch("http://localhost:8001/reviews", {
      method: "POST", // Send a POST request to add a new review
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview), // Convert data to JSON format
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit review."); // Handle any errors
        }
        return response.json();
      })
      .then((addedReview) => {
        console.log("Review added successfully!", addedReview);
        setReviews([...reviews, addedReview]); // Update the reviews list with the new review
        setFormData({
          name: "", // Reset the form fields after submission
          comment: "",
        });
      })
      .catch((error) => console.error("Error adding review:", error));
  }

  return (
    <div className="reviews-container">
      <h1>Client Reviews</h1>

      {/* Form to submit a new review */}
      <form onSubmit={handleSubmit} className="review-form">
        {/* Input field for the name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange} // Update state when the user types
          required
        />
        
        {/* Textarea for writing the review comment */}
        <textarea
          name="comment"
          placeholder="Write a review..."
          value={formData.comment}
          onChange={handleChange} // Update state when the user types
          required
        ></textarea>
        
        {/* Submit button */}
        <button type="submit">Submit Review</button>
      </form>

      {/* Display the list of submitted reviews */}
      <div className="review-list">
        {reviews.map((review) => (
          <div key={review.id || review.name} className="review-card">
            <h2>{review.name}</h2> {/* Display reviewer's name */}
            <p>{review.comment}</p> {/* Display review comment */}
            <p>
              <strong>Date:</strong> {review.date} {/* Display review date */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;


