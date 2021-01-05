import React from 'react';
import "./fullpost.scss";

const FullPost = ({ post }) => {
  return (
    <div className="fullpost-wrapper">
      <h2 className="fullpost-blog-title">{post.title}</h2>
      <div className="fullpost-blog-date">{post.date}</div>
      <div className="fullpost-blog-body">{post.body.map((each) => (
        <div className="fullpost-body-paragraph">{each}</div>
      ))}</div>
    </div>
  );
}
 
export default FullPost;
