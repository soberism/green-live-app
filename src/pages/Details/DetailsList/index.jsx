import React, { useEffect, useState } from "react";
import api from "../../../api";
import DetailsView from "../DetailsView";

const Details = (props) => {
  const [detailsData, setDetailsData] = useState({});
  useEffect(() => {
    api.details({ id: props.id }).then((res) => {
      if (res.status === 200) {
        // console.log(res.data.result.imgs.length);
        setDetailsData(res.data.result);
      }
    });
  }, []);
  return (
    <div>
      {detailsData.imgs ? (
        <DetailsView detailsData={detailsData} id={props.id}/>
      ) : (
        <div>正在加载中... </div>
      )}
    </div>
  );
};

export default Details;
