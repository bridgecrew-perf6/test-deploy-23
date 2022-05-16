import React from "react";
import classes from "../Tour/TourItem.module.css";
import { Fragment } from "react";
import Search from "../../Search/Input/index";
import "./style.css";
import Location from "./Location";
import Header from "../../Header";
import Footer from "../../Footer";

const PageSpa = (props) => {
  return (
    <Fragment>
      <Header/>
      <div className={classes.container}>
        <h1>Làm đẹp & Spa</h1>
         <Search status="0"/>
        <div className={classes.location} id="location-tourism">
          <h3>Việt Nam không vội được đâu</h3>
          <span>Những liệu trình làm đẹp được đánh giá cao nhất ở các thành phố hàng đầu toàn quốc</span>
          <Location name="tien-ich-du-lich"/>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default PageSpa;
