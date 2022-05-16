import React from "react";
import classes from "../Tour/TourItem.module.css";
import { Fragment } from "react";
import Search from "../../Search/Input/index";
import "./style.css";
import Location from "./Location";
import Explore_world from "./Explore_world";
import Header from "../../Header";
import Footer from "../../Footer";

const PageTransport = (props) => {
  return (
    <Fragment>
      <Header/>
      <div className={classes.container}>
        <h1>Phương tiện di chuyển</h1>
         <Search status="0"/>
        <div className={classes.location} >
          <h5>Di chuyển dễ dàng</h5>
          <span>Chọn những phương tiện giao thông thoải mái và thuận tiện</span>
          <Location name="phuong-tien-di-chuyen"/>
        </div>
        <div className={classes.location} >
          <h5>Vé xe Sài Gòn - Vũng Tàu</h5>
          <span>Khám phá những tour phổ biến nhất Sài Gòn - Vũng Tàu</span>
          <Explore_world name="phuong-tien-di-chuyen"/>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default PageTransport;
