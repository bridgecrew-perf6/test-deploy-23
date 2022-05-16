import React, { useState } from "react";

// Style
import "./style.css";

// Data
import { HeaderMenu } from "./settings";

// Components
import HeaderBack from "../HeaderBack";

const Header = () => {
  const [type, setType] = useState("password");

  return (
    <div className="hd-main">
      <div className="hd-wraper">
        <div className="hd-menu">
          <div className="hd-left">
            <img
              src={require(`../../assets/header/open-menu.svg`).default}
              alt="open-menu"
              className="hd-icon-open-menu"
            />
            <a href="/">
              <img
                src={require("../../assets/header/logo-traveloka.svg").default}
                alt="logo"
                className="logo"
              />
            </a>
          </div>
          <div className="hd-right">
            {HeaderMenu.map((item, index) => (
              <div key={index} className="hd-link-gr">
                <img
                  src={require(`../../assets/header/${item.icon}.svg`).default}
                  alt={item.icon}
                  className="hd-icon-link"
                />
                <a className="hd-link" key={index} href={item.href}>
                  {item.title}
                </a>
              </div>
            ))}
            <div className="hd-link-gr">
              <img
                src={require(`../../assets/header/currency.svg`).default}
                alt="currency"
                className="hd-icon-link-cus hd-icon-link"
              />
              <p className="hd-currency">VND</p>
              <img
                src={require(`../../assets/header/chev-down.svg`).default}
                alt="ddl"
                className="hd-icon-ddl"
              />
            </div>
            <div className="hd-link-gr hd-login dropdown">
              <img
                src={require(`../../assets/header/login.svg`).default}
                alt="login"
                className="hd-icon-link-cus login hd-icon-link"
              />
              <p className="hd-currency">Đăng nhập</p>
              <img
                src={require(`../../assets/header/chev-down.svg`).default}
                alt="ddl"
                className="hd-icon-ddl"
              />
              <div className="hd-login-sub dropdown-list">
                <div className="hd-login">
                  <p className="hd-title-form">Đăng nhập tài khoản</p>
                  <div className="hd-gr-input">
                    <div className="hd-title-input">
                      <p className="hd-text-input">Email hoặc số di động</p>
                    </div>
                    <div className="hd-gr-input">
                      <input type="text" className="hd-input" />
                    </div>
                  </div>
                  <div className="hd-gr-input">
                    <div className="hd-title-input">
                      <p className="hd-text-input">Mật khẩu</p>
                      <a href="#" className="hd-forgot-pass">
                        Quên mật khẩu
                      </a>
                    </div>
                    <div className="hd-gr-input">
                      <input type={type} className="hd-input" />
                      <img
                        onClick={() => {
                          type === "password"
                            ? setType("text")
                            : setType("password");
                        }}
                        className="hd-input-eye"
                        src={require("../../assets/header/eye.svg").default}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="hd-gr">
                    <button className="hd-btn-login">
                        <a href="/user/account" style={{ textDecoration: "none", color: "#fff" }}>Đăng nhập</a>
                        </button>
                    <div className="hd-register">
                      Bạn chưa có tài khoản?
                      <a href="#">Đăng ký</a>
                    </div>
                  </div>
                </div>
                <div className="hd-or-login">
                  <p>Hoặc đăng nhập bằng:</p>
                  <div className="hd-login-with">
                    <div className="hd-btn-login-with login-facebook">
                      <img
                        className="login-with"
                        src={
                          require("../../assets/header/facebook.svg").default
                        }
                        alt=""
                      />
                      &nbsp;Facebook
                    </div>
                    <div className="hd-btn-login-with login-google">
                      <img
                        className="login-with"
                        src={require("../../assets/header/google.svg").default}
                        alt=""
                      />
                      &nbsp;Google
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hd-signup">
              <a
                href="/register"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Đăng ký
              </a>
            </div>
          </div>
        </div>
      </div>
      <HeaderBack />
    </div>
  );
};

export default Header;
