import { useEffect, useState } from "react";
import PostView from "../../../../component/postView/PostView";
import api from "../../../../config/axios";

function Posts() {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState("");
  useEffect(() => {
    const getAllArtworkPending = async () => {
      const response = await api.get("/artworks-pending");
      setData(response.data.data);
      console.log(response.data.data);
    };
    getAllArtworkPending();
  }, [reload]);
  return (
    <div style={{ height: "100%", overflowY: "scroll" }}>
      {data.length <= 0
        ? "Dont have any Request"
        : data.map((post) => (
            <PostView
              setReload={setReload}
              key={post.id} // Add a unique key for each PostView component
              img={post.image}
              title={post.title}
              avatar={post.user.avt || "abc"}
              name={post.user.name}
              description={post.description}
              id={post.id}
            />
          ))}
    </div>
  );
}

export default Posts;
