import React from 'react';
import Post from './Post';
import posts from "./dummyPosts";

const PostPage = (props) => {
  console.log(props.match.params.id)
  const post = posts.filter((each) => each.id === parseInt(props.match.params.id));
  console.log("post", post)
  return (
    <Post post={post[0]} />
  );
}
 
export default PostPage;