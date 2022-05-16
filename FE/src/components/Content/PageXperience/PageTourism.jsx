import React from "react";
import classes from "../Tour/TourItem.module.css";
import { Fragment } from "react";
import Search from "../../Search/Input/index";
import "./style.css";
import Location from "./Location";
import View_price from "./View_price";
import Header from "../../Header";
import Footer from "../../Footer";

const PageTourism = (props) => {
  return (
    <Fragment>
      <Header/>
      <div className={classes.container}>
        <h1>Tiện ích du lịch</h1>
         <Search status="0"/>
        <div className={classes.location} id="location-tourism">
          <h3>Những tiện ích nho nhỏ cần thiết cho chuyến đi</h3>
          <span>Trang bị chuyến đi của bạn với những tiện ích tốt nhất</span>
          <Location name="tien-ich-du-lich"/>
        </div>
        <div className={classes.location} >
          <h3>เก็บความทรงจำดีๆ ไว้บนรูปภาพ</h3>
          <span>บริการถ่ายภาพจะทำทริปของคุณดีจนไม่มีวันลืม</span>
          <View_price name="tien-ich-du-lich"/>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default PageTourism;
