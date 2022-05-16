import { Fragment } from "react";
import Menuleft from "../Menuleft";
import Menutop from "../Menutop";
import classes from "./ThemTour.module.css";
import React, {useEffect,useState} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
// const initialState = {
//   MALOAI :"",
//   TENTOUR:"",
//   GTTOUR: "",
//   GIATOUR:"",
//   NOIDUNGTOUR:"",
//   HINHANH:"",
//   NGAYDI:"",
//   DIEMDI:"",
//   DIEMDEN:"",
//   NGAYTAO:""
// }
const ThemTour = () => {
  const [MALOAI, setMaLoai] = useState();
  const [TENTOUR, setTenTour] = useState();
  const [GTTOUR, setGttour] = useState();
  const [GIATOUR, setGiatour] = useState(0);
  const [NOIDUNGTOUR, setNoidungtour] = useState();
  const [HINHANH, setHinhanh] = useState();
  const [NGAYDI, setNgaydi] = useState();
  const [DIEMDI, setDiemDi] = useState();
  const [DIEMDEN, setDiemDen] = useState();
  // const [NGAYTAO, setNgaytao] = useState();


  // const [state,setState] = useState(initialState);
  // const {MALOAI,TENTOUR,GTTOUR,GIATOUR,NOIDUNGTOUR,HINHANH,NGAYDI,DIEMDI,DIEMDEN,NGAYTAO} = initialState;

  const addTour = async ()=>{
    
    axios.post("/api/products",{
      MALOAI:MALOAI,
      TENTOUR:TENTOUR,
      GTTOUR:GTTOUR,
      GIATOUR:GIATOUR,
      NOIDUNGTOUR:NOIDUNGTOUR,
      HINHANH:HINHANH,
      NGAYDI:NGAYDI,
      DIEMDI:DIEMDI,
      DIEMDEN:DIEMDEN,
      // NGAYTAO:NGAYTAO
    }
    ).then(()=>{
      console.log("success")
    })
  };
   const navigar = useNavigate();
  // const history = useNavigate();
  // const handlesubmit =  (e) =>{
  //    e.prevendefaut();
  //    if(!MALOAI || !TENTOUR || !GTTOUR || !GIATOUR || !NOIDUNGTOUR || !HINHANH || !NGAYDI || !DIEMDI || !DIEMDEN || !NGAYTAO) {
  //     console.log("Please input field")
  //    } else {
  //     addTour(state);
  //     history("success")
  //    }
 
  // }

  return (
    <Fragment>
      <Menutop />
      <Menuleft />
      <div className={classes.themtourpage}  >
        <div className={classes.form}  >
            <div className={classes.cover}>
          <div className={classes.hang1}>
            <div className={classes.tentour} >  
              <label >Tên tour</label>
              <input type="text"  onChange={(event)=>{
               setTenTour (event.target.value)
              }}></input>
            </div>
          
            <div className={classes.loaitour}>
              <label >Loại tour</label>
              <input type="text" onChange={(event)=>{
                setMaLoai(event.target.value)}}></input>
            </div>

            <div className={classes.giatour}>
              <label>Giá tour</label>
              <input type="text" onChange={(event)=>{
                setGiatour(event.target.value)
              }}></input>
            </div>
          </div>

          <div className={classes.hang2}>
            <div className={classes.gioithieu}>
              <label>Giới thiệu</label>
              <input type="text" onChange={(event)=>{
                setGttour(event.target.value)
              }}></input>
            </div>

            <div className={classes.noidung} >
              <label>Nội dung</label>
              <input  type="text" onChange={(event)=>{
                setNoidungtour(event.target.value)
              }}></input>
            </div>
          </div>

          <div className={classes.hang3}>
          <div className={classes.hinhanh}>
            <label>Hình ảnh</label>
            <input type="text" onChange={(event)=>{
                setHinhanh(event.target.value)
              }}></input>
          </div>
          <div className={classes.ngaydi}>
            <label>Ngày đi</label>
            <input type="text" onChange={(event)=>{
                setNgaydi(event.target.value)
              }}></input>
          </div>       
          </div>
          <div className={classes.hang4}>
          <div className={classes.diemdi} >
            <label>Điểm xuất phát</label>
            <input type="text" onChange={(event)=>{
                setDiemDi(event.target.value)
              }}></input>
          </div>
          
          <div className={classes.diemden}  >
            <label>Điểm đến</label>
            <input type="text" onChange={(event)=>{
                setDiemDen(event.target.value)
              }}></input>
          </div>
          </div>
          
          </div>
          <button type="submit" value="Add" onClick={addTour} >Tạo tour</button>
          <button  onClick={() => navigar("/admin/tour")}>Trở về</button>
        </div>
      </div>
    </Fragment>
  );
};
export default ThemTour;
