import React from "react";
import classes from "../Tour/TourItem.module.css";
import Right from "./Right.jsx";
import { Fragment } from "react";
import Carousel from "./Carousel";
import Promotion from "./Promotion";
import Location from "./Location";
import News from "./News";
import StayHome from "./StayHome";
import Search from "../../Search/Input/index";
import './style.css'
import Header from "../../Header";
import Footer from "../../Footer";

const Tour = () => {
  
  return (
    <Fragment>
      <Header/>
      <div className={classes.container}>
        <Search status="1"/>
        <div className='section-tour'>
          <h1 className={classes.title_exp}>Khám phá các danh mục Xperience</h1>
          <p className={classes.detail_tour}>Xem thật kỹ các hoạt động và trải nghiệm độc đáo nhé</p>
          <Carousel/>
        </div>
        <div className='section-tour'>
          <h1 className={classes.title_exp}>Khuyến mãi Xperience hiện hành</h1>
          <p className={classes.detail_tour}>Tiết kiệm lớn với những ưu đãi đặc biệt giới hạn của chúng tôi</p>
          <Promotion/>
        </div>
        <div className='section-tour bikip'>
          <h1 className={classes.title_exp}>Bí kíp du lịch an toàn hậu Covid</h1>
          <Location/>
        </div>
        <div className='section-tour'>
          <h1 className={classes.title_exp}>An tâm với dịch vụ xét nghiệm Covid-19</h1>
          <p className={classes.detail_tour}>Đặt ngay mức giá ưu đãi nhất trên Xperience</p>
          <News/>
        </div>
        <div className='section-tour'>
          <h1 className={classes.title_exp}>Khám phá các hoạt động gần nhà</h1>
          <p className={classes.detail_tour}>Yên tâm trải nghiệm.</p>
          <StayHome/>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default Tour;
