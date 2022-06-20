import React from "react";
import { withRouter } from "react-router-dom";
import SearchList from "./SearchList";
import SearchHeader from "./SearchHeader";

const Search = (props) => {
  // console.log(props);
  return (
    <div>
      <SearchHeader />
      <SearchList search={props.match.params.keyword} />
    </div>
  );
};

export default withRouter(Search);
