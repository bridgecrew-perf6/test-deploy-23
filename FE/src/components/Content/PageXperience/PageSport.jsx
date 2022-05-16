import React from "react";
import classes from "../Tour/TourItem.module.css";
import { Fragment } from "react";
import Search from "../../Search/Input/index";
import "./style.css";
import Location from "./Location";
import Header from "../../Header";
import Footer from "../../Footer";

const PageSport = (props) => {
  return (
    <Fragment>
      <Header/>
      <div className={classes.container}>
        <h1>Thể theo</h1>
         <Search status="0"/>
        <div className={classes.location} id="location-tourism">
          <h3>Bộ sưu tập thể thao</h3>
          <span>Những hoạt động luyện tập thể thao và thể hình</span>
          <Location name="the-thao"/>
        </div>
        <div className={classes.location} id="location-tourism">
          <h3>Hào hứng ở khắp mọi nơi</h3>
          <span>Tìm những trải nghiệm và các hoạt động thể thao độc đáo ở các điểm đến quanh Việt Nam</span>
          <Location name=""/>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default PageSport;
