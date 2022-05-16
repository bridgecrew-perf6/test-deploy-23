import Right from "./Right";
import classes from "./Order.module.css";
import Left from "./Left";
import { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Order = (props) => {
  
  return (
    <Fragment>
      <Header/>
    <div className={classes.container}>
        <div className={classes.tieude}>
        <h1>Đặt chỗ của tôi</h1>
        <h2>Điền thông tin và xem lại đặt chỗ</h2>
        </div>
        <Left/>
      <Right/>
      
    </div>
    <Footer/>
    </Fragment>
  );
};

export default Order;
