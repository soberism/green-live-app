import React from "react";
import CityHeader from "../../components/PubHeader/index";
import CurrentCity from "./CurrentCity";
import CityList from "./CityList";
import { connect } from "react-redux";
import { initCity, changeCity } from "../../redux/actions/city";
import CityLists from "./CityLists";

const City = (props) => {
  // console.log(props.cityName);
  // function onCityEvent(city) {
  // }
  return (
    <div>
      <CityHeader title={"城市选择"} />
      <CurrentCity city={props.cityName} />
      <CityList onEvent={props.changeCity} />
      <CityLists onEvent={props.changeCity} />
    </div>
  );
};

export default connect(
  (state) => {
    return {
      cityName: state.city.cityName,
    };
  },
  (dispatch) => {
    return {
      changeCity: (city) => dispatch(changeCity(city)),
      initCity: (city) => dispatch(initCity(city)),
    };
  }
)(City);
