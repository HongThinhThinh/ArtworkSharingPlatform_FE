import React from "react";
import PostTable from "../../../../component/table/PostTable";
import PostView from "../../../../component/postView/PostView";

function Posts() {
  return (
    <div
      style={{
        width: "100%",
        height:"100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        overflowY:"scroll",
        padding:"10em 0"
      }}
      
    >
      <PostView
        img="https://cdn.dribbble.com/userupload/12982222/file/original-c9ba7a9bf74c24c51db8cc24cf48f9e2.jpg?resize=450x338&vertical=center"
        title="Nobody Loves New York Like New York"
      />
      <PostView
        img="https://cdn.dribbble.com/userupload/13053936/file/original-9b153bacd9cfd53b6a918779321dde12.jpg?crop=0x190-1600x1390&resize=450x338&vertical=center"
        title="Landscape"
      />
      <PostView
        img="https://cdn.dribbble.com/userupload/13053936/file/original-9b153bacd9cfd53b6a918779321dde12.jpg?crop=0x190-1600x1390&resize=450x338&vertical=center"
        title="Landscape"
      />
      <PostView
        img="https://cdn.dribbble.com/userupload/13053936/file/original-9b153bacd9cfd53b6a918779321dde12.jpg?crop=0x190-1600x1390&resize=450x338&vertical=center"
        title="Landscape"
      />
    </div>
  );
}

export default Posts;
