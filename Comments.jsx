import React, { useState, useEffect } from 'react';
function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetch('http://localhost:8001/comments')

    .then((response) => response.json())
        .then((data) => setComments(data));
    }
    , []);
    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:8001/comments', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            body: newComment
            })
        })
        .then((response) => response.json())
        .then((data) => {
            setComments([...comments, data]);
            setNewComment('');
        });
        }
        function handleChange(e) {
            setNewComment(e.target.value);
        }
        return (
            <div className="comments-container">
            <form onSubmit={handleSubmit} className="comments-form">
            <label htmlFor="comment" className="comments-label">Leave a comment.</label >
            <input
            type="text"
            name="comment"
            value={newComment}
            onChange={handleChange}
            required
            className="comments-input"
            />
            <button type="submit" className="comments-button"
            >Add comment</button>
            </form>
            </div>
            );
        }

        export default Comments;

