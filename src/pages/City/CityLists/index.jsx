import React, { useState, useEffect } from "react";
import CitySelect from "react-city-select";
import cityData from "../../../data/city";
import "./style.less";
import api from "../../../api";
import { withRouter } from "react-router-dom";

const CityLists = (props) => {
  const [citysData, setCitysData] = useState(cityData);
  useEffect(() => {
    api.getCityList().then((res) => {
      if (res.status === 200) {
        // console.log(res.data.result.citylist)
        setCitysData(res.data.result.citylist);
      }
    });
  }, []);
  function handleSelectCity(cityData) {
    // console.log(cityData);
    props.onEvent(cityData.name);
    props.history.push('/')
  }
  return (
    <div className="citys-list">
      <h3>城市列表</h3>
      <CitySelect data={citysData} onSelectItem={handleSelectCity} />
    </div>
  );
};
export default withRouter(CityLists);
