import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import errImg from "../assets/images/error_Img.svg";

export default function ErrorPage() {
  return (
    <Wrapper>
      <div className="error-block-erp">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <img src={errImg} alt="errImg" loading="lazy"  />
            </div>
            <div className="col-md-6 align-self-center">
              <h1>404</h1>
              <h2>UH OH! You're lost.</h2>
              <p>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</p>
              <NavLink to="/" className="btn-erp dark">
                Click here to go Home Page
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .error-block-erp {
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    text-align: center;
    background: linear-gradient(90deg, rgba(208, 208, 208, 1) 48%, rgba(145, 145, 145, 1) 100%);
    img {
      width: 100%;
    }
    h1 {
      font-size: 100px;
      line-height: 110px;
      margin-bottom: 15px;
      font-weight: 800;
    }
    h2 {
      font-size: 40px;
      line-height: 50px;
      font-weight: bold;
    }
    p {
      padding-bottom: 20px;
    }
    .btn-erp {
      z-index: 1;
      overflow: hidden;
      background: transparent;
      position: relative;
      padding: 8px 50px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1em;
      letter-spacing: 2px;
      transition: 0.2s ease;
      font-weight: 600;
      margin: 5px 0px;
      &.dark {
        border: 2px solid var(--text-color);
        color: var(--text-color);
        &:before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 0%;
          height: 100%;
          background: var(--text-color);
          z-index: -1;
          transition: 0.2s ease;
        }
        &:hover {
          color: var(--white-color);
          background: var(--text-color);
          transition: 0.2s ease;
          &:before {
            width: 100%;
          }
        }
      }
    }
  }
  @media (min-width: 0px) and (max-width: 575px) {
    .error-block-erp {
      height: calc(100vh - 60px);
      img {
        width: 70%;
      }
      h1 {
        font-size: 60px;
        line-height: 70px;
      }
      h2 {
        font-size: 25px;
      }
      .btn-erp {
        padding: 8px 10px;
        font-size: 14px;
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .error-block-erp {
      height: calc(100vh - 60px);
      img {
        width: 70%;
      }
      h1 {
        font-size: 66px;
        line-height: 70px;
        margin-bottom: 10px;
      }
      h2 {
        font-size: 30px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .error-block-erp {
      height: calc(100vh - 70px);
      h1 {
        font-size: 66px;
        line-height: 70px;
        margin-bottom: 10px;
      }
      h2 {
        font-size: 30px;
      }
      .btn-erp {
        padding: 8px 20px;
        font-size: 14px;
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .error-block-erp {
      height: calc(100vh - 80px);
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    .error-block-erp {
      height: calc(100vh - 80px);
    }
  }
`;
