import classes from "./SuaTour.module.css";
import { Fragment } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Menutop from "../Menutop";
import Menuleft from "../Menuleft";
import { Result } from "antd";


const SuaTour = () => {
  const initialState = {
    MALOAI :"",
    TENTOUR:"",
    GTTOUR: "",
    GIATOUR:"",
    NOIDUNGTOUR:"",
    HINHANH:"",
    NGAYDI:"",
    DIEMDI:"",
    DIEMDEN:"",
    NGAYTAO:""
}
  const params = useParams();
  
  const navigar = useNavigate();
  const [tourDetail, setTourDetail] = useState({});
  const [state,setState] = useState(initialState);
  const {MATOUR,MALOAI,TENTOUR,GTTOUR,GIATOUR,NOIDUNGTOUR,HINHANH,NGAYDI,DIEMDI,DIEMDEN,NGAYTAO} = state;
  
  // useEffect(() => {
  //   axios
  //     .get(`https://622ac4ec14ccb950d224ca1b.mockapi.io/TOUR/${params.id}`)
  //     .then((res) => setTourDetail(res.data));
  // }, []);
  const {id} = useParams();
  useEffect(()=>{
    if(id){
      getSingleUser(id);
    }
  },[id])
  const getSingleUser = async (id) =>{
    const respone = await axios.get(`/api/products/${id}`)
    if(respone.status === 200){
      setState({...respone.data[0] })
    }
  }
  const updateUser = async (id,data ) =>{
    const respone = await axios.put(`/api/products/${id}`, state);
    if(respone.status === 202){
      console.log('',respone.data)
      console.log("Update Success")
    }
  }
  // const handleInputChange = (e) =>{
  //   let {MALOAI,TENTOUR,GTTOUR,GIATOUR,NOIDUNGTOUR,HINHANH,NGAYDI,DIEMDI,DIEMDEN,NGAYTAO} = e.target;
  //   // setState({
  //   //   ...state,
  //   //   [MALOAI] : value,
  //   // });
  // }

  return (
    <Fragment>
      <Menutop />
      <Menuleft />
      <div className={classes.suatourpage}>
        <div className={classes.items}>
          {/* <div className={classes.element}>{tourDetail.MATOUR}</div>
          <div className={classes.element}>{tourDetail.LOAITOUR}</div>
          <div className={classes.element}>{tourDetail.TENTOUR}</div>
          <div className={classes.element}>{tourDetail.GIOITHIEU}</div>
          <div className={classes.element}>{tourDetail.GIATOUR} VND</div>
          <div className={classes.element}>{tourDetail.NOIDUNG}</div>
          <img className={classes.hinhanh} alt="example" src={tourDetail.HINHANH} />
          <div className={classes.element}>{tourDetail.NGAYDI}</div>
          <div className={classes.element}>{tourDetail.DIEMDI}</div>
          <div className={classes.element}>{tourDetail.NGAYTAO}</div> */}
        </div>
        <div className={classes.themtourpage}>
        <div className={classes.form}>
            <div className={classes.cover}>
          <div className={classes.hang1}>
            <div className={classes.tentour}>
              <label>Tên tour</label>
              <input type="text" value={TENTOUR} onChange={(event)=>{
               setState(event.target.value)}}/>
            </div>

            <div className={classes.loaitour}>
              <label>Loại tour</label>
              <input type="text" value={MALOAI} onChange={(event)=>{
               setState(event.target.value)}}/>
            </div>

            <div className={classes.giatour}>
              <label>Giá tour</label>
              <input type="text" value={GIATOUR} onChange={(event)=>{
               setState(event.target.value)}}></input>
            </div>
          </div>

          <div className={classes.hang2}>
            <div className={classes.gioithieu}>
              <label>Giới thiệu</label>
              <input type="text" value={GTTOUR}  onChange={(event)=>{
               setState(event.target.value)}}></input>
            </div>

            <div className={classes.noidung}>
              <label>Nội dung</label>
              <input type="text" value={NOIDUNGTOUR} onChange={(event)=>{
               setState(event.target.value)}}></input>
            </div>
          </div>

          <div className={classes.hang3}>
          <div className={classes.hinhanh}>
            <label>Hình ảnh</label>
            <input type="text"value={HINHANH} onChange={(event)=>{
               setState(event.target.value)}}></input>
          </div>
          <div className={classes.ngaydi}>
            <label>Ngày đi</label>
            <input type="text" value={NGAYDI} onChange={(event)=>{
               setState(event.target.value)}}></input>
          </div>       
          </div>
          <div className={classes.hang4}>
          <div className={classes.diemdi}>
            <label>Điểm xuất phát</label>
            <input type="text" value={DIEMDI} onChange={(event)=>{
               setState(event.target.value)}}></input>
          </div>
          
          <div className={classes.ngaytao}>
            <label>Ngày tạo</label>
            <input type="text" value={NGAYTAO} onChange={(event)=>{
               setState(event.target.value)}}></input>
          </div>
          </div>
          
          </div>
          <button type="submit" value={id? "Update" : "Add"} onClick={updateUser} >Cập nhật</button>
          <br></br>
          <br></br>
          <button  onClick={() => navigar("/admin/tour")}>Trở về</button>
        </div>
      </div>
      </div>
    </Fragment>
  );
};

export default SuaTour;
