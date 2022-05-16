
import classes from "./Category.module.css";
import Card from "../UI/Card";
import { Fragment } from "react";
import axios from "axios";
import React, {useState, useEffect } from "react";

const Category = () => {
  const categories = [
    {
      id: 1,
      name: "Tp HCM",
      img: "https://file1.dangcongsan.vn/data/0/images/2020/01/22/maipq/tp-hcm.jpg",
    },
    {
      id: 2,
      name: "Nha Trang",
      img: "https://hoangaulactourist.com/upload/hinhthem/1553835047nhatrangdiemden-6348.jpg",
    },
    {
      id: 3,

      name: "Phú Quốc",
      img: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/ve-dep-dao-phu-quoc.png"    },
    {
      id: 4,
      name: "Lào Cai",
      img: "https://baoquocte.vn/stores/news_dataimages/linhnguyen/062020/26/14/0302_Ynh_Thanh_phY_Lao_Cai.jpg?rt=20200626161429"    },
    {
      id: 5,
      name: "Huế",
      img: "https://static.mservice.io/blogscontents/momo-upload-api-210615104720-637593508408446163.jpg"   },
  ];

  const [Products, setProducts] = useState([]);
  useEffect(()=>{
    const fetchproducts = async () =>{
      const {data} = await axios.get("/api/products");
      setProducts(data);
    };
    fetchproducts();
  },[])

  return (
    <Fragment>
      <div className={classes.meals}>
        <h1>Điểm đến địa phương</h1>
        <p>Những nơi đáng tham quan và khám phá trong nước</p>
        <Card>
        {categories.map(({ name, img }) => (
          
          <div
            className={classes.diadiem}
            style={{ backgroundImage: `url(${img})` }}
          >
            <h1>{name}</h1>
          </div>
          
        ))}
        </Card>
      </div>
      <div className={classes.khampha}>
        <h1>Khám phá thế giới</h1>
        <p>
          Du lịch thật xa đến những đất nước đang được nhiều người yêu thích
        </p>
      </div>
    </Fragment>
  );
};

export default Category;
