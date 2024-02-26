import React from "react";
import "./JobsView.scss";
import { Button, Card } from "antd";
import Tag from "../tags/Tag"
function JobsView() {
  return (
    <div className="jobsview">
      <Card  className="jobsview__cart" bordered={false}>
        <h1>Build Android Application using Linux program Gphoto2</h1>
        <div className="jobsview__cart__info">
          <img src="https://cdn.dribbble.com/users/13307/avatars/normal/Mike3.jpg?1382537343" />
          <p>Posted 11 hours ago</p>
        </div>
        <div className="jobsview__cart__info-details">
          <p>$40</p>
          <p>Experience level</p>
        </div>
        <div className="jobsview__cart__description">
          <p>
            I have an Android based low end series watch calle M1 Tank pro and i
            would like to have access to it to be able to install apps. it runs
            on android 4 series, i have the mac adress that the watch provides
            and little coding skills but enough to create apps that could be run
            on such device. i just need help tapping into the watch and becoming
            familiar with connecting with it and communcating new apps into it.
            i am willing to root the device and have it be fully programmed by a
            computer and having it have a very simple UI.
          </p>
        </div>
        <Tag selectedTags="art"/>
        <Button className="jobsview__cart__submit">Approve</Button>
      </Card>
    </div>
  );
}

export default JobsView;
