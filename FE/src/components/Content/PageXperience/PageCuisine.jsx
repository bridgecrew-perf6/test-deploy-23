import React from "react";
import classes from "../Tour/TourItem.module.css";
import { Fragment } from "react";
import Search from "../../Search/Input/index";
import "./style.css";
import Cuisine from "./Cuisine";
import View_price from "./View_price";
import Header from "../../Header";
import Footer from "../../Footer";

const PageCuisine = (props) => {
  return (
    <Fragment>
      <Header/>
      <div className={classes.container}>
        <h1>Ẩm thực - Ăn uống</h1>
         <Search status="0"/>
        <div className={classes.location} >
          <h3>Trải Nghiệm Ẩm Thực</h3>
          <span>Ăn tất tần tật các món ngon</span>
          <Cuisine name="am-thuc"/>
        </div>
        <div className="page-cuisine" >
          <h3>Nhâm nhi Việt Nam</h3>
          <span>Trải nghiệm ẩm thực trong nước</span>
          <View_price name="am-thuc"/>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default PageCuisine;
