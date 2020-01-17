import React from 'react';
import FullPost from './FullPost';
import posts from "./dummyPosts";

const PostPage = (props) => {
  const post = posts.filter((each) => each.id === parseInt(props.match.params.id));
  return (
    post.length && <FullPost post={post[0]} />
  );
}
 
export default PostPage;