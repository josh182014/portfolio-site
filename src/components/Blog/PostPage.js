import React from 'react';
import Post from './Post';
import posts from "./dummyPosts";

const PostPage = (props) => {
  const post = posts.filter((each) => each.id === parseInt(props.match.params.id));
  return (
    post.length && <Post post={post[0]} />
  );
}
 
export default PostPage;