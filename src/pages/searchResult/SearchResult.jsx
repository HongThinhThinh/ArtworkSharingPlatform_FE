import React, { useEffect, useState } from "react";
import WorkartSection from "../../sections/workartSection/WorkartSection";
import api from "../../config/axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./SearchResult.scss";
import { Col, Empty, Row } from "antd";
import Workart from "../../component/workart/Workart";
import CategorySlider from "../../sections/categorySlider/CategorySlider";
import CategorySelector from "../../component/categorySellector/CategorySelector";
import { alertFail } from "../../assets/hook/useNotification";
function SearchResult({}) {
  const [data, setData] = useState([]);
  const params = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getAll = async () => {
      const response = await api.get(`/searchArtwork?search=${search}`);
      setData(response.data.data);
    };
    getAll();
  }, [search]);

  useEffect(() => {
    const onChangeCategory = async () => {
      try {
        if (selectedCategories.length == 0) {
          const getAll = async () => {
            const response = await api.get(`/searchArtwork?search=${search}`);
            setData(response.data.data);
          };
          getAll();
        } else {
          const response = await api.post("/artworkByCategory", {
            categoryName: selectedCategories,
          });
          setData(response.data.data);
        }
      } catch (e) {
        alertFail("Cc");
      }
    };
    onChangeCategory();
  }, [selectedCategories]);
  console.log(data);
  return (
    <div className="search-result">
      <CategorySelector
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      {data?.length > 0 ? (
        <div>
          <Row container gutter={32} style={{ padding: "2.5em" }}>
            {data?.map((artwork, index) => (
              <Col
                style={{ cursor: "pointer" }}
                xs={24}
                sm={12}
                lg={8}
                xl={6}
                xxl={6}
                key={index}
              >
                <Workart
                  price={artwork.price}
                  idArtwork={artwork?.id}
                  idCreator={artwork.user.id}
                  image={artwork.image}
                  name={artwork.user.name}
                  avatar={artwork.user.avt}
                  countLike={artwork.countLike}
                  countComment={artwork.countComment}
                  interactionLike={artwork.interactionLike}
                />
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <div>
          <Empty
            imageStyle={{
              height: 500,
            }}
            description={null}
          />
        </div>
      )}
      <CategorySlider />
    </div>
  );
}

export default SearchResult;
