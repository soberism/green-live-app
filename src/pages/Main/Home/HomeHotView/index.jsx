import React from "react";
import "./style.less";

export default function HomeHotView(props) {
  // console.log(props);
  return (
    <div className="hotproduct">
      <h3>{props.title}</h3>
      <div className="hot-container">
        <ul className="clear-fix">
          {props.data.map((ele, idx) => {
            return (
              <li key={idx}>
                <a href={ele.link}>
                  <img src={ele.img} alt="#" />
                  <span>{props.cityName+ele.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
