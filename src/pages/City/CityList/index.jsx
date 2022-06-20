import React from "react";
import "./style.less";
import { withRouter } from "react-router-dom";

const CityList = (props) => {
  function clickCityHandle(city) {
    props.onEvent(city);
    props.history.go(-1)
  }
  return (
    <div className="city-list-container">
      <h3>热门城市</h3>
      <ul className="clear-fix">
        <li onClick={() => clickCityHandle("北京")}>
          <span>北京</span>
        </li>
        <li onClick={() => clickCityHandle("上海")}>
          <span>上海</span>
        </li>
        <li onClick={() => clickCityHandle("广州")}>
          <span>广州</span>
        </li>
        <li onClick={() => clickCityHandle("深圳")}>
          <span>深圳</span>
        </li>
        <li onClick={() => clickCityHandle("天津")}>
          <span>天津</span>
        </li>
        <li onClick={() => clickCityHandle("沈阳")}>
          <span>沈阳</span>
        </li>
        <li onClick={() => clickCityHandle("长春")}>
          <span>长春</span>
        </li>
        <li onClick={() => clickCityHandle("成都")}>
          <span>成都</span>
        </li>
        <li onClick={() => clickCityHandle("太原")}>
          <span>太原</span>
        </li>
        <li onClick={() => clickCityHandle("长沙")}>
          <span>长沙</span>
        </li>
        <li onClick={() => clickCityHandle("昆明")}>
          <span>昆明</span>
        </li>
        <li onClick={() => clickCityHandle("大理")}>
          <span>大理</span>
        </li>
        <li onClick={() => clickCityHandle("拉萨")}>
          <span>拉萨</span>
        </li>
        <li onClick={() => clickCityHandle("西安")}>
          <span>西安</span>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(CityList)
