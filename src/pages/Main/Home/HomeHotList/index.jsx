import React, { useState, useEffect } from "react";
import api from "../../../../api/index";
import HomeHotView from "../HomeHotView";

export default function HomeHotList(props) {
  const [hotList1, setHotList1] = useState([]);
  const [hotList2, setHotList2] = useState([]);
  const [cityName, setCityName] = useState(props.cityName);
  //require hot1
  useEffect(() => {
    api.getHomeHot1({ cityName: props.cityName }).then((res) => {
      if (res.data.status === 200) {
        // console.log(res.data.result);
        setCityName(res.data.city);
        setHotList1(res.data.result);
      }
    });
  }, []);
  //require hot2
  useEffect(() => {
    api.getHomeHot2({ cityName: props.cityName }).then((res) => {
      if (res.data.status === 200) {
        // console.log(res.data.result);
        setCityName(res.data.city);
        setHotList2(res.data.result);
      }
    });
  }, []);
  // console.log();

  return (
    <div>
      {hotList1.length > 0 ? (
        <HomeHotView data={hotList1} cityName={cityName} title={"热门商品"} />
      ) : (
        <div>数据正在加载</div>
      )}
      {hotList2.length > 0 ? (
        <HomeHotView data={hotList2} cityName={cityName} title={"新品推荐"} />
      ) : (
        <div>数据正在加载</div>
      )}
    </div>
  );
}
