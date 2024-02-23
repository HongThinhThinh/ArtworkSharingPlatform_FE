import React from "react";
import PostTable from "../../../../component/table/PostTable";
import PostView from "../../../../component/postView/PostView";

function Posts() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="mode"
    >
      <PostView />
    </div>
  );
}

export default Posts;
