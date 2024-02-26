import React from "react";
import "./Order.scss";
import { Avatar, Button } from "antd";

function Order() {
  return (
    <div className="order">
      <div className="order__top">
        <div className="order__top__right">
          <Avatar
            src="https://cdn.dribbble.com/users/5746/avatars/normal/e52950dff35a8a8671c8151e2efd95b6.jpg?1673376793"
            className="order__top__right__avatar"
          />
          <div className="order__top__right__info">
            <h3>Dennis Salvatier - tanoshiboy</h3>
          </div>
        </div>
        <div className="order__top__left">In Progress</div>
      </div>
      <div className="order__detail">
        <h3 className="order__detail__title">Logo for brand</h3>
        <p className="order__detail__title">
          Lorem ipsum dolor sit amet, consectetur adip elit. Phasellus non est
          ipsum. Aliquam a ante dui.
        </p>
      </div>
      <div className="order__view">
        <Button className="order__view__btn">View Detail</Button>
      </div>
    </div>
  );
}

export default Order;
