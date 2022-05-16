import classes from './Menuleft.module.css';

const Menuleft = () => {
  return (
    <div className={classes.menuleft}>
      <div className={classes.logo}>
        <a>
          <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/86afd0785f5505dd6d584971576dea27.svg' />
        </a>
      </div>
      <div className={classes.menu}>
        <ul>
          <li>
            <a href='/admin/thongke'>Thống kê</a>
          </li>
          <li>
            <a href='/admin/tour'>Tour</a>
          </li>
          <li>
            <a href='/admin/loaitour'>loại Tour</a>
          </li>
          <li>
            <a href='/admin/quan-ly-ve'>Quản Lý Vé</a>
          </li>
          <li>
            <a href='/admin/quan-ly-loai-ve'>Loại vé</a>
          </li>
          <li>
            <a href='/admin/dondattour'>Đơn đặt vé</a>
          </li>
          <li>
            <a>Tin tức</a>
          </li>
          <li>
            <a>Bình luận</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menuleft;
