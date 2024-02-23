import React from "react";
import PostTable from "../../../../component/table/PostTable";
import PostView from "../../../../component/postView/PostView";

function Posts() {
  return (
    <div style={{ height: "100%", overflowY: "scroll" }}>
      <PostView
        img="https://cdn.dribbble.com/userupload/13090247/file/original-89e2c1efc4dab870651cf0d3850956cd.png?resize=450x338&vertical=center"
        title="Nobody Loves New York Like New York"
        avatar="https://cdn.dribbble.com/users/15687/avatars/small/3c467725100c037f0781f583af65a2dd.jpg?1515580842"
        name="Roman Klčo"
        description="In celebration of beach festivals and dreaming of warm summer days
        ahead, all of our beach themed prints and products are on sale for 25%
        off, for 24 hours only! Sale ends at 12pm PT on Wednesday, 1/31. 25%
        discount automatically applied at checkout."
      />
      <PostView
        img="https://cdn.dribbble.com/userupload/13053936/file/original-9b153bacd9cfd53b6a918779321dde12.jpg?crop=0x190-1600x1390&resize=450x338&vertical=center"
        title="Landscape"
        avatar="https://cdn.dribbble.com/users/1174720/avatars/small/20e8ed9a17f40e935f287202a49e10a4.png?1691085317"
        name="Varun Kumar"
        description="In celebration of beach festivals and dreaming of warm summer days
        ahead, all of our beach themed prints and products are on sale for 25%
        off, for 24 hours only! Sale ends at 12pm PT on Wednesday, 1/31. 25%
        discount automatically applied at checkout."
      />
      <PostView
        img="https://cdn.dribbble.com/userupload/8993367/file/original-800c1d04b89e2ed30077cc307b7945b3.jpg?resize=400x300&vertical=center"
        title="Landscape"
        avatar="https://cdn.dribbble.com/users/31348/avatars/normal/27c9b6b5f30020754935a86969f3c7a8.png?1682367368"
        name="DKNG"
        description="In celebration of beach festivals and dreaming of warm summer days
        ahead, all of our beach themed prints and products are on sale for 25%
        off, for 24 hours only! Sale ends at 12pm PT on Wednesday, 1/31. 25%
        discount automatically applied at checkout."
      />
      <PostView
        img="https://cdn.dribbble.com/userupload/4475106/file/original-2a7a23385ae7f4ccc3c0863566362404.png?resize=400x300&vertical=center"
        title="Landscape"
        avatar="https://cdn.dribbble.com/users/31348/avatars/normal/27c9b6b5f30020754935a86969f3c7a8.png?1682367368"
        name="DKNG"
        description="In celebration of beach festivals and dreaming of warm summer days
        ahead, all of our beach themed prints and products are on sale for 25%
        off, for 24 hours only! Sale ends at 12pm PT on Wednesday, 1/31. 25%
        discount automatically applied at checkout."
      />
    </div>
  );
}

export default Posts;
