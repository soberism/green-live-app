import React, { useState, useEffect } from "react";
import SearchListView from "../SearchListView";
import api from "../../../api/index";
import LoadMore from "../../../components/LoadMore";

const SearchList = (props) => {
  const [searchData, setSearchData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  let searchDataArr = [];

  function loadMoreHandle() {
    http();
  }
  function http() {
    // console.log(props.search);
    api
      .search({ search: props.search })
      .then((res) => {
        if (res.data.status === 200) {
          searchDataArr = [...searchDataArr, ...res.data.result.data];
          setSearchData(searchDataArr);
          setHasMore(res.data.result.hasMore);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    http();
    return () => {
      setSearchData([]);
      setHasMore(false);
    };
  }, [props.search]);

  return (
    <div>
      {searchData.length > 0 ? (
        <SearchListView search={searchData} />
      ) : (
        <div>等待数据加载</div>
      )}
      {hasMore ? <LoadMore onLoadMore={loadMoreHandle} /> : <div>没有了</div>}
    </div>
  );
};

export default SearchList;
