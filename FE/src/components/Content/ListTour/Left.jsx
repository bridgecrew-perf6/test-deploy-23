import classes from "./Left.module.css";

const Left = () => {
  return (
    <div className={classes.container}>
      <h1>Đặt lại bộ lọc</h1>
    <div className={classes.left}>
      

      <div className={classes.boloc}>
        <h2>Độc quyền Xperience</h2>
        <hr className={classes.line}/>
        <div className={classes.tag}>
          <p>Trãi nghiệm mới</p> 
          <p>đi muôn nơi</p> 
          
          
        </div>
      </div>

      <div className={classes.boloc}>
        <h2>Thêm bộ lọc</h2>
        <hr className={classes.line}/>
        <div className={classes.tag}>
          
        </div>
      </div>
      
      <div className={classes.boloc}>
        <h2>Tình trạng sẵn có</h2>
        <hr className={classes.line}/>
        <div className={classes.tag}>
          
        </div>
      </div>

      <div className={classes.boloc}>
        <h2>Danh mục</h2>
        <hr className={classes.line}/>
        <div className={classes.tag}>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Left;
