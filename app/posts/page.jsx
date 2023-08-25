import PostCard from "@/components/PostCard";
import React from "react";

// async function loadPosts() {
//   const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await posts.json();

//   console.log(data);
// }

const loadPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await res.json();

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return data;
};

const PostPage = async () => {
  const posts = await loadPosts();

  return (
    <div>
      {posts.map((post) => (
        <PostCard post={post} key={post.key} />
      ))}
    </div>
  );
};

export default PostPage;
