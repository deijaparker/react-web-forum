// src/App.js
import React from "react";
import { comments } from "./commentData";
import Card from "./Card";

function App() {
  return (
    <div>
      {comments.map((comment) => (
        <Card key={comment.username} commentObject={comment} />
      ))}
    </div>
  );
}

export default App;
