import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "public/images/logo.png"; 

interface BannerProps {
  title?: any;
  navigation?: any;
  parent?: any;
  parentLink?: any;
}

const CmnBanner = ({ title, navigation, parent, parentLink }: BannerProps) => {
  return (
    <>
      <section
        className="cmn-banner bg-img"
        style={{
          // backgroundImage: "url('/images/banner/cmn-banner-bg.png')",
          background: "transparent",
          height: "auto",
          minHeight: "80px",
        }}
      >
        <div className="container position-relative">
          {/* Logo Top Right */}
          <div 
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingTop: "10px",
            paddingBottom: "10px",
            flexDirection: "column",
            gap: "10px",
          }}
          >

          
             <nav aria-label="breadcrumb">
                  <ol className="breadcrumb" style={{ margin: 0 }}>
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <i className="fa-solid fa-house"></i>
                        Home
                      </Link>
                    </li>
                    {parent && (
                      <li className="breadcrumb-item">
                        <Link href={parentLink}>{parent}</Link>
                      </li>
                    )}
                    <li className="breadcrumb-item active" aria-current="page">
                      {navigation}
                    </li>
                  </ol>
                </nav>
          </div>

          {/* <div className="row gaper align-items-center h-100">
            <div className="col-12 col-lg-5 col-xl-7">
              
              <div className="text-center text-lg-start">
                <h2 className="title title-anim">{title}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <i className="fa-solid fa-house"></i>
                        Home
                      </Link>
                    </li>
                    {parent && (
                      <li className="breadcrumb-item">
                        <Link href={parentLink}>{parent}</Link>
                      </li>
                    )}
                    <li className="breadcrumb-item active" aria-current="page">
                      {navigation}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="col-12 col-lg-7 col-xl-5">
              <div className="text-center text-lg-start">
                <p className="primary-text">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magni consequuntur ipsa, pariatur illo saepe suscipit? Nemo numquam fuga corrupti blanditiis quaerat odit.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default CmnBanner;
