import classes from "./DStour.module.css";
import Card from "../../UI/Card";
import Right from "./Right";
import { useParams } from "react-router-dom";
import Left from "./Left";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Header from "../../Header";
import Footer from "../../Footer";

function DStour(props) {
  const params = useParams();

  return (
    <Fragment>
      <Header />
      <div className={classes.container}>
        <div className={classes.link}>
          <a href="">Xperience</a>
          <a>/</a>
          <a href="" className={classes.danhmuc}>Tp.HCM</a>
        </div>
        <h1>Tất cả kết quả cho thành phố HCM</h1>

        <Left />
        <Right />
      </div>
      <Footer />
    </Fragment>
  );
}

export default DStour;
