import React, { useState } from "react";
import "./style.less";
import DefaultImg from "../../../../assets/images/default.png";
import { loadImageAsyns } from "../../../../utils/loadImge";
import { Link } from "react-router-dom";

export default function Item(props) {
  const [imgUrl, setImgUrl] = useState(DefaultImg);
  const data = props.data;
  loadImageAsyns(data.img)
    .then((res) => {
      // console.log(res);
      setImgUrl(res);
    })
    .catch((error) => console.log(error));
  // console.log(props.data);

  return (
    <div className="list-item">
      <Link to={`/details/${data.id}`}>
        <img src={imgUrl} alt="" />
        <div className="mask">
          <div className="left">
            <p>{data.title}</p>
            <p>{data.houseType}</p>
          </div>
          <div className="right">
            <div className="btn">{data.rentType}</div>
            {/* data.price:"<h3>13000<h3>" */}
            <p dangerouslySetInnerHTML={{ __html: data.price + "元/月" }}></p>
          </div>
        </div>
      </Link>
    </div>
  );
}
