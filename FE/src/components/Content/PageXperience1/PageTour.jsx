import React from 'react';
import classes from '../Tour/TourItem.module.css';
import { Fragment } from 'react';
import Search from '../../Search/Input/index';
import './style.css';
import Location from './Location';
import Explore_world from './Explore_world';
import Header from '../../Header';
import Footer from '../../Footer';

const PageTour = (props) => {
  return (
    <Fragment>
      <Header />
      <div className={classes.container}>
        <h1>Tour</h1>
        <Search status='0' />
        <div className={classes.location}>
          <h5>Điểm đến địa phương</h5>
          <span>Những nới đáng tham quan và khám phá trong nước</span>
          <Location />
        </div>
        <div className={classes.location}>
          <h5>Singapore rực nắng</h5>
          <span>Khám phá những tour phổ biến nhất tại thành phố Sư tử</span>
          <Explore_world />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default PageTour;
