// src/Card.js
import React from "react";
import Header from "./Header";
import Body from "./Body";

function Card(props) {
  return (
    <div className="card">
      <Header
        profileImg={props.commentObject.profileImg}
        username={props.commentObject.username}
      />
      <Body comment={props.commentObject.comment} />
    </div>
  );
}

export default Card;
