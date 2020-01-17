import React from 'react';
import "./post.scss";

const Post = ({ post }) => {
  console.log("postpost", post)
  return (
    <div className="post-wrapper">
      <h2 className="blog-title">{post.title}</h2>
      <div className="blog-date">{post.date}</div>
      <div className="blog-body">{post.body.map((each) => (
        <div className="body-paragraph">{each}</div>
      ))}</div>
    </div>
  );
}
 
export default Post;
