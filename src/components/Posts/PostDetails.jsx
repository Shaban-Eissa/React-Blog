import React from "react";
import useFetch from "./useFetch";

const PostDetails = (props) => {
  let {
    data: post,
    loading,
    errMsg,
  } = useFetch(`http://localhost:3000/posts/${props.match.params.id}`);
  
  const handleDelete = () => {
    fetch(`http://localhost:3000/posts/${props.match.params.id}`, {
      method: "DELETE",
    }).then(() => {
      props.history.push("/");
    });
  };
  return (
    <>
      {loading && <div>Loading ... </div>}
      {errMsg && <div className="error">{errMsg}</div>}
      {post && !loading && !errMsg && (
        <article className="container post-details">
          <div className="post-details-title">
            <h1>{post.title} </h1>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
          <img className="post-details-img" src={post.image} />
          <div className="post-author">
            By {post.author ? post.author : "Author Undefined"}
          </div>
          <p className="post-details-body">{post.body}</p>
        </article>
      )}
    </>
  );
};

export default PostDetails;
