import React from "react";
import { Fragment } from "react";
import './style.css';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Footer from "../Footer";
import Header from "../Header";

// import CloseIcon from '@mui/icons-material/Close';

const PageRegister = () => {
  const [statusView, setStatusView] = React.useState(0);
  const [methodInput, setmethodInput] = React.useState(0);
  const [ValueInput, setValueInput] = React.useState('');
  const [otp,setOTP] = React.useState('');
  const Country = [
    "Afghanistan (+93)",
    "Albania (+355)", 
    "Algeria (+213)", 
    "American Samoa (+1684)", 
    "Andorra (+376)", 
    "Angola (+244)", 
    "Anguilla (+1264)", 
    "Antarctica (+672)", 
    "Antigua and Barbuda (+1268)", 
    "Argentina (+54)", 
    "Armenia (+374)", 
    "Aruba (+297)", 
    "Australia (+61)", 
    "Austria (+43)", 
    "Azerbaijan (+994)", 
    "Bahamas (+1242)", 
    "Bahrain (+973)", 
    "Bangladesh (+880)", 
    "Barbados (+1246)", 
    "Belarus (+375)", 
    "Belgium (+32)", 
    "Belize (+501)", 
    "Benin (+229)", 
    "Bermuda (+1441)", 
    "Bhutan (+975)", 
    "Bolivia (+591)", 
    "Bosnia and Herzegovina (+387)", 
    "Botswana (+267)", 
    "Bouvet Island (+47)", 
    "Brazil (+55)", 
    "British Indian Ocean Territory (+246)", 
    "British Virgin Islands (+1284)", 
    "Brunei (+673)", 
    "Bulgaria (+359)", 
    "Burkina Faso (+226)", 
    "Burundi (+257)", 
    "Cambodia (+855)", 
    "Cameroon (+237)", 
    "Canada (+1)", 
    "Cape Verde (+238)", 
    "Cayman Islands (+1345)", 
    "Central African Republic (+236)", 
    "Chad (+235)", 
    "Chile (+56)", 
    "China (+86)", 
    "Christmas Island (+61)", 
    "Cocos Islands (+61)", 
    "Colombia (+57)", 
    "Comoros (+269)", 
    "Congo Democratic Republic (+243)", 
    "Congo Republic (+242)", 
    "Cook Islands (+682)", 
    "Costa Rica (+506)", 
    "Croatia (+385)", 
    "Cuba (+53)", 
    "Cyprus (+357)", 
    "Czech Republic (+420)", 
    "Denmark (+45)", 
    "Djibouti (+253)", 
    "Dominica (+1767)", 
    "Dominican Republic (+1809)", 
    "Ecuador (+593)", 
    "Egypt (+20)", 
    "El Salvador (+503)", 
    "Equatorial Guinea (+240)", 
    "Eritrea (+291)", 
    "Estonia (+372)", 
    "Ethiopia (+251)", 
    "Falkland Islands (+500)", 
    "Faroe Islands (+298)", 
    "Fiji (+679)", 
    "Finland (+358)", 
    "France (+33)", 
    "French Polynesia (+689)", 
    "French Southern Territories (+569)", 
    "Gabon (+241)", 
    "Gambia (+220)", 
    "Georgia (+995)", 
    "Germany (+49)", 
    "Ghana (+233)", 
    "Gibraltar (+350)", 
    "Greece (+30)", 
    "Greenland (+299)", 
    "Grenada (+1473)", 
    "Guam (+1671)", 
    "Guatemala (+502)", 
    "Guernsey (+44)", 
    "Guinea (+224)", 
    "Guinea-Bissau (+245)", 
    "Guyana (+592)", 
    "Haiti (+509)", 
    "Heard Island and McDonald (+Islands)", 
    "Holy See (+39)", 
    "Honduras (+504)", 
    "Hong Kong (+852)", 
    "Hungary (+36)", 
    "Iceland (+354)", 
    "India (+91)", 
    "Indonesia (+62)", 
    "Iran (+98)", 
    "Iraq (+964)", 
    "Ireland (+353)", 
    "Isle of Man (+44)", 
    "Israel (+972)", 
    "Italy (+39)", 
    "Ivory Coast (+225)", 
    "Jamaica (+1876)", 
    "Japan (+81)", 
    "Jersey (+441534)", 
    "Jordan (+962)", 
    "Kazakhstan (+7)", 
    "Kenya (+254)", 
    "Kiribati (+686)", 
    "Korea North (+850)", 
    "Korea South (+82)", 
    "Kuwait (+965)", 
    "Kyrgyzstan (+996)", 
    "Laos (+856)", 
    "Latvia (+371)", 
    "Lebanon (+961)", 
    "Lesotho (+266)", 
    "Liberia (+231)", 
    "Libya (+218)", 
    "Liechtenstein (+423)", 
    "Lithuania (+370)", 
    "Luxembourg (+352)", 
    "Macau (+853)", 
    "Macedonia (+389)", 
    "Madagascar (+261)", 
    "Malawi (+265)", 
    "Malaysia (+60)", 
    "Maldives (+960)", 
    "Mali (+223)", 
    "Malta (+356)", 
    "Marshall Islands (+692)", 
    "Mauritania (+222)", 
    "Mauritius (+230)", 
    "Mayotte (+262)", 
    "Mexico (+52)", 
    "Micronesia (+691)", 
    "Moldova (+373)", 
    "Monaco (+377)", 
    "Mongolia (+976)", 
    "Montenegro (+382)", 
    "Montserrat (+1664)", 
    "Morocco (+212)", 
    "Mozambique (+258)", 
    "Myanmar (+95)", 
    "Namibia (+264)", 
    "Nauru (+674)", 
    "Nepal (+977)", 
    "Netherlands (+31)", 
    "Netherlands Antilles (+599)", 
    "New Caledonia (+687)", 
    "New Zealand (+64)", 
    "Nicaragua (+505)", 
    "Niger (+227)", 
    "Nigeria (+234)", 
    "Niue (+683)", 
    "Norfolk Island (+672)", 
    "Northern Mariana Islands (+1670)", 
    "Norway (+47)", 
    "Oman (+968)", 
    "Pakistan (+92)", 
    "Palau (+680)", 
    "Palestinian Territory (+970)", 
    "Panama (+507)", 
    "Papua New Guinea (+675)", 
    "Paraguay (+595)", 
    "Peru (+51)", 
    "Philippines (+63)", 
    "Pitcairn (+64)", 
    "Poland (+48)", 
    "Portugal (+351)", 
    "Puerto Rico (+1)", 
    "Qatar (+974)", 
    "Romania (+40)", 
    "Russia (+7)", 
    "Rwanda (+250)", 
    "Saint Barthelemy (+590)", 
    "Saint Helena Ascension and Tristan da Cunha (+290)", 
    "Saint Kitts and Nevis (+1869)", 
    "Saint Lucia (+1758)", 
    "Saint Martin (+590)", 
    "Saint Pierre and Miquelon (+508)", 
    "Saint Vincent and the Grenadines (+1784)", 
    "Samoa (+685)", 
    "San Marino (+378)", 
    "Sao Tome and Principe (+239)", 
    "Saudi Arabia (+966)", 
    "Senegal (+221)", 
    "Serbia (+381)", 
    "Seychelles (+248)", 
    "Sierra Leone (+232)", 
    "Singapore (+65)", 
    "Slovakia (+421)", 
    "Slovenia (+386)", 
    "Solomon Islands (+677)", 
    "Somalia (+252)", 
    "South Africa (+27)", 
    "Spain (+34)", 
    "Sri Lanka (+94)", 
    "Sudan (+249)", 
    "Suriname (+597)", 
    "Svalbard (+47)", 
    "Swaziland (+268)", 
    "Sweden (+46)", 
    "Switzerland (+41)", 
    "Syria (+963)", 
    "Taiwan (+886)", 
    "Tajikistan (+992)", 
    "Tanzania (+255)", 
    "Thailand (+66)", 
    "Timor-Leste (+670)", 
    "Togo (+228)", 
    "Tokelau (+690)", 
    "Tonga (+676)", 
    "Trinidad and Tobago (+1868)", 
    "Tunisia (+216)", 
    "Turkey (+90)", 
    "Turkmenistan (+993)", 
    "Turks and Caicos Islands (+1649)", 
    "Tuvalu (+688)", 
    "Uganda (+256)", 
    "Ukraine (+380)", 
    "United Arab Emirates (+971)", 
    "United Kingdom (+44)", 
    "United States (+1)", 
    "Uruguay (+598)", 
    "Uzbekistan (+998)", 
    "Vanuatu (+678)", 
    "Venezuela (+58)", 
    "Vietnam (+84)", 
    "Virgin Islands (+1340)", 
    "Wallis and Futuna (+681)", 
    "Western (+Sahara)", 
    "Yemen (+967)", 
    "Zambia (+260)", 
    "Zimbabwe (+263)"
  ];
  const [CountryDefault,setCountryDefault] = React.useState("Indonesia (+62)");
  const showoption = () => {
    setStatusView(1);
  }
  const [dataSend, setDataSend] = React.useState('');
  const [statusSubmit, setStatusSubmit] = React.useState(0);
  const [valiadtedinput,setvaliadtedinput] = React.useState(0);

  const ChangeMethodInput = () => {
    setmethodInput(!methodInput);
  }
  const SubmitRegister = () => {
    if(ValueInput !== '') {
      setStatusSubmit(1);
    } else {
      setvaliadtedinput(1);
    }
  }
  const EnterOTP = (e) => {
    setOTP(e.target.value);
  }
  const ChangeInputInfo = (e) => {
    setValueInput(e.target.value);
  }

  const [show,setshow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  return (
    <Fragment>
      <Header/>
    <div className="page-rigister">
        <Collapse in={open}>
          <Alert>
            Yêu cầu của bạn đã được xử lý thành công
          </Alert>
        </Collapse>
      <div className="title">
        <div className="content-title">
          <h1>Đăng ký thành viên của Traveloka và trải nghiệm ưu đãi hấp dẫn!</h1>
          <h3>Thật nhanh và an toàn, hãy đăng ký ngay để được:</h3>
        </div>
      </div>
      <div className="form-rigister">
        <div className="content-left">
          <div className="content-endow">
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/07/03/1530614225701-39530c6a0da573b6c3e09f76039ca6d4.svg?tr=h-65,q-75,w-65" alt="img" />
            <div className="content-endow-title">
              <b>Nhận thưởng cho mỗi đặt chỗ</b>
            </div>
            <div className="content-endow-value">
              <p>Tích điểm cho mỗi đặt vé máy bay và phòng khách sạn. Quy đổi để du lịch tiết kiệm hơn! </p>
              <a href="#"> Tìm hiểu thêm</a>
            </div>
          </div>

          <div className="content-endow">
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/07/03/1530614228123-9d71e6132b3ad5abe5fa845c3d98e809.svg?tr=h-65,q-75,w-65" alt="img" />
            <div className="content-endow-title">
              <b>Thanh toán không cần thẻ với travelokaPay</b>
            </div>
            <div className="content-endow-value">
              <p>Lưu thông tin thẻ trong My Cards để thanh toán an toàn và thuận tiện cho lần sau.</p>
              <a href="#"> Tìm hiểu thêm</a>
            </div>
          </div>
        </div>
        <div className="content-right">
        <div className="content-endow">
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/07/03/1530614231070-0f61666d276f6892958421d263381c08.svg?tr=h-65,q-75,w-65" alt="img" />
            <div className="content-endow-title">
              <b>Tiện lợi ngay cả sau khi đặt chỗ</b>
            </div>
            <div className="content-endow-value">
              <p>Xem vé điện tử và phiếu thanh toán khi không có kết nối mạng. Hoàn tiền hoặc đổi lịch dễ dàng khi bạn phải thay đổi kế hoạch.<a href="#"> Tìm hiểu thêm</a></p>
            </div>
          </div>

          <div className="content-endow">
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/07/03/1530614234486-955449d244902e8387895898ad126485.svg?tr=h-65,q-75,w-65" alt="img" />
            <div className="content-endow-title">
              <b>Trải nghiệm đặt chỗ suôn sẻ</b>
            </div>
            <div className="content-endow-value">
              <p>Tính năng Thông báo giá giúp bạn dễ dàng đặt vé vào thời điểm thích hợp nhất. Điền thông tin hành khách trong nháy mắt với Passenger Quick Pick. </p>
              <a href="#"> Tìm hiểu thêm</a>
            </div>
          </div>
        </div>
        <div className="form-content">
          <div className="form-content-submit">
            <div className="info-register">
            {statusSubmit == 0 ? 
            <>
              <div className="info-register-title">
               <h2>Đăng ký thành viên Traveloka!</h2>
              </div>
              <div className="input-info">
                <div className="input-method">
                  <h4>{methodInput == 0 ? "Số di động" : "Email"}</h4>
                  <h4><button onClick={ChangeMethodInput}>{methodInput == 0 ?"Dùng Email?" : "Dùng số di động?" } </button></h4>
                </div>
                <div className="note-input-info">
                  <h6>Thông tin của bạn hoàn toàn được bảo mật.</h6>
                </div>
                <div className="input-data-form">
                {methodInput == 1 
                  ?
                    <div className="div-email">
                      <input type="text" onChange={ChangeInputInfo} placeholder="VD:email@example.com" />
                    </div> 
                  : <>
                     <div className="div-country">
                      <div className="option-country" onClick={() => setshow(!show)}>
                        { CountryDefault.substr(CountryDefault.indexOf("("), CountryDefault.indexOf(")")).replace("(","").replace(")","")}
                      </div>
                      <div className="div-country-option" style={show == true ? {height: "450px"} : {height: "0px"}}>
                      {Country.map(val => 
                        <div onClick={() => {
                           setshow(!show)
                           setCountryDefault(val)} } className="option-slected">
                          {val}
                        </div>
                      )}
                      </div>
                    </div>
                    <div className="div-phone">
                      <input onChange={ChangeInputInfo} type="text" placeholder="VD: 903571113"/>
                    </div>  
                  </>
                }               
                  <div className="div-submit">
                    <button onClick={SubmitRegister}>Tham gia</button>
                  </div>
                </div>
                <div className="note-input-submit">
                  {valiadtedinput === 0 ? 
                    <h6> Xin lưu ý bạn không cần nhập mã quốc gia.</h6>
                  : <h6> <span className="validate">Mục bắt buộc.</span><br></br> Xin lưu ý bạn không cần nhập mã quốc gia.</h6>}
                </div>
                <div className="note-input-login">
                  Bạn đã đăng ký? <a href="#"> Đăng nhập</a>
                </div>
                <div className="note-input-policy">
                Bằng việc đăng ký, tôi đồng ý với các <a> Điều khoản & Điều kiện </a> và <a> Chính sách về quyền riêng tư </a> của Traveloka.
                </div>
              </div>
              <div className="fb">
                <div className="fb-icon">
                  <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5f2c27c2674ad4a01c1cd42b2e0884aa.svg" alt="icon-fb" />
                </div>
                &nbsp;
                <div className="fb-name">
                  Facebook
                </div>
              </div>
              <div className="gg">
                <div className="gg-icon">
                  <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c6bf231775a1d162b567c0882e1d7e3b.svg" alt="icon-fb" />
                </div>
                &nbsp;
                <div className="fb-name">
                  Google
                </div>
              </div>
              <div className="security">
                <div className="security-icon">
                  <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6682e84a4c10106c41c2cd3bb5ecabcf.svg" />
                </div>
                <div className="security-content">
                  Bảo mật đa lớp bao gồm thông báo khi đăng nhập, mã xác thực và xác thực bằng vân tay.<a>Tìm hiểu thêm</a>
                </div>
              </div>
              <div className="author">
                  © 2022 Traveloka
              </div>
            </>
            :
            <>
              <div className="info-register-title">
               <h2>Xác thực tài khoản</h2>
              </div>
              <div className="input-info">
                <div className="message-submit">
                Mã xác thực đã được gửi đến: {ValueInput}. Bạn vui lòng điền mã để xác nhận.
                </div>
                <div className="note-input-info-message">
                  <h5>Mã xác thực</h5>
                </div>
                <div className="input-data-form">
                  <div className="div-otp">
                    <input onChange={EnterOTP} value={otp} type="text" />
                  </div>        
                  <div className="div-submit">
                    {otp === '' ?<button className="submit-otp" onClick={SubmitRegister}>Xác thực</button> : <a href="/user/account"> <button onClick={SubmitRegister}>Xác thực</button></a>}
                  </div>
                </div>
                <div className="note-input-submit-message">
                  <h5>Bạn chưa nhận được mã xác thực? <a href="#" onClick={() => {
                    setOpen(true);
                  }}> Gửi lại!</a></h5>
                </div>
              </div>
              <div className="author">
                  © 2022 Traveloka
              </div>
            </> 
            }
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </Fragment>
  );
};

export default PageRegister;
