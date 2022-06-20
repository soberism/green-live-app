import React, { useEffect, useState } from "react";
import "./style.less";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCollect, removeCollect } from "../../../redux/actions/collect";
// import collect from "../../../redux/reducers/collect";

function BuyAndStoreView(props) {
  const [isCollect, setIsCollect] = useState(false);
  const dispatch = useDispatch();
  function storeHandle() {
    if (props.user.token) {
      // 允许收藏
      // 判断用户是否收藏过
      if (isStore()) {
        setIsCollect(false);
        dispatch(removeCollect(props.id));
        // console.log("stored");
      } else {
        // console.log("unstore");
        setIsCollect(true);
        dispatch(setCollect(props.id));
      }
    } else {
      //转到登录页
      props.history.push("/login");
    }
  }
  // 判断时否收藏的函数
  function isStore() {
    const collects = props.collects;
    return collects.some((item) => item === props.id);
  }

  useEffect(()=>{
    setIsCollect(isStore())
  },[])
  // console.log(props);
  return (
    <div className="buy-store-container clear-fix">
      <div className="item-container float-left">
        {!isCollect ? (
          <button className="selected" onClick={storeHandle}>
            收藏
          </button>
        ) : (
          <button className="selected o" onClick={storeHandle}>
            已收藏
          </button>
        )}
      </div>
      <div className="item-container float-right">
        <button className="selected">购买</button>
      </div>
    </div>
  );
}

export default withRouter(BuyAndStoreView);
