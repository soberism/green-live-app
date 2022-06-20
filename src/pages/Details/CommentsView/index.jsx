import React from "react";
import Item from "./Item";
import "./style.less"

export default function CommentsView(props) {
  // console.log(props.comments);
  return (
    <div className="common-list">
      <ul>
        {props.comments.map((comment, index) => {
          return (
            <li key={index}>
              <Item comment={comment} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
