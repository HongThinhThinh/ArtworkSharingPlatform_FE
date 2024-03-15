import React from "react";
import "./PurchaseHistory.scss";
import PurchaseHistoryCard from "../../component/purchase-history-card/PurchaseHistoryCard";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/counterSlice";
import { Link } from "react-router-dom";
import { LeftCircleTwoTone } from "@ant-design/icons";

function PurchaseHistory() {
  const user = useSelector(selectUser);
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
        <PurchaseHistoryCard
          date="15/03/2024"
          title="Blossom"
          description="Lorem ipsum dolor sit amet, consectetur adip elit. Phasellus non est ipsum. Aliquam a ante dui. "
          src="https://cdn.dribbble.com/userupload/13549229/file/original-bf58c031696ba84eb5c38268de408aec.jpg?resize=400x300&vertical=center"
        />
        <PurchaseHistoryCard
          date="15/03/2024"
          title="Opulent Life"
          description="Lorem ipsum dolor sit amet, consectetur adip elit. Phasellus non est ipsum. Aliquam a ante dui. "
          src="https://cdn.dribbble.com/userupload/13520346/file/original-f73bc1a1c605dba87bb3f33c7e298a43.jpg?crop=211x177-1125x862&resize=400x300&vertical=center"
        />
        <PurchaseHistoryCard
          date="15/03/2024"
          title="Catfish"
          description="Lorem ipsum dolor sit amet, consectetur adip elit. Phasellus non est ipsum. Aliquam a ante dui. "
          src="https://cdn.dribbble.com/userupload/13541819/file/original-f3779468ebc886a73f29ec4acd316bc6.jpg?crop=199x170-1849x1407&resize=400x300&vertical=center"
        />
        <PurchaseHistoryCard
          date="15/03/2024"
          title="Illustration"
          description="Lorem ipsum dolor sit amet, consectetur adip elit. Phasellus non est ipsum. Aliquam a ante dui. "
          src="https://cdn.dribbble.com/userupload/13086334/file/original-350b9b6cbf85205735ec49440b51ae31.jpg?crop=161x314-1525x1336&resize=400x300&vertical=center"
        />
        <PurchaseHistoryCard
          date="15/03/2024"
          title="Unique"
          description="Lorem ipsum dolor sit amet, consectetur adip elit. Phasellus non est ipsum. Aliquam a ante dui. "
          src="https://cdn.dribbble.com/userupload/13440216/file/original-590359fe545c3e8841929d55dc364e3c.png?resize=400x300&vertical=center"
        />
        <PurchaseHistoryCard
          date="15/03/2024"
          title="Fabullous"
          description="Lorem ipsum dolor sit amet, consectetur adip elit. Phasellus non est ipsum. Aliquam a ante dui. "
          src="https://cdn.dribbble.com/userupload/13447000/file/original-5beae22ba7de60fe5115173478f4f46f.jpg?resize=400x300&vertical=center"
        />
        <PurchaseHistoryCard
          date="15/03/2024"
          title="Fantastic"
          description="Lorem ipsum dolor sit amet, consectetur adip elit. Phasellus non est ipsum. Aliquam a ante dui. "
          src="https://cdn.dribbble.com/userupload/13350320/file/original-39a46b9237cbe2a83eda8d7e3f961706.png?resize=400x300&vertical=center"
        />
      </div>
    </div>
  );
}

export default PurchaseHistory;
