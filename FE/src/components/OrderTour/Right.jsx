import classes from "./Right.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Right = (props) => {
  // const params = useParams();
  // const [tourDetail, setTourDetail] = useState({});

  // useEffect(() => {
  //   axios
  //     .get(`https://622ac4ec14ccb950d224ca1b.mockapi.io/danhmuc/${params.id}`)
  //     .then((res) => setTourDetail(res.data));
  // }, []);
  
  const { id } = useParams();
  const [singleOderproducttour, setSingleOderproducttour] = useState([]);

  useEffect(() => {
    getData(id);
  }, [id]);
  const getData = async (id) => {
    const respone = await axios.get(`/api/products/${id}`).then((res) => {
      console.log();
      setSingleOderproducttour(res.data);
      console.log(res.data);
    });
    console.log("data =>", singleOderproducttour);
  };
  return (
    
    <div className={classes.order}>
      {singleOderproducttour.map(({ TENTOUR, HINHANH}) => (
      <div className={classes.right}>
        <div className={classes.tomtat}>
          <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/56ad06f2128fa715be3108b2b90e927c.svg" />
          Tóm tắt đặt chỗ
          <hr />
        </div>
        
        <div className={classes.hinhanh}>
        <h2>{TENTOUR}</h2>
          <img src={HINHANH} alt="null" />
          <p>Tour mở dành cho công dân Việt Nam</p>
          <a href="#">Xem chi tiết</a>
        </div>
        <div className={classes.thoigian}>
          <div className={classes.khung}>
            <p>Ngày tham quan </p>
            <p>Khung thời gian </p>
            <p>Áp dụng cho</p>
          </div>
          <div className={classes.solieu}>
            <p>Thứ 6, 15 thg 4 2022</p>
            <p>07:30</p>
            <p>Người lớn : 1</p>
          </div>
        </div>
        <div className={classes.tinhnang}>
            <div className={classes.hang1}>
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612455491487-083f2aa1250ed2145b0b41c4e1dba240.png"/>
            có hiệu lực vào 15 thg 4 2022
            </div>
            <div className={classes.hang2}>
            <img className={classes.icondt} src="https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612455486715-9f445c68bf929b8ace8e744c568484f9.png"/>
            Không cần đặt chỗ
            </div>
            <div className={classes.hang2}>
                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612455479726-cb00253dc0267a8fc369760e81dc577c.png"/>
            Có thể hoàn tiền cho đến 13 thg 4 2022
            </div>
        </div>
      </div>
      ))}
    </div>
    
  );
};

export default Right;
