import React from "react";
import "./style.less";

export default function Star(props) {
  let num = props.num;
  if (num > 5) {
    num = 5;
  } else if (num < 1) {
    num = 1;
  }
  return (
    <div className="star-container">
      {[1, 2, 3, 4, 5].map((element, index) => {
        return num >= element ? (
          <i key={index} className="icon-star light"></i>
        ) : (
          <i key={index} className="icon-star "></i>
        );
      })}
    </div>
  );
}
