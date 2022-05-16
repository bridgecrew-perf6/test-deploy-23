import React from "react";
import classes from "../Tour/TourItem.module.css";
import { Fragment } from "react";
import Search from "../../Search/Input/index";
import "./style.css";
import View_price from "./View_price";
import Header from "../../Header";
import Footer from "../../Footer";

const PagePlayground = (props) => {
  return (
    <Fragment>
      <Header/>
      <div className={classes.container}>
        <h1>Sân chơi</h1>
         <Search status="0"/>
        <div className={classes.location} >
          <h3>Sân chơi ở Indonesia</h3>
          <span>Trẻ em nhà bạn tha hồ leo trèo, chạy, nhảy với các hoạt động này</span>
          <View_price name="san-choi"/>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default PagePlayground;
