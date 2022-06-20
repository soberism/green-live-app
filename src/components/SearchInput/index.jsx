import React, { useState, useEffect } from "react";
import "./style.less";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateSearch } from "../../redux/actions/search";

const SearchInput = (props) => {
  const [keyword, setKeyword] = useState("");
  // console.log(props);
  useEffect(() => {
    // console.log(111)
    // let reduxKeyword=props.keyword
    // console.log(props.keyword);
    // console.log(props.keyword);
    if (props.match.params.keyword) {
      props.onUpdateSearch(props.match.params.keyword);
    } else {
      props.onUpdateSearch("");
    }
    setKeyword(props.keyword);
    //  props.onUpdateSearch(keyword);
  }, [props.keyword, props.match.params.keyword]);

  function handleKeyUp(e) {
    if (e.keyCode === 13) {
      if (keyword.length > 0) {
        props.history.push(`/search/${keyword}`);
        props.onUpdateSearch(keyword);
      }
    }
  }
  function handleChange(e) {
    setKeyword(e.target.value);
  }

  return (
    <input
      className="search-input"
      value={keyword}
      onChange={handleChange}
      type="text"
      onKeyUp={handleKeyUp}
    />
  );
};

export default connect(
  (state) => {
    return { keyword: state.search.search };
  },
  (dispatch) => ({
    onUpdateSearch: (keyword) => {
      dispatch(updateSearch(keyword));
    },
  })
)(withRouter(SearchInput));
