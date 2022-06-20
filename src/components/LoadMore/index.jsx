import React, { useEffect, useRef } from "react";

export default function LoadMore(props) {
  const more = useRef();
  useEffect(() => {
    const clientHeight = document.documentElement.clientHeight;
    // console.log(clientHeight);
    let timer = null;
    function scrollHandle() {
      if (more.current) {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          if (more.current.getBoundingClientRect().top <= clientHeight) {
            // console.log("滚动了");
            props.onLoadMore();
          }
        }, 300);
      }
    }
    window.addEventListener("scroll", scrollHandle);
    return () => {
      window.removeEventListener("scroll", scrollHandle);
      clearTimeout(timer);
    };
  }, []);
  return (
    <div
      style={{
        height: 50 + "px",
        lineHeight: 50 + "px",
        textAlign: "center",
        fontSize: 20 + "px",
      }}
      ref={more}
    >
      LoadMore
    </div>
  );
}
