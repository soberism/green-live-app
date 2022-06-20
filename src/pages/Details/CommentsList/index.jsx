import React, { useEffect, useState } from "react";
import CommentsView from "../CommentsView";
import api from "../../../api/index";
import LoadMore from "../../../components/LoadMore/index";

export default function Comments(props) {
  const [comments, setComments] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  let commentsArr=[]
  useEffect(() => {
    http();
  }, []);

  function loadMoreHandle() {
    http();
  }

  function http() {
    api
      .getComments({ id: props.id })
      .then((res) => {
        if (res.data.status === 200) {
          commentsArr=[...commentsArr, ...res.data.result.data ]
          setComments(commentsArr);
          setHasMore(res.data.result.hasMore)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      {comments.length > 0 ? (
        <CommentsView comments={comments} />
      ) : (
        <div>等待数据加载</div>
      )}
      {hasMore ? (
        <LoadMore onLoadMore={loadMoreHandle} />
      ) : (
        <div>没有更多了</div>
      )}
    </div>
  );
}
