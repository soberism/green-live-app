import React from "react";
import HeaderNav from "../../../components/HeaderNav";
import Swiper from "../../../components/Swiper";
import Banner1 from '../../../assets/images/banner1.png'
import Banner2 from '../../../assets/images/banner2.png'
import Banner3 from '../../../assets/images/banner3.png'
import HomeHotList from "./HomeHotList";
import {connect} from 'react-redux'
const Home = (props) => {
  // console.log(111);
  return (
    <div>
      <HeaderNav cityName={props.cityName} />
      <Swiper banners={[Banner1,Banner2,Banner3]} />
      <HomeHotList cityName={props.cityName} />
    </div>
  );
};

export default connect(
  state=>{
    return {
      cityName:state.city.cityName
    }
  }
)(Home);;
