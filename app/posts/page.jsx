import React from "react";

async function loadPosts() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await posts.json();

  console.log(data);
}

const PostPage = () => {
  loadPosts();
  return <div> PostPage</div>;
};

export default PostPage;
