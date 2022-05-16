import sql from 'mssql/msnodesqlv8';
import config from './dbconfig.js';

// ĐẶT TOUR
async function GetDatas() {
  try {
    let pool = await sql.connect(config);
    let products = await pool
      .request()
      .query(
        'select MATOUR,lt.TENLOAI,TENTOUR,GTTOUR,GIATOUR,NOIDUNGTOUR,HINHANH,NGAYDI,DIEMDI,DIEMDEN,NGAYTAO  from Tour t,LoaiTour lt  where t.MALOAI=lt.MALOAI',
      );
    return products.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function GetData(CategoryMATOUR) {
  try {
    let pool = await sql.connect(config);
    let product = await pool
      .request()
      .input('MATOUR', sql.Int, CategoryMATOUR)
      .query('SELECT * FROM Tour where MATOUR = @MATOUR');
    return product.recordsets;
  } catch (error) {
    console.log(error);
  }
}
async function addTour(Category) {
  try {
    let pool = await sql.connect(config);
    let insertproduct = await pool
      .request()
      .input('MALOAI', sql.Int, Category.MALOAI)
      .input('TENTOUR', sql.NVarChar, Category.TENTOUR)
      .input('GTTOUR', sql.NVarChar, Category.GTTOUR)
      .input('GIATOUR', sql.Int, Category.GIATOUR)
      .input('NOIDUNGTOUR', sql.NVarChar, Category.NOIDUNGTOUR)
      .input('HINHANH', sql.NVarChar, Category.HINHANH)
      .input('NGAYDI', sql.DateTime, Category.NGAYDI)
      .input('DIEMDI', sql.NVarChar, Category.DIEMDI)
      .input('DIEMDEN', sql.NVarChar, Category.DIEMDEN)
      .input('NGAYTAO', sql.DateTime, Category.NGAYTAO)
      .execute('InsertTour');
    return insertproduct.recordsets;
  } catch (err) {
    console.log(err);
  }
}
async function deleteTour(CategoryMATOUR) {
  try {
    let pool = await sql.connect(config);
    let deleteTour = await pool
      .request()
      .input('MATOUR', sql.Int, CategoryMATOUR)
      .execute('DeleteTour');
    return deleteTour.recordsets;
  } catch (error) {
    console.log(error);
  }
}
async function updateTour(CategoryMATOUR, Category) {
  try {
    let pool = await sql.connect(config);
    let updateproduct = await pool
      .request()
      .input('MATOUR', sql.Int, CategoryMATOUR)
      .input('MALOAI', sql.Int, Category.MALOAI)
      .input('TENTOUR', sql.NVarChar, Category.TENTOUR)
      .input('GTTOUR', sql.NVarChar, Category.GTTOUR)
      .input('GIATOUR', sql.Int, Category.GIATOUR)
      .input('NOIDUNGTOUR', sql.NVarChar, Category.NOIDUNGTOUR)
      .input('HINHANH', sql.NVarChar, Category.HINHANH)
      .input('NGAYDI', sql.DateTime, Category.NGAYDI)
      .input('DIEMDI', sql.NVarChar, Category.DIEMDI)
      .input('DIEMDEN', sql.NVarChar, Category.DIEMDEN)
      .input('NGAYTAO', sql.DateTime, Category.NGAYTAO)
      .execute('UpdateTour');
    return updateproduct.recordsets;
  } catch (error) {
    console.log(error);
  }
}

// ĐẶT VÉ;
async function getAllTickets() {
  try {
    const pool = await sql.connect(config);
    const query = `
    SELECT 
        VT.MAVE, 
        LV.TENLOAI AS LOAIVE,
        LV.MALOAI AS MA_LOAI_VE, 
        T.TENTOUR,
        T.MATOUR,
        LT.TENLOAI AS TEN_LOAI_TOUR,
        VT.NGAYCOHIEULUC, 
        VT.NGAYTAO,
        KH.MAKH, KH.HOTEN, 
        VT.GIAVE,
        CASE
          WHEN VT.TRANG_THAI_VE = N'Đã bị xóa' THEN N'Đã bị xóa'
          WHEN VT.TRANG_THAI_VE = N'Đã bị hủy' THEN N'Đã bị hủy'
          WHEN KH.MAKH IS NOT NULL THEN N'Đã được đặt'
          WHEN KH.MAKH IS NULL AND VT.NGAYCOHIEULUC >= GETDATE() THEN N'Còn hiệu lực'
          ELSE N'Đã quá hạn'
        END AS TINHTRANG
    FROM  
        VeTour VT	LEFT JOIN TOUR T ON  T.MATOUR = VT.MATOUR
        LEFT JOIN LoaiTour LT ON T.MALOAI = LT.MALOAI
        LEFT JOIN LoaiVe LV ON  LV.MALOAI = VT.LOAIVE
        LEFT JOIN KhachHang KH ON KH.MAKH = VT.MAKH
    ORDER BY 
        VT.MAVE ASC
    `;
    const products = await pool.request().query(query);
    return products.recordset;
  } catch (error) {
    throw error;
  }
}

async function getTicketByMaVe(maVe) {
  try {
    const pool = await sql.connect(config);
    const queryString = `
    SELECT 
        VT.MAVE, 
        LV.TENLOAI AS LOAIVE,
        LV.MALOAI AS MA_LOAI_VE, 
        T.TENTOUR,
        T.MATOUR,
        LT.TENLOAI AS TEN_LOAI_TOUR,
        VT.NGAYCOHIEULUC, 
        VT.NGAYTAO,
        KH.MAKH, KH.HOTEN, 
        VT.GIAVE,
        CASE
          WHEN VT.TRANG_THAI_VE = N'Đã bị xóa' THEN N'Đã bị xóa'
          WHEN VT.TRANG_THAI_VE = N'Đã bị hủy' THEN N'Đã bị hủy'
          WHEN KH.MAKH IS NOT NULL THEN N'Đã được đặt'
          WHEN KH.MAKH IS NULL AND VT.NGAYCOHIEULUC >= GETDATE() THEN N'Còn hiệu lực'
          ELSE N'Đã quá hạn'
        END AS TINHTRANG
    FROM  
        VeTour VT	LEFT JOIN LoaiTour LT ON  LT.MALOAI = VT.MATOUR
        LEFT JOIN LoaiVe LV ON  LV.MALOAI = VT.LOAIVE
        LEFT JOIN KhachHang KH ON KH.MAKH = VT.MAKH
    WHERE
        VT.MAVE = @VeTour
    ORDER BY 
        VT.MAVE ASC
    `;
    const product = await pool
      .request()
      .input('VeTour', sql.Int, +maVe)
      .query(queryString);
    return product.recordset;
  } catch (error) {
    throw error;
  }
}

async function addve(listve) {
  try {
    let pool = await sql.connect(config);
    let insertvetour = await pool
      .request()
      .input('MATOUR', sql.Int, listve.MATOUR)
      .input('NGAYCOHIEULUC', sql.DateTime, new Date(listve.NGAYCOHIEULUC))
      .input('LOAIVE', sql.Int, listve.LOAIVE)
      .input('NGAYTAO', sql.DateTime, new Date())
      .input('GIAVE', sql.Int, +listve.GIAVE)
      .input('TENKH', sql.NVarChar, listve.TENKH)
      .execute('InsertVe');
    return insertvetour.recordsets;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function deleteVe(maVe) {
  try {
    const pool = await sql.connect(config);
    const deleteVe = await pool
      .request()
      .input('MAVE', sql.Int, +maVe)
      .input('TINH_TRANG_VE', sql.NVarChar, 'Đã bị xóa')
      .execute('setTinhTrangVe');
    return deleteVe.recordsets;
  } catch (error) {
    throw error;
  }
}

async function updateVe(ticketId, data) {
  try {
    const pool = await sql.connect(config);
    const updateveproducts = await pool
      .request()
      .input('MAVE', sql.Int, +ticketId)
      .input('MATOUR', sql.Int, +data.MATOUR)
      .input('NGAYCOHIEULUC', sql.DateTime, new Date(data.NGAYCOHIEULUC))
      .input('LOAIVE', sql.Int, data.LOAIVE)
      .input('NGAYTAO', sql.DateTime, new Date(data.NGAYTAO))
      .input('GIAVE', sql.Int, +data.GIAVE)
      .input('TENKH', sql.NVarChar, data.TENKH)
      .execute('UpdateVe');
    return updateveproducts.recordsets;
  } catch (error) {
    throw error;
  }
}
//  Loai Tour
async function getAllTourTypes() {
  try {
    const pool = await sql.connect(config);
    const query = `SELECT * FROM LoaiTour`;
    const products = await pool.request().query(query);
    return products.recordset;
  } catch (error) {
    throw error;
  }
}

async function addTourType(payload) {
  try {
    const pool = await sql.connect(config);
    const insertproduct = await pool
      .request()
      .input('TENLOAI', sql.NVarChar, payload.TENLOAI)
      .execute('InsertLoaiTour');
    return insertproduct.recordsets;
  } catch (err) {
    throw err;
  }
}

const updateTourType = async (maLoaiTour, payload) => {
  try {
    const pool = await sql.connect(config);
    const query = `
      UPDATE LoaiTour
      SET
        TENLOAI = @TENLOAI
      WHERE 
        MALOAI = @MALOAI
    `;
    const result = await pool
      .request()
      .input('MALOAI', sql.Int, +maLoaiTour)
      .input('TENLOAI', sql.NVarChar, payload.TENLOAI)
      .query(query);
    return result.recordset;
  } catch (error) {
    throw error;
  }
};

async function deleteTourType(maLoaiTour) {
  try {
    let pool = await sql.connect(config);
    let deleteTour = await pool
      .request()
      .input('MALOAI', sql.Int, +maLoaiTour)
      .execute('DeleteLoaiTour');
    return deleteTour.recordsets;
  } catch (error) {
    console.log(error);
  }
}
// Đơn đặt vé
async function GetDonDatVe() {
  try {
    const pool = await sql.connect(config);
    const query = `
    SELECT 
      DDT.MADONDAT AS MA_DON_DAT, 
      DDT.MAKHACHHANG AS MA_KH,
      KH.HOTEN AS TEN_KHACH_HANG,
      DDT.MATOUR AS MA_TOUR,
      LT.TENLOAI AS LOAI_TOUR,
      T.TENTOUR AS TEN_TOUR,
      T.DIEMDEN AS DIEM_DEN,
      T.DIEMDI AS DIEM_DI,
      T.TINH AS TINH_THANH,
      T.GIATOUR AS GIA_TOUR,
      LV.MALOAI AS MA_LOAI_VE,
      LV.TENLOAI AS TEN_LOAI_VE,
      DDT.SOLUONGVEDAT AS SO_LUONG_VE_DAT, 
      DDT.TONGTIEN AS TONG_TIEN,
      DDT.TINHTRANGTHANHTOAN AS TINH_TRANG_THANH_TOAN,
      DDT.TINH_TRANG_DON,
      DDT.NGAYDAT AS NGAY_DAT
  FROM 
      DonDatTour DDT  
      INNER JOIN KhachHang KH on KH.MAKH = DDT.MAKHACHHANG
      INNER JOIN Tour T ON T.MATOUR = DDT.MATOUR
      INNER JOIN LoaiTour LT ON T.MALOAI = LT.MALOAI
      INNER JOIN LoaiVe LV ON LV.MALOAI = DDT.MA_LOAI_VE
  ORDER BY 
      DDT.MADONDAT
    `;
    const products = await pool.request().query(query);
    return products.recordset;
  } catch (error) {
    throw error;
  }
}

async function addDonDatVe(listdondatve) {
  try {
    let pool = await sql.connect(config);
    let insertproduct = await pool
      .request()
      .input('MALOAI', sql.Int, listdondatve.MADATVE)
      .input('TENLOAI', sql.Int, listdondatve.MANGUOIDAT)
      .input('MALOAI', sql.DateTime, listdondatve.NGAYDAT)
      .input('TENLOAI', sql.NVarChar, listdondatve.TINHTRANGTHANHTOAN)
      .input('MALOAI', sql.Int, listdondatve.SOLUONGVEDAT)
      .execute('InsertLoaiTour');
    return insertproduct.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function declineDonDatVe(maDonDat) {
  try {
    const pool = await sql.connect(config);
    const query = `
    UPDATE 
      DonDatTour 
    SET 
      TINH_TRANG_DON = N'Đã hủy đơn', 
      TINHTRANGTHANHTOAN=N'Đã hoàn tiền' 
    WHERE 
      MADONDAT = @MADONDAT
    `;
    const deleteTour = await pool
      .request()
      .input('MADONDAT', sql.Int, +maDonDat)
      .query(query);
    const queryUpdateVeTour = `
      UPDATE 
        VeTour 
      SET 
        TRANG_THAI_VE = N'Đã bị hủy' 
      WHERE 
        MA_DON_DAT = @MA_DON_DAT
      `;
    const updateVeTour = await pool
      .request()
      .input('MA_DON_DAT', sql.Int, +maDonDat)
      .query(queryUpdateVeTour);

    return [deleteTour.recordset, updateVeTour.recordset];
  } catch (error) {
    throw error;
  }
}

const acceptOrder = async (maDonDat, maKH, danhSachCacVe) => {
  try {
    const pool = await sql.connect(config);
    const query1 = `
    UPDATE 
      DonDatTour 
    SET 
      TINH_TRANG_DON = N'Đã duyệt đơn'
    WHERE 
      MADONDAT = ${ maDonDat }
    `;
    const query2 = `
    UPDATE
      VeTour
    SET
      TRANG_THAI_VE = N'Đã được đặt',
      MAKH = ${ maKH },
      MA_DON_DAT = ${ maDonDat }
    WHERE 
      MAVE IN (${ danhSachCacVe.join(',') })`;
    const result = await Promise.all([
      pool.request().query(query1),
      pool.request().query(query2),
    ]);
    return result;
  } catch (error) {
    throw error;
  }
};

const getAllTicketTypes = async () => {
  try {
    const pool = await sql.connect(config);
    const query = `SELECT * FROM LoaiVe`;
    const data = await pool.request().query(query);
    return data.recordset;
  } catch (error) {
    throw error;
  }
};

const createTicketType = async (payload) => {
  try {
    const pool = await sql.connect(config);
    const data = await pool
      .request()
      .input('TENLOAI', sql.NVarChar, payload.TENLOAI)
      .execute('InsertLoaiVe');
    return data.recordset;
  } catch (error) {
    throw error;
  }
};

const updateTicketType = async (maLoaiVe, payload) => {
  try {
    const pool = await sql.connect(config);
    const data = await pool
      .request()
      .input('MALOAI', sql.Int, +maLoaiVe)
      .input('TENLOAI', sql.NVarChar, payload.TENLOAI)
      .execute('UpdateLoaiVe');
    return data.recordset;
  } catch (error) {
    throw error;
  }
};

const deleteTicketType = async (maLoaiVe) => {
  try {
    const pool = await sql.connect(config);
    const data = await pool
      .request()
      .input('MALOAI', sql.Int, +maLoaiVe)
      .execute('DeleteLoaiVe');
    return data.recordset;
  } catch (error) {
    throw error;
  }
};

const findTickerByDonDatTour = async () => {
  try {
    const pool = await sql.connect(config);
    const query = `
    SELECT 
      VT.MAVE, 
      VT.MATOUR AS MA_TOUR,
      T.TENTOUR, 
      LV.TENLOAI AS TEN_LOAI_VE, 
      LV.MALOAI AS MA_LOAI_VE, 
      LT.TENLOAI as TEN_LOAI_TOUR, 
      VT.NGAYTAO as NGAY_TAO, 
      VT.NGAYCOHIEULUC as NGAY_CO_HIEU_LUC,
      VT.GIAVE as GIA_VE
    FROM 
      VeTour VT	INNER JOIN Tour T ON VT.MATOUR = T.MATOUR 
                INNER JOIN DonDatTour DDT ON T.MATOUR = DDT.MATOUR
                INNER JOIN LoaiVe LV ON VT.LOAIVE = LV.MALOAI
                INNER JOIN LoaiTour LT ON T.MALOAI = LT.MALOAI
    WHERE 
      VT.TRANG_THAI_VE = N'Còn hiệu lực' 
    ORDER BY
    VT.MAVE ASC
  `;
    const data = await pool.request().query(query);
    return data.recordset;
  } catch (error) {
    throw error;
  }
};

// Tours
const getAllTours = async () => {
  try {
    const pool = await sql.connect(config);
    const query = `
      SELECT MATOUR AS MA_TOUR, TENTOUR AS TEN_TOUR FROM Tour
    `;
    const result = await pool.request().query(query);
    return result.recordset;
  } catch (error) {
    throw error;
  }
};

// Thống kê
const layThongTinThongKe = async () => {
  try {
    const pool = await sql.connect(config);
    const query = `
    SELECT 
      TRANG_THAI_VE, 
      MONTH(NGAYCOHIEULUC) as THANG,
      YEAR(NGAYCOHIEULUC) as NAM,
      count(MAVE) as SO_LUONG_VE, 
      count(MAKH) as SO_KHACH_HANG, 
      sum(GIAVE) as TONG_DOANH_THU 
    FROM 
      VeTour 
    GROUP BY TRANG_THAI_VE, MONTH(NGAYCOHIEULUC), YEAR(NGAYCOHIEULUC)
    `;
    const result = await pool.request().query(query);
    return result.recordset;
  } catch (error) {
    throw error;
  }
};

// Đặt tour
const taoDonDatTour = async (payload) => {
  try {
    const pool = await sql.connect(config);
    const { maKH, maTour, ngayDat, soLuong, tongTien, maLoaiVe } = payload;
    const query = `
    INSERT INTO DonDatTour(MAKHACHHANG, MATOUR, NGAYDAT, TINHTRANGTHANHTOAN,SOLUONGVEDAT,TONGTIEN,MA_LOAI_VE, TINH_TRANG_DON)
    VALUES(${ maKH }, ${ maTour }, ${ ngayDat }, N'Đã thanh toán', ${ soLuong }, ${ tongTien }, ${ maLoaiVe }, N'Đang xử lý')
    `;
    console.log(query);
    const result = await pool.request().query(query);
    return result.recordset;
  } catch (error) {
    throw error;
  }
};
export default {
  GetData,
  GetDatas,
  getAllTourTypes,
  GetDonDatVe,
  getAllTickets,
  getTicketByMaVe,
  addTour,
  deleteTour,
  updateTour,
  addve,
  updateVe,
  deleteVe,
  addTourType,
  deleteTourType,
  addDonDatVe,
  declineDonDatVe,
  getAllTicketTypes,
  createTicketType,
  deleteTicketType,
  updateTicketType,
  updateTourType,
  getAllTours,
  findTickerByDonDatTour,
  acceptOrder,
  layThongTinThongKe,
  taoDonDatTour,
  sql,
};
