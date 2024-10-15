import React, { useState } from "react";

function CommentInput({ addComment }) {
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      addComment(newComment);
      setNewComment("");
    }
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <input
        type="text"
        value={newComment}
        onChange={handleCommentChange}
        placeholder="Add a comment"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

function Post({ post }) {
  const [comments, setComments] = useState(post.comments);

  const addComment = (comment) => {
    const newComments = [...comments, comment];
    setComments(newComments);
    fetch(window.location.pathname, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comments: newComments }),
    }).then(() => console.log("Comment written to database!"));
  };

  const deleteComment = (index) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
    fetch(window.location.pathname, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comments: newComments }),
    }).then(() => console.log("Comment deleted from database!"));
  };

  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
      {comments && comments.length > 0 ? (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              {comment}
              <button onClick={() => deleteComment(index)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Comments Yet!</p>
      )}
      <CommentInput addComment={addComment} />
    </div>
  );
}

export default function App({ post }) {
  return post === undefined ? <p>Post not found</p> : <Post post={post} />;
}
