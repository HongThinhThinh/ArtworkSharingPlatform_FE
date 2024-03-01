import "./ArtworkDetails.scss";
import ArtworkInfo from "../../component/ArtworkInfo/ArtworkInfo";
import ListFeedback from "../../component/ListFeedback/ListFeedback";
import WorkartSection from "../../sections/workartSection/WorkartSection";
import { useParams } from "react-router-dom";
import api from "../../config/axios";
import { useEffect, useLayoutEffect, useState } from "react";

function ArtworkDetails() {
  const [data, setData] = useState({});
  const [user, setUser] = useState({});
  const { id } = useParams();

  useLayoutEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/artwork-detail/${id}`);
        const { data } = response.data;
        setUser(data.user || {});
        setData(data || {});
      } catch (error) {
        console.error("Error fetching artwork details:", error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <>
      <div className="artworkDetails">
        <div className="artworkDetails--left">
          <div className="artworkDetails--left--content">
            <ArtworkInfo img={data.image} />
          </div>
        </div>
        <div className="artworkDetails--right">
          <ListFeedback
            id={user.id}
            title={data.title}
            description={data.description}
            avt={user.avt || "abc"}
            name={user.name}
          />
        </div>
      </div>
      <WorkartSection />
    </>
  );
}

export default ArtworkDetails;
