import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Post from './Post';
import PostPage from './PostPage';
import posts from "./dummyPosts";
import "./blog.scss";

const Blog = (props) => {
  return (
    <>
      <div className="blog-wrapper">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
      />
    </>
  );
}
 
export default Blog;
