import React from 'react';
import { useHistory } from 'react-router-dom'
import "./post.scss";

const Post = ({ post }) => {
  const history = useHistory();
  return (
    <div className="post-wrapper" onClick={() => history.push(`blog/${post.id}`)}>
      <h2 className="blog-title">{post.title}</h2>
      <div className="blog-date">{post.date}</div>
      <div className="blog-body">{post.body.map((each) => (
        <div className="body-paragraph">{each}</div>
      ))}</div>
    </div>
  );
}
 
export default Post;
