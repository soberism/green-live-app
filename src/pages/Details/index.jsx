import React from "react";
import { withRouter } from "react-router-dom";
import DetailsList from "./DetailsList/index";

const Details = (props) => {
  return (
    <div>
      <DetailsList id={props.match.params.id} />
    </div>
  );
};
export default withRouter(Details);
