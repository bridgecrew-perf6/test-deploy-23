import classes from "./Right.module.css";
import React, { useEffect, useState } from "react";
import { Button, Card, List, message, Select } from "antd";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listtour } from "../../../Redux/Action/Touraction";
const Right = () => {
  // const [productList, setProductList] = useState([]);
 
  const navigate = useNavigate();

  const { Option } = Select;
  const [producttour, setProducttour] = useState([]);
  

  useEffect(() => {
    getDatas();
    // setProducttour([
    //   {MATOUR:"1", TENTOUR:"e", GIATOUR:"1000", DIEMDEN:"anc", HINHANH:"https://deviet.vn/wp-content/uploads/2019/04/ban-do-vuong-quoc-anh.jpg"},
    //   {MATOUR:"1", TENTOUR:"e", GIATOUR:"1000", DIEMDEN:"anc", HINHANH:"https://deviet.vn/wp-content/uploads/2019/04/ban-do-vuong-quoc-anh.jpg"},
    //   {MATOUR:"1", TENTOUR:"e", GIATOUR:"1000", DIEMDEN:"anc", HINHANH:"https://deviet.vn/wp-content/uploads/2019/04/ban-do-vuong-quoc-anh.jpg"},
    //   {MATOUR:"1", TENTOUR:"e", GIATOUR:"1000", DIEMDEN:"anc", HINHANH:"https://deviet.vn/wp-content/uploads/2019/04/ban-do-vuong-quoc-anh.jpg"}
    // ])
  }, []);
  const getDatas = async () => {
    const respone = await axios.get("/api/products").then((res) => {
      setProducttour(res.data);
      console.log(res.data);
    });

    // if(respone.status===200){
    //   setProducttour(respone.producttour);
    // }
    // console.log("data =>",producttour)
  };
  console.log("data =>", producttour);

  // useEffect(() => {
  //   axios
  //     .get("https://622ac4ec14ccb950d224ca1b.mockapi.io/danhmuc")
  //     .then((res) => {
  //       setProductList([...productList, ...res.data]);
  //       setFilterOption([...filterOption, ...res.data]);
  //     });
  // }, []);
  // const Alldata = () => {
  //  const dispatch = useDispatch()
  //   const tourlist = useSelector((state)=>state.tourlist)
  //   const { loading,error,products } = tourlist
  //   useEffect(() =>{
  //     dispatch(listtour())
  //   }, [dispatch]);
  // }
  const [checked, setChecked] = useState();
  const handleSubmit = () => {
    console.log({ id: checked });
  };

  const dataprice = [
    {
      price: "0 - 1.000.000",
    },
    {
      price: "1.000.000 - 4.000.000",
    },
    {
      price: "4.000.000+",
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.right}>
        {/* <button className={classes.locgia}> */}
          <select className={classes.locgia} id="price">
            {dataprice.map((val) => (
              <option value="volvo">VND {val.price}</option>
            ))}
          </select>
         
        
        <div className={classes.xeptheos}>
          <p>Xếp theo: </p>
          <button className={classes.xeptheo}>
            Phổ biến nhất
            <img
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/8537ce8fe832f4d73d28a686595accec.svg"
              alt="null"
            />
          </button>
        </div>
      </div>
      <div className={classes.danhsach}>
        {producttour.map(({ MATOUR, TENTOUR, GIATOUR, DIEMDEN, HINHANH }) => (
          <div
            key={producttour.id}
            onClick={() => navigate("/detail-tour/" + MATOUR)}
            className={classes.items}
          >
            <span className={classes.tag}>Trãi nghiệm mới</span>
            <img alt="example" src={HINHANH} />

            <div className={classes.noidung}>
              <h2>{TENTOUR}</h2>
              <div className={classes.diemden}>
                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0629a9ae0d41e994ff5043f52cbb1b2e.svg" />
                {DIEMDEN}
              </div>
              <h1>{GIATOUR} VND</h1>
            </div>
            <div className={classes.luu}>
              <img
                alt="null"
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/42e4a7e6ed00f63a69daf8b5a980d0d6.svg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Right;
