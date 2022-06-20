import React from "react";
import Item from "./Item";

export default function SearchListView(props) {
  // console.log(props);
  // console.log(props);
  return (
    <div>
      {props.search.map((item, index) => {
        return <Item key={index} data={item} />;
      })}
    </div>
  );
}
