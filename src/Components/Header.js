import React, { useState } from "react";

function Header() {

  const [num, setNum] = useState(0);

  return (
    <div className="container-fluid header text-white py-5">
      <div className="container mb-5 mb-md-2 mb-lg-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 px-5">
            <img src="/images/title-text.svg" className="w-100 mt-5" alt="" />
          </div>
          <div className="col-lg-3 col-md-4 px-5 px-md-4 px-lg-5 d-flex-justify-content-end">
            <button className="mt-5 btn-purple  mt-3 w-100">CONNECT WALLET</button>
          </div>
        </div>
        <div className="row justify-content-center px-5 px-md-4">
          <div className="col-lg-8 col-md-10 col-12  mt-5">
            <div className="row site__box">
              <div className="col-lg-7 col-md-7 p-4 p-lg-5 siteBox__left d-flex flex-column align-items-center">
                <img
                  className="moonbird-logo"
                  src="/images/moonbird-official-pfp.png"
                  alt=""
                />
                <h5 className="text-center mt-5">Find a Moonbird</h5>
                <div className="row flex-column mt-4 w-100">
                <input value={num} onChange={(e) => {setNum(e.target.value)}} min={0} type="number" className="w-100 mt-2 btn-green header__input" />
                  <a className="btn-green mt-2">VIEW ON OPEN SEA</a>
                  <a className="btn-green mt-2">VIEW ON LOOKSRARE</a>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 p-4 p-lg-5 d-flex flex-column align-items-center justify-content-between siteBox__right">
                <div className="header-svg">
                  <svg
                    viewBox="0 0 116 94"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-28 shape-crisp-edges ml-3"
                  >
                    <path d="M18 10h-2v2h2v-2Z" fill="#539453"></path>
                    <path d="M18 12h-2v2h2v-2Z" fill="#366B39"></path>
                    <path d="M78 12h-2v2h2v-2Z" fill="#539453"></path>
                    <path
                      d="M78 14h-2v2h2v-2ZM106 34h-2v2h2v-2ZM108 36h-2v2h2v-2Z"
                      fill="#366B39"
                    ></path>
                    <path
                      d="M112 36h-2v2h2v-2ZM114 38h-2v2h2v-2Z"
                      fill="#539453"
                    ></path>
                    <path
                      d="M74 48h-2v2h2v-2ZM76 48h-2v2h2v-2Z"
                      fill="#366B39"
                    ></path>
                    <path d="M16 68h-2v2h2v-2Z" fill="#539453"></path>
                    <path d="M20 68h-2v2h2v-2Z" fill="#366B39"></path>
                    <path
                      d="M44 2h-2v2h2V2ZM46 4h-2v2h2V4ZM48 6h-2v2h2V6ZM50 8h-2v2h2V8ZM56 12h2v-2h-6v2h4ZM64 12h-4v2h4v-2ZM28 16h10v2h10v-2h-4v-2H24v2h4ZM68 14h-2v2h2v-2ZM24 18v-2h-6v2h6ZM72 16h-2v2h2v-2ZM90 16h-2v4h2v-4ZM16 18h-2v2h2v-2ZM14 20h-2v2h2v-2ZM76 22h2v2h2v-4h-2v-2h-6v2h4v2ZM92 20h-2v2h2v-2ZM12 22h-2v2h2v-2ZM94 22h-2v2h2v-2ZM10 24H8v2h2v-2ZM20 24h-2v2h2v-2ZM86 24h-2v2h2v-2ZM96 24h-2v2h2v-2ZM18 26h-2v2h2v-2ZM82 26h-2v4h2v-4ZM88 26h-2v2h2v-2ZM96 28v2h2v-4h-2v2ZM16 28h-2v2h2v-2ZM88 28v2h4v-2h-4ZM14 30h-2v2h2v-2ZM84 30h-2v2h2v-2ZM106 30h-2v2h4v-2h-2ZM86 32h-2v4h2v-4ZM104 32h-2v2h2v-2ZM88 36h-2v2h2v-2ZM90 38h-2v2h2v-2ZM80 46h-2v2h2v-2ZM78 48h-2v2h2v-2ZM24 50h-2v2h2v-2ZM74 50h-2v2h2v-2ZM26 52h-2v2h2v-2ZM72 52h-2v2h2v-2ZM28 54h-2v2h4v-2h-2ZM70 54h-2v2h2v-2ZM32 56h-2v2h4v-2h-2ZM64 56v2h4v-2h-4ZM36 58h-2v2h2v-2ZM40 58h-2v2h4v-2h-2ZM58 58h-8v2h12v-2h-4ZM28 60h-2v2h2v-2ZM38 60h-2v2h2v-2ZM46 60h-4v2h8v-2h-4ZM30 62h-2v2h2v-2ZM40 62h-2v2h2v-2ZM52 64h4v-2h-6v2h2ZM32 64h-2v2h2v-2ZM42 66h2v-2h-4v2h2ZM34 66h-2v2h2v-2ZM46 68h4v-2h-6v2h2ZM36 68h-2v2h2v-2Z"
                      fill="#DEA561"
                    ></path>
                    <path d="M12 70h-2v2h2v-2Z" fill="#539453"></path>
                    <path
                      d="M78 12v2h4v-2h-4ZM76 14h-2v2h2v-2ZM108 34h-2v2h2v-2ZM110 36h-2v2h2v-2ZM78 44h-2v2h2v-2ZM76 46h-2v2h2v-2ZM18 68h-2v2h2v-2ZM14 70h-2v2h2v-2Z"
                      fill="#4E8B53"
                    ></path>
                    <path
                      d="M16 70h-2v2h2v-2ZM18 70h-2v2h2v-2Z"
                      fill="#366B39"
                    ></path>
                    <path
                      d="M20 70h-2v2h2v-2ZM10 72H8v2h2v-2Z"
                      fill="#539453"
                    ></path>
                    <path
                      d="M12 72h-2v2h2v-2ZM14 72h-2v2h2v-2Z"
                      fill="#366B39"
                    ></path>
                    <path d="M16 72h-2v2h2v-2Z" fill="#539453"></path>
                    <path d="M10 74H8v2h2v-2Z" fill="#366B39"></path>
                    <path
                      d="M12 74h-2v2h2v-2ZM8 76H6v2h2v-2Z"
                      fill="#539453"
                    ></path>
                    <path
                      d="M18 12v2h4v-2h-4ZM80 14h-2v2h2v-2ZM106 36h-2v2h2v-2ZM110 38h-2v2h4v-2h-2ZM114 40h-2v2h2v-2ZM78 46h-2v2h2v-2ZM16 72v2h4v-2h-4ZM8 74H6v2h2v-2ZM12 74v2h4v-2h-4ZM8 76v2h4v-2H8Z"
                      fill="#437948"
                    ></path>
                    <path
                      d="M52 10h-2v2h2v-2ZM54 14h2v-2h-4v2h2ZM58 16h2v-2h-4v2h2ZM62 18h6v-2h-8v2h2ZM40 22h2v-2h-6v2h4ZM32 24h4v-2h-8v2h4ZM28 26v-2h-4v2h4ZM42 26h-4v2h6v-2h2v-2h2v-2h-4v2h-2v2ZM82 24v-2h-2v4h2v-2ZM24 28v-2h-4v2h4ZM34 28v2h4v-2h-4ZM82 30h2v-4h-2v4ZM16 30h-2v2h2v-2ZM18 32h2v-4h-4v2h2v2ZM28 30h-2v2h2v-2ZM32 30h-2v2h2v-2ZM12 32h-2v2h4v-2h-2ZM18 32h-2v2h2v-2ZM26 32h-2v2h2v-2ZM88 32h-2v4h2v-4ZM16 34h-2v2h2v-2ZM24 34h-2v2h2v-2ZM22 36h-2v2h2v-2ZM90 36h-2v2h2v-2ZM14 38v-2h-2v4h2v-2ZM18 40v2h2v-4h-2v2ZM92 38h-2v2h2v-2ZM10 42v14h2V40h-2v2ZM94 40h-2v4h2v-4ZM16 44v2h2v-4h-2v2ZM94 44v6h2v-6h-2ZM14 50v2h2v-4h-2v2ZM88 52v2h4v-2h-4ZM84 54h-2v2h6v-2h-4ZM36 56h-2v2h2v-2ZM78 56h-2v2h6v-2h-4ZM38 58h-2v2h2v-2ZM72 58v2h4v-2h-4ZM30 60h-2v2h2v-2ZM40 60h-2v2h2v-2ZM68 60h-2v2h6v-2h-4ZM32 62h-2v2h2v-2ZM42 62h-2v2h4v-2h-2ZM26 64h-2v-2h-2v4h2v2h2v-4ZM34 64h-2v2h4v-2h-2ZM48 64h-4v2h6v-2h-2ZM38 66h-2v2h2v-2ZM28 68h-2v2h2v-2ZM68 68H56v-2h-6v2H38v2h4v2h10v-2h20v-2h-4ZM38 74h-2v2h2v-2ZM50 76h-4v2h8v-2h-4Z"
                      fill="#74452F"
                    ></path>
                    <path
                      d="M46 6h-2v2h2V6ZM54 18h2v2h8v-2h-4v-2h-4v-2h-4v-2h-2v-2h-2V8h-2v4h2v2h2v4h4ZM22 20h2v4h4v-2h4v-2h-4v-2H18v2h4ZM48 18h-4v2h6v-2h-2ZM56 22v-2h-6v2h6ZM40 24v-2h-4v2h4ZM68 24h2v2h2v2h4v2h2v2h4v-2h-2v-4h-2v-2h-4v-2h-2v-2h-6v2h2v2ZM30 26h6v-2h-8v2h2ZM62 26h2v-2h-2v-2h-4v2h2v2h2ZM18 30h-2v2h2v-2ZM22 30h2v-2h-4v4h2v-2Z"
                      fill="#8F563B"
                    ></path>
                    <path
                      d="M76 30h-2v4h2v2h2v-4h-2v-2ZM96 32v-6h-2v-2h-2v4h2v2h-2v2h4ZM16 32h-2v2h2v-2ZM84 32h-2v2h2v-2ZM80 36h-2v2h2v-2ZM86 36h-2v2h2v-2ZM82 38h-2v2h2v-2ZM88 38h-2v2h2v-2ZM96 40v-2h2v-2h-2v-2h-4v-2h-4v4h2v2h2v2h4Z"
                      fill="#8F563B"
                    ></path>
                    <path
                      d="M16 40v-2h2v-2h2v-4h-2v2h-2v2h-2v4h-2v8h2v-6h2v-2ZM92 40h-4v2h2v6h4v-4h-2v-4ZM20 42h-2v2h2v-2ZM98 44v-2h-2v6h4v-4h-2ZM24 46h-2v2h2v-2ZM18 50v-4h-2v8h2v-4ZM20 54h-2v2h2v-2ZM82 56v2h4v-2h-4ZM14 58h-2v2h2v-2ZM78 58v2h-4v4h2v-2h4v-2h2v-2h-4ZM32 60h-2v2h2v-2ZM40 64h-2v-2h-6v2h4v2h2v2h6v-2h-4v-2ZM22 66h-2v2h2v-2ZM74 66H56v2h22v-2h-4ZM36 72v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v4h2v2h2v2h2v4h2v2h2v2h4v2h4v-2h-2ZM44 74h-6v2h10v-2h-4ZM56 76h-2v2h6v-2h-4Z"
                      fill="#8F563B"
                    ></path>
                    <path
                      d="M60 14v-2h-4v2h4ZM62 16h4v-2h-6v2h2ZM18 18h-2v2h2v-2ZM38 18v-2H24v2h4v2h4v2h4v-2h6v-2h-4ZM56 20v-2h-4v2h4ZM72 20v-2h-2v-2h-2v4h4ZM16 20h-2v2h2v-2ZM50 20h-2v2h2v-2ZM58 22h2v-2h-4v2h2ZM74 22v2h4v-2h-2v-2h-4v2h2ZM42 22h-2v2h2v-2ZM66 22v-2h-2v4h4v-2h-2ZM24 26v-4h-4v4h4ZM38 24h-2v2h2v-2ZM60 24h-2v2h2v-2ZM70 24h-2v2h2v-2ZM80 24h-2v2h2v-2ZM84 24h-2v2h2v-2ZM8 26H6v2h2v-2ZM20 26h-2v2h2v-2ZM64 26h-4v2h8v-2h-4ZM24 30h2v-2h4v-2h-6v4ZM70 30h2v-2h-4v2h2ZM94 28h-2v2h2v-2ZM24 30h-2v2h2v-2ZM74 30h-2v2h2v-2ZM90 30h-2v-2h-2v-2h-2v4h2v2h6v-2h-2ZM22 32h-2v2h2v-2ZM82 32h-2v2h2v-2ZM98 32v-2h-2v2h-4v2h4v2h4v-2h-2v-2ZM102 32h-2v2h2v-2ZM82 38h2v-4h-2v4ZM86 38h-2v2h2v-2ZM86 44v4h-2v2h10v-2h-4v-6h-2v-2h-2v4ZM10 48v-8h2v-4h2v-2h-4v4H8v12h2v-2ZM26 48h-2v2h2v-2ZM80 48h-2v2h2v-2ZM98 48h-2v2h2v-2ZM28 50h-2v2h2v-2ZM78 52v-2h-4v2h4ZM16 52h-2v2h2v-2ZM74 52h-2v2h2v-2ZM18 54h-2v2h2v-2ZM72 54h-2v2h2v-2ZM90 54h-2v2h2v-2ZM12 56h-2v2h2v-2ZM20 56h-2v2h2v-2ZM76 58v-2h6v-2h6v-2h-8v2h-6v2h-2v2h4ZM70 58h-2v2h4v-2h-2ZM78 58h-2v2h2v-2ZM98 58h-2v2h2v-2ZM14 60h-2v2h2v-2ZM22 60h-2v2h2v-2Z"
                      fill="#B47A4F"
                    ></path>
                    <path
                      d="M36 60h-2v-2h-4v-2h-4v-2h-2v-2h-4v-8h-2v10h2v2h2v2h2v2h8v2h4v-2ZM42 60h-2v2h2v-2ZM96 60h-2v2h2v-2ZM48 62h-4v2h6v-2h-2ZM72 64h2v-4h-2v4ZM90 62h-8v2h12v-2h-4ZM68 64h-2v-2H56v2h-6v2h22v-2h-4ZM78 64h-2v2h6v-2h-4ZM24 66h-2v2h2v-2ZM26 68h-2v2h2v-2ZM28 70h-2v2h4v-2h-2ZM38 70h-2v2h2v-2ZM30 72v2h4v-2h-4ZM38 72v2h4v-2h-4ZM50 74h-2v2h2v-2ZM66 74h-2v2h2v-2ZM60 76v2h4v-2h-4Z"
                      fill="#B47A4F"
                    ></path>
                    <path
                      d="M18 8h-2v2h2V8ZM14 12v2h2v-4h-2v2ZM20 10h-2v2h4v-2h-2ZM80 10h-4v2h6v-2h-2ZM24 12h-2v2h2v-2ZM72 12v2h4v-2h-4ZM84 12h-2v2h2v-2ZM18 14h-2v2h2v-2ZM82 14h-2v2h2v-2ZM80 16h-2v2h2v-2ZM110 34h-2v2h4v-2h-2ZM104 36h-2v2h2v-2ZM114 36h-2v2h2v-2ZM106 38h-2v2h4v-2h-2ZM114 38v4h2v-4h-2ZM110 40h-2v2h4v-2h-2ZM78 42h-2v2h2v-2ZM114 42h-2v2h2v-2ZM76 44h-2v2h2v-2ZM80 44h-2v2h2v-2ZM74 46h-2v2h2v-2ZM70 50v2h2v-4h-2v2ZM18 68h2v-2h-6v2h4ZM14 70v-2h-4v2h4ZM20 70v4h2v-6h-2v2ZM10 70H8v2h2v-2ZM8 72H6v2h2v-2ZM16 74v2h4v-2h-4ZM12 76v2h4v-2h-4ZM8 78H6v-4H4v6h8v-2H8Z"
                      fill="#2A572D"
                    ></path>
                    <path
                      d="M44 2V0h-4v4h2V2h2ZM46 2h-2v2h2V2ZM42 6v2h2V4h-2v2ZM48 4h-2v2h2V4ZM26 6h-2v2h4V6h-2ZM50 6h-2v2h2V6ZM64 6h-2v2h2V6ZM30 8h-2v2h4V8h-2ZM56 8h-6v2h8V8h-2ZM66 8h-2v2h2V8ZM44 12h2V8h-2v4ZM62 10h-4v2h6v-2h-2ZM28 14h12v-2h2v-2H32v2h-8v2h4ZM48 12h-2v2h2v-2ZM88 12h-2v2h2v-2ZM22 16h2v-2h-6v2h4ZM50 14h-2v2h2v-2ZM90 14h-2v2h2v-2ZM18 18v-2h-4v2h4ZM76 16h-2v-2h-2v-2h-4v-2h-2v2h-2v2h4v2h4v2h6v-2h-2ZM86 18v2h2v-4h-2v2ZM92 16h-2v4h2v-4ZM14 18h-2v2h2v-2ZM44 18h-2v2h2v-2ZM52 18h-2v2h2v-2ZM68 20v-2h-4v2h4ZM12 20h-2v2h2v-2ZM48 22v-2h-4v2h4ZM82 20v-2h-4v2h2v2h2v2h4v2h2v-4h-2v-2h-4ZM94 20h-2v2h2v-2ZM10 22H8v2h2v-2ZM14 24h2v-2h-4v2h2ZM44 22h-2v2h2v-2ZM64 22h-2v2h2v-2ZM90 24v2h2v-4h-2v2ZM96 22h-2v2h2v-2ZM2 24H0v2h2v-2ZM8 24H6v2h2v-2ZM12 24h-2v2h2v-2ZM42 26v-2h-4v2h4ZM66 24h-2v2h4v-2h-2ZM98 24h-2v2h2v-2ZM6 26H2v2h4v-2ZM10 26H8v2h2v-2ZM38 26h-2v2h2v-2ZM72 28v-2h-4v2h4ZM8 28H6v2h2v-2ZM34 28h-2v2h2v-2ZM74 30h2v-2h-4v2h2ZM108 30v-2h-4v2h4ZM112 28h-2v2h2v-2ZM26 30h-2v2h2v-2ZM50 30h-2v2h2v-2ZM78 30h-2v2h2v-2ZM102 32h2v-2h-4v-4h-2v8h2v-2h2ZM110 30h-2v2h2v-2ZM24 32h-2v2h2v-2Z"
                      fill="#59352E"
                    ></path>
                    <path
                      d="M34 32h-4v-4h-4v2h2v2h-2v2h12v-2h-4ZM52 32h-2v2h2v-2ZM104 32v2h4v-2h-4ZM22 34h-2v2h2v-2ZM42 34h-2v2h6v-2h-4ZM56 34h-4v2h8v-2h-4ZM68 34h-2v4h2v-4Z"
                      fill="#59352E"
                    ></path>
                    <path
                      d="M70 36h4v2h2v2h2v2h2v2h2v-4h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-4v-2h-8v-2h-2v-4H48v2h-2v2h-2v2h-6v4h6v-2h2v-2h2v-2h8v2h2v2h2v4h2v-2h6v2h2v2Z"
                      fill="#59352E"
                    ></path>
                    <path
                      d="M80 34h-2v2h2v-2ZM100 34v2h-2v2h-2v4h2v-2h2v-2h2v-2h2v-2h-4ZM20 36h-2v2h2v-2ZM36 36h-2v2h6v-2h-4ZM16 40v2h2v-4h-2v2ZM34 38h-2v2h2v-2ZM62 38H48v2h16v-2h-2ZM70 38h-2v2h2v-2ZM24 40h4v-2h2v-2h-6v2h-2v4h2v-2ZM32 40h-2v2h2v-2ZM66 40h-2v2h4v-2h-2ZM72 40h-2v2h2v-2ZM86 40h-2v2h2v-2ZM14 44v4h2v-6h-2v2ZM30 42h-2v2h2v-2ZM64 42h-2v2h2v-2ZM70 42h-2v2h2v-2ZM74 42h-2v2h2v-2ZM96 42h-2v2h2v-2ZM8 44v-4H6v6h2v-2ZM24 44v4h4v-4h-4ZM66 44h-2v2h2v-2ZM22 46v-2h-2v6h4v-2h-2v-2ZM34 48v-4h-2v8h2v-4ZM66 50v4h2v-8h-2v4ZM84 48h2v-4h-2v2h-2v4h2v-2ZM28 52h-2v2h4v-2h-2ZM78 54h2v-2h2v-2h-4v2h-4v2h4ZM10 54v-4H8v6h2v-2ZM32 54h-2v2h2v-2ZM34 56h2v-4h-2v4ZM66 54h-2v2h2v-2ZM74 54h-2v2h2v-2ZM14 56h-2v2h2v-2ZM38 56h-2v2h2v-2ZM72 56h-2v2h2v-2ZM102 56h-2v2h2v-2ZM12 58h-2v4h2v-4ZM18 58h-2v2h2v-2ZM64 58v2h4v-2h-4ZM90 58h2v-2h2v-2h-4v2h-4v2h-4v2h8v-2ZM100 58h-2v2h2v-2ZM16 60h-2v2h2v-2ZM54 62h8v-2H50v2h4ZM80 62h-2v2h4v-4h-2v2ZM98 60h-2v2h2v-2ZM14 62h-2v2h2v-2ZM96 62h-2v2h2v-2ZM20 64h-2v-2h-2v4h4v-2ZM76 64h-2v2h2v-2ZM94 64h-2v2h2v-2ZM92 66h-2v2h2v-2ZM24 68h-2v2h2v-2ZM86 68h-2v2h2v-2ZM26 70h-2v2h2v-2ZM80 70v2h4v-2h-4ZM30 72h-2v2h2v-2ZM64 72H52v2h-2v2h14v-2h2v-2h-2ZM76 72v2h4v-2h-4ZM22 74h-2v2h2v-2ZM68 74h-2v2h2v-2ZM72 74h-2v2h2v-2ZM24 76h-2v2h2v-2ZM42 78v2h4v-2h-4ZM52 78h-2v2h2v-2ZM38 80v-2h-4v-2h-6v-2h-4v2h2v2h2v2h8v2h6v-2h-4ZM58 80h-6v2h8v-2h-2ZM50 82h-2v2h2v-2ZM60 82v2h4v-2h-4Z"
                      fill="#59352E"
                    ></path>
                    <path
                      d="M44 14v2h4v-2h-2v-2h-2v-2h-2v2h-2v2h4ZM50 16h-2v2h2v-2ZM44 20h-2v2h2v-2ZM64 22v-2h-4v2h4ZM90 20h-2v2h2v-2ZM20 22h4v-2h-8v2h2v2h2v-2ZM18 24h-2v2h2v-2ZM16 26h-2v2h2v-2ZM34 28h2v-2h-6v4h2v-2h2ZM92 28v-2h-2v-2h-2v4h4ZM14 28h-2v2h2v-2ZM12 30h-2v2h2v-2ZM36 30h-4v2h6v-2h-2ZM86 30h-2v2h2v-2ZM80 32h-2v2h2v-2ZM82 34h-2v4h2v-4ZM24 36h-2v2h2v-2ZM100 38v2h-2v4h2v4h-2v2H82v2h10v2h2v2h-2v2h-2v2h-8v2h12v-2h2v-2h2v-4h2v-4h2V38h-2ZM70 40h-2v2h2v-2Z"
                      fill="#3D2723"
                    ></path>
                    <path
                      d="M76 40v-2h-2v-2h-4v-2h-2v4h2v2h2v2h2v2h2v-2h2v-2h-2ZM96 40h-2v2h2v-2Z"
                      fill="#3D2723"
                    ></path>
                    <path
                      d="M72 42h-2v2h-2v-2h-4v2h2v2h2v8h2v-6h2v-2h2v-2h-2v-2ZM80 42h-2v2h2v-2ZM82 46h2v-2h2v-2h-2v-4h-2v6h-2v6h2v-4ZM22 50h-2v2h2v-2ZM26 50h-2v2h2v-2Z"
                      fill="#3D2723"
                    ></path>
                    <path
                      d="M66 50v-4h-2v-2h-2v-2h2v-2H48v-2h16v2h4v-2h-2v-4h2v-2h-6v2h-2v2h-8v-2h-2v-2h-2v-2h2v2h2v2h8v-4h-2v-2h-2v-2h-8v2h-2v2h-2v2h-6v2H24v2h6v2h-2v2h-4v2h-2v-4h-2v6h2v2h2v-2h4v-2h2v-2h2v-2h2v-2h6v-2h6v2h-6v2h-6v2h-2v2h-2v2h-2v4h-2v2h2v2h2v2h2v2h2v-4h-2v-8h2v8h2v4h2v2h4v2h8v-2h12v4h4v-2h-2v-6h2v-4ZM8 52v-6H6v-6h2v-2h2v-6H8v4H6v2H4v6H2v6h2v-2h2v8h2v-4Z"
                      fill="#3D2723"
                    ></path>
                    <path
                      d="M68 54h-2v2h2v-2ZM18 58v-2h-2v-2h-2v-6h-2v8h2v4h2v-2h2ZM70 56h-2v2h2v-2ZM10 58v-2H8v6h2v-4ZM12 62h-2v2h2v-2ZM14 64h-2v4h2v-2h2v-4h-2v2Z"
                      fill="#3D2723"
                    ></path>
                    <path
                      d="M20 64v2h2v-4h-2v-4h-2v2h-2v2h2v2h2ZM68 64h4v-2h-6v2h2ZM78 62h-2v2h2v-2ZM74 64h-2v2h2v-2Z"
                      fill="#3D2723"
                    ></path>
                    <path
                      d="M88 64h-6v2h-4v2h-6v2H52v2h14v2h2v2h-4v2H52v2h8v2h4v2h6v-2h8v-2h4v-2h2v-2h2v-2h2v-2h2v-2h2v-2h-2v-2h2v-2h-4Zm-2 6h-2v2h-4v2h-4v-2h4v-2h4v-2h2v2Zm-16 4h2v2h-2v-2ZM36 66h-2v2h2v-2ZM38 68h-2v2h2v-2ZM40 70h-2v2h4v-2h-2ZM48 72h-6v2h10v-2h-4ZM24 74h4v-2h-4v-2h-2v6h2v-2ZM30 76h4v2h4v2h4v-2h4v-2H36v-2h-8v2h2ZM22 76h-2v2h2v-2Z"
                      fill="#3D2723"
                    ></path>
                    <path
                      d="M60 84v-2h-8v-2h-2v-2h-4v2h-4v2h-6v-2h-8v-2h-2v-2h-2v2h-2v2h4v2h8v2h6v2h24v-2h-4Zm-12 0v-2h2v2h-2Z"
                      fill="#3D2723"
                    ></path>
                    <path
                      opacity="0.3"
                      d="M98 54v4h2v-4h-2ZM98 62h-2v2h-2v2h-2v4h-2v2h-2v2h-2v2h-2v2h-2v2h-4v2h-8v2h-6v2H40v-2h-6v-2h-8v-2h-4v-2h-2v-2h-4v2h-2v2h2v2h4v2h2v2h4v2h4v2h4v2h8v2h22v-2h8v-2h4v-2h4v-2h4v-2h2v-2h4v-2h2v-2h2v-4h2v-2h2v-6h2v-6h-2v2ZM10 62H8v-6H6v10h2v4h2v-2h2v-4h-2v-2Z"
                      fill="#000"
                    ></path>
                  </svg>
                </div>
                <div className="siteBoxLeft__bottom text-center  w-100">
                    Already have a Moonbird?
                    <button className="btn-purple mt-3 w-100">NEST YOUR MOONBIRD</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
