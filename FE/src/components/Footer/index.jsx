import React, { memo } from "react";
import "./style.css";

// Data
import { Partner, ABOUT, FOLLOW, PRODUCT, OTHER } from "./setting";

const Footer = () => {
  return (
    <>
    <div style={{clear:'both'}}></div>
      <div className="ft-wraper">
        <div className="ft-content">
          <div className="ft-gr">
            <div className="ft-gr-logo">
              <img src={require(`../../assets/footer/logo-traveloka-white.svg`).default} alt="logo" className="ft-logo" />
            </div>
            <div className="ft-gr-sec">
              <img src={require(`../../assets/footer/rapid-ssl.svg`).default} alt="security" className="ft-sec" />
              <img src={require(`../../assets/footer/verysign.svg`).default} alt="security" className="ft-sec" />
              <img src={require(`../../assets/footer/iata.svg`).default} alt="security" className="ft-sec" />
              <img src={require(`../../assets/footer/bsi.webp`).default} alt="security" className="ft-sec" />
              <img src={require(`../../assets/footer/pci.webp`).default} alt="security" className="ft-sec" />
              <img src={require(`../../assets/footer/dk-bocongthuong.webp`).default} alt="security" className="ft-sec" />
              <img src={require(`../../assets/footer/dk-bocongthuong.webp`).default} alt="security" className="ft-sec" />
            </div>
            <div className="ft-partner-traveloka">
              <img src={require('../../assets/footer/hand.svg').default} alt="parner" />
              Hợp tác với Traveloka
            </div>
            <p className="ft-title-partner">Đối tác thanh toán</p>
            <div className="ft-partner">
              {
                Partner.map((item, index) => (
                  <div className="ft-partner-wrap">
                    <img className="ft-img-partner" key={index} src={require(`../../assets/footer/partner/${item.icon}`).default} alt={index} />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="ft-about-follow">
            <div className="ft-about ft-1">
              <p className="ft-title ft-title-about">{ABOUT.title}</p>
              {
                ABOUT.items.map((item, index) => (
                  <div className="ft-gr-link">
                    <a key={index} href={item.href} className="ft-link">{item.title}</a>
                  </div>
                ))
              }
            </div>
            <div className="ft-follow ft-1">
              <p className="ft-title ft-title-follow">{FOLLOW.title}</p>
              {
                FOLLOW.items.map((item, index) => (
                  <div className="ft-gr-link-follow">
                    <a key={index} href={item.href} className="ft-link">
                      <img className="__ft-link-follow" src={require(`../../assets/footer/socials/${item.icon}.svg`).default} alt={item.icon} />
                      {item.title}
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="ft-product">
            <div className="ft-product ft-1">
              <p className="ft-title ft-title-product">{PRODUCT.title}</p>
              {
                PRODUCT.items.map((item, index) => (
                  <div className="ft-gr-link">
                    <a key={index} href={item.href} className="ft-link">{item.title}</a>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="ft-other">
            <div className="ft-other ft-1">
              <p className="ft-title ft-title-other">{OTHER.title}</p>
              {
                OTHER.items.map((item, index) => (
                  <div className="ft-gr-link">
                    <a key={index} href={item.href} className="ft-link">{item.title}</a>
                  </div>
                ))
              }
            </div>
            <div className="ft-download-app">
              <p className="ft-title">Tải ứng dụng Traveloka</p>
              <img className="ft-icon-da" src={require(`../../assets/footer/download-app/android.svg`).default} alt='andorid' />
              <img className="ft-icon-da" src={require(`../../assets/footer/download-app/ios.svg`).default} alt='ios' />
            </div>
          </div>
        </div>
      </div>
      <div className="ft-copy-right">
        <p className="ft-title-cpr">Công ty TNHH Traveloka Việt Nam. Mã số DN: 0313581779. Tòa nhà An Phú, 117-119 Lý Chính Thắng, P. 7, Q. 3, TPHCM</p>
        <p className="ft-cpr-tvl">Copyright © 2022 Traveloka</p>
      </div>
    </>
  );
};
export default memo(Footer);
