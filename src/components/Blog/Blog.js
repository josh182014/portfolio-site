import React from 'react';
import Post from './Post';
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
