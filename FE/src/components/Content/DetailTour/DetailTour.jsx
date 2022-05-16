import "./style.css";
import Slider from "react-slick";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import classes from "./DetailTour.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Ve from "./VeTour/Ve";

const DetailTour = ({ match }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [singleproducttour, setSingleproducttour] = useState([]);

  useEffect(() => {
    getData(id);
    // setSingleproducttour([
    //   { MATOUR: "1", TENTOUR: "e", GIATOUR: "1000", DIEMDEN: "anc", HINHANH: "https://deviet.vn/wp-content/uploads/2019/04/ban-do-vuong-quoc-anh.jpg" },
    // ])
  }, [id]);
  const getData = async (id) => {
    const respone = await axios.get(`/api/products/${id}`).then((res) => {
      console.log();
      setSingleproducttour(res.data);
      console.log(res.data);
    });
    console.log("data =>", singleproducttour);
  };

  return (
    <Fragment>
      <Header />
      <div className={classes.container}>
        {singleproducttour.map(({ MATOUR, TENTOUR, HINHANH, GIATOUR, DIEMDEN }) => (
          <div className={classes.hinhanh}>
            <h1 className={classes.title}>{TENTOUR}</h1>
            <div className={classes.diemden}>
              <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0629a9ae0d41e994ff5043f52cbb1b2e.svg" />
              {DIEMDEN}
            </div>
            <hr />
            <div className={classes.content}>
              <div className={classes.anh}>
                <img src={HINHANH} alt="null" />
              </div>
              <div className={classes.anhnho}>
                <img src={HINHANH} alt="null" />
                <img src={HINHANH} alt="null" />
                <img src={HINHANH} alt="null" />
                <img src={HINHANH} alt="null" />
              </div>
            </div>
            <div className={classes.content}>
              <div className={classes.danhgia}>
                <h2>Traveloka</h2>
                <div className={classes.danhgias}>
                  <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/986bcf0f5b0c898a34fd75a917ceefad.svg" />
                  8.6 Tốt
                </div>
                <p>Từ 33 đánh giá</p>
              </div >
              <div className={classes.timtour}>
                <div className={classes.content}>

                  <p>Giá từ</p>
                  <div className={classes.luu}>
                    <img
                      alt="null"
                      src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/42e4a7e6ed00f63a69daf8b5a980d0d6.svg"
                    />
                  </div>
                </div>
                <h1>{GIATOUR} VND</h1>
                <button onClick={() => navigate("/detail-tour/" + MATOUR)}>
                  Tìm tour
                </button>
              </div>
            </div>
            <hr />
            <div className={classes.footer}>
              <p>Khoảnh khắc đáng nhớ</p>
              <div className={classes.content}>
                <img src={HINHANH} alt="null" />
                <img src={HINHANH} alt="null" />
                <img src={HINHANH} alt="null" />
                <img src={HINHANH} alt="null" />
                <img src={HINHANH} alt="null" />
                <img src={HINHANH} alt="null" />
                <img src={HINHANH} alt="null" />
                <img src={HINHANH} alt="null" />
                <img src={HINHANH} alt="null" />
                <img src={HINHANH} alt="null" />

              </div>
            </div>
          </div>

        ))}
        <h3>Khả dụng vào ngày khác</h3>
        <Ve />
      </div>
      <Footer />
    </Fragment>
  );

};
export default DetailTour;
