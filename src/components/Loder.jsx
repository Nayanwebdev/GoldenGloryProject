import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .preloader {
    position: fixed;
    top: 40%;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    z-index: 9999;
    height: 200px;
    width: 200px;
    margin: 0 auto;
    .loader0_div {
      height: 125px;
      width: 125px;
      position: relative;
      .loader0 {
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: linear-gradient(#323535, #cac9c3, #767275);
        /* background: linear-gradient(red,white,gray); */
        animation: animate 0.8s linear infinite;
        z-index: 10000;
        margin-left: 10px;
        margin-top: 10px;
        span {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(rgb(46 255 255), rgb(229 197 0), #ff07e0);
          animation: animate 0.8s linear infinite;
          top: 0;
          right: 0;
          :nth-child(1) {
            filter: blur(5px);
          }
          :nth-child(2) {
            filter: blur(10px);
          }
          :nth-child(3) {
            filter: blur(25px);
          }
          :nth-child(4) {
            filter: blur(50px);
          }
        }
        :after {
          content: "";
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          bottom: 10px;
          background: #fff;
          border-radius: 50%;
          background-size: cover;
        }
      }
    }
  }
  @keyframes animate {
    0%{
        rotate: 0deg;
    }
    100%{
        rotate: 180deg;
    }
  }
`;

export default function Loder() {
  return (
    <Wrapper>
      <div className="preloader" dir="ltr">
        <div className="loader0_div">
          <div className="loader0">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
