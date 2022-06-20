import React, { useState } from "react";
import "./style.less";

export default function Tabs(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function tabClickHandle(index) {
    setCurrentIndex(index);
  }

  function titleClass(index) {
    return index === currentIndex ? "Tab_title active" : "Tab_title";
  }

  return (
    <div>
      <ul className="Tab_title_wrap">
        {React.Children.map(props.children, (element, index) => {
          // console.log(element);
          return (
            <li
              className={titleClass(index)}
              key={index}
              onClick={() => {
                tabClickHandle(index);
              }}
            >
              {element.props.label}
            </li>
          );
        })}
      </ul>
      <div>
        {React.Children.map(props.children, (element, index) => {
          return index === currentIndex ? (
            <div key={index}>{element.props.children}</div>
          ) : ( 
            ""
          );
        })}
      </div>
    </div>
  );
}
