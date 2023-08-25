"use client";
import React from "react";

const PostCard = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button
        onClick={() => {
          alert("click funcionando!");
        }}
      >
        Click
      </button>
    </div>
  );
};

export default PostCard;
