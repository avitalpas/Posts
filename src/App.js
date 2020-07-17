import React, { useState } from 'react'
import Post from "./components/Post.js";
import AddPost from "./components/AddPost.js";

import "./App.css";

export default function App() {

  const [posts, setPost] = useState([
    {
      author: "Dani",
      title: "My first day at Dominos",
      info: "I love this pizza, its amazing",
    },
    {
      author: "Ira",
      title: "Never do this !!!",
      info:
        "It is not really smart to eat sushi and drink Coffee at the same time...",
    },
    {
      author: "Avital",
      title: "Dogs are the best",
      info: "Because cats are just evil.",
    },
    {
      author: "Itai",
      title: "Preach",
      info:
        "Chocolate ice cream is inferior to all the other flavors of ice cream!!!",
    },
  ]
  )

  function addPost(a, n, i) {
    setPost([{ author: a, title: n, info: i }, ...posts]);
  }

  function deletePost(deleteIndex) {
    
    let tempPosts = posts.filter(
      (Element, index) => index !== deleteIndex
    );
    setPost(tempPosts)
  };

  return (
    <div>
      {/* New post form */}
      <AddPost addPostFunc={addPost} />

      {/* Print posts */}
      {posts.map((curPost, i) => {
        return (
          <Post
            author={curPost.author}
            title={curPost.title}
            info={curPost.info}
            index={i}
            deletePostFunc={deletePost}
          />
        );
      })}
    </div>
  )
}