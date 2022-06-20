import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./style.less";

import Pagination from "./Pagination";

const AutoPlayAwipableViews = autoPlay(SwipeableViews);

const Swiper = (props) => {
  const [index, setIndex] = useState(0);

  function handleChangeIndex(index) {
    setIndex(index);
  }
  return (
    <div className="swiper">
      <AutoPlayAwipableViews index={index} onChangeIndex={handleChangeIndex}>
        {props.banners.map((banner, index) => {
          return (
            <div className="swiper-view" key={index + banner}>
              <img src={banner} alt="#" />
            </div>
          );
        })}
      </AutoPlayAwipableViews>
      <Pagination currentIndex={index} len={props.banners.length} />
    </div>
  );
};

export default Swiper;
