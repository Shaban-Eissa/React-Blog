import React , { useEffect, useState } from "react";

import Post from "./Post";
import useFetch from './useFetch'

const Posts = () => {

  let {data : posts , loading , errMsg} = useFetch('http://localhost:3000/posts')

  return (
    <section className="posts">
      {posts && posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      {loading && <div> Loading ... </div>}
      {!posts && !loading && !errMsg && (<div className='not-found'>No Posts</div>)}
      {errMsg && <div className='error'>{errMsg}</div>}
    </section>
  );
};

export default Posts;