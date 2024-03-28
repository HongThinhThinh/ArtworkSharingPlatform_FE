import React, { useEffect, useState } from "react";
import "./PurchaseHistory.scss";
import PurchaseHistoryCard from "../../component/purchase-history-card/PurchaseHistoryCard";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/counterSlice";
import { Link } from "react-router-dom";
import { LeftCircleTwoTone } from "@ant-design/icons";
import { alertFail } from "../../assets/hook/useNotification";
import api from "../../config/axios";
function PurchaseHistory() {
  const user = useSelector(selectUser);
  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.get("/historyBuyArtworkById");
        setData(response.data.data);
        console.log(response.data.data);
        console.log(data);
      } catch (error) {
        alertFail("Error fetching history purchase:", error);
      }
    };

    fetch();
  }, []);

  return (
    <div className="purchase-hi">
      {user?.role == "CREATOR" ? (
        <Link to="/creator-manage/artworks">
          <LeftCircleTwoTone
            twoToneColor="#BBBBBB"
            style={{
              fontSize: "1.8em",
              marginBottom: "1em",
              cursor: "pointer",
            }}
          />
        </Link>
      ) : null}
      <h1 className="purchase-hi__title">Purchase History</h1>

      <div className="purchase-hi__cards">
        {/* {console.log(data[0].artwork.title)} */}

        {data?.map((value) => (
          <PurchaseHistoryCard
            date={value.transactionDate}
            title={value.artwork.title}
            description={value.artwork.description}
            src={value.artwork.image}
          />
        ))}
      </div>
    </div>
  );
}

export default PurchaseHistory;
