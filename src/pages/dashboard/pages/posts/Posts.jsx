import { useEffect, useState } from "react";
import PostView from "../../../../component/postView/PostView";
import api from "../../../../config/axios";
import moment from "moment";

function Posts() {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState("");

  useEffect(() => {
    const getAllArtworkPending = async () => {
      const response = await api.get("/artworks-pending");
      let filteredData = response.data.data;
      console.table(response.data.data);
      filteredData.sort((a, b) => {
        const dateA = moment(a.createDate, "MMMM Do YYYY, h:mm:ss a");
        const dateB = moment(b.createDate, "MMMM Do YYYY, h:mm:ss a");
        return dateB.diff(dateA);
      });
      setData(filteredData);
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
              price={post.price}
              createDate={post.createDate}
            />
          ))}
    </div>
  );
}

export default Posts;
