import React from "react";
import PostTable from "../../../../component/table/PostTable";
import PostView from "../../../../component/postView/PostView";

function Posts() {
  return (
    <div style={{ height: "100%", overflowY: "scroll" }}>
      <PostView
        img="https://cdn.dribbble.com/userupload/13158919/file/original-530806c515e8568382135c66d61c9412.jpg?crop=1653x1008-4973x3497&resize=400x300&vertical=center"
        title="Nobody Loves New York Like New York"
      />
      <PostView
        img="https://cdn.dribbble.com/userupload/13053936/file/original-9b153bacd9cfd53b6a918779321dde12.jpg?crop=0x190-1600x1390&resize=450x338&vertical=center"
        title="Landscape"
      />
      <PostView
        img="https://cdn.dribbble.com/userupload/8993367/file/original-800c1d04b89e2ed30077cc307b7945b3.jpg?resize=400x300&vertical=center"
        title="Landscape"
      />
      <PostView
        img="https://cdn.dribbble.com/userupload/4475106/file/original-2a7a23385ae7f4ccc3c0863566362404.png?resize=400x300&vertical=center"
        title="Landscape"
      />
    </div>
  );
}

export default Posts;
