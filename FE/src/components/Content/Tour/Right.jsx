import React from "react";
import classes from "./right.module.css";

const DSTour = () => {
  const dataprice = [
    {
      "price": "0 - 4.000.000",
    },
    {
      "price": "4.000.000 - 8.000.000"},
    {
      "price": "8.000.000+",
    }
  ];
  const datarate = [
    {
      "rate": "Phổ biến nhất"
    },
    {
      "rate": "Yêu thích nhất"
    }
  ];
  const dataTour = [
    {
      "image":"https://static.mservice.io/blogscontents/momo-upload-api-210615104720-637593508408446163.jpg",
      "title": "Ăn tối trên sông",
      "location": "Quận 1",
      "vote": "8/10 (33 đánh giá)",
      "fee": "550.000"
    },
    {
      "image":"https://static.mservice.io/blogscontents/momo-upload-api-210615104720-637593508408446163.jpg",
      "title": "Ăn tối trên sông",
      "location": "Quận 1",
      "vote": "8/10 (33 đánh giá)",
      "fee": "550.000"
    }
  ]
  return (
    <div className={classes.container}>
      <div className={classes.right}>
          <select className={classes.price} id="price">
            {dataprice.map( val => (
              <option value="volvo">VND {val.price}</option>
            ))}
          </select>
          <select className={classes.rate} id="rate">
            {datarate.map( val => (
              <option value={val.rate}>{val.rate}</option>
            ))}
          </select>
        
      </div>
      {dataTour.map(val => (
        <div className={classes.tour}>
          <div className={classes.left_image_tour}>
            <img
              src={val.image}
              alt="null"
            />
          </div>
          <div className={classes.right_content_tour}>
            <p>{val.title}</p>
            <p>{val.location}</p>
            <p>{val.vote}</p>
            <h3>VDN {val.fee}</h3>
          </div>     
        </div>
      ))}
    </div>
  );
};

export default DSTour;
