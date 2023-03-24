import React from "react";
import styled from "styled-components";
import bannerImg from "../assets/images/pagebanner_img.png";
import { Link } from "react-router-dom";

export default function PageBanner({  pageTitle,pageLink }) {
  return (
    <Wrapper>
      <div className="page-banner-allp" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="page-banner-title-allp">
          <h2>{pageTitle}</h2>
          <div className="bradcrumb-allp">
            <Link to="/">Home</Link>
            <Link to={{ pageLink }}>{pageLink}</Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .page-banner-allp {
    background-repeat: no-repeat;
    background-position-x: center;
    background-size: cover;
    height: 370px;
    margin-bottom: 50px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.76);
    }
    .page-banner-title-allp {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      z-index: 99;
      position: relative;
      h2 {
        font-size: 45px;
        line-height: 54px;
        padding-bottom: 0px;
        color: var(--white-color);
        text-transform: uppercase;
      }
      .bradcrumb-allp {
        a {
          font-size: 18px;
          line-height: 26px;
          color: var(--golden-color);
          padding: 0px 10px;
          position: relative;
          text-transform: capitalize;
          &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            height: 18px;
            width: 1px;
            transform: rotate(-15deg);
            border-right: 1px solid var(--golden-color);
          }
          &:first-child {
            padding-left: 0px;
          }
          &:last-child {
            padding-right: 0px;
            &::after {
              display: none;
            }
          }
        }
      }
    }
  }
  @media (min-width: 0px) and (max-width: 575px) {
    .page-banner-allp {
      height: 200px;
      .page-banner-title-allp {
        h2 {
          font-size: 24px;
          line-height: 26px;
        }
        .bradcrumb-allp {
          a {
            font-size: 14px;
            line-height: 16px;
            padding: 0px 5px;
            &::after {
              height: 14px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .page-banner-allp {
      height: 220px;
      .page-banner-title-allp {
        h2 {
          font-size: 24px;
          line-height: 28px;
        }
        .bradcrumb-allp {
          a {
            font-size: 14px;
            line-height: 16px;
            padding: 0px 5px;
            &::after {
              height: 14px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .page-banner-allp {
      height: 300px;
      .page-banner-title-allp {
        h2 {
          font-size: 30px;
          line-height: 36px;
        }
        .bradcrumb-allp {
          a {
            font-size: 16px;
            line-height: 18px;
            padding: 0px 8px;
            &::after {
              height: 15px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .page-banner-allp {
      .page-banner-title-allp {
        h2 {
          font-size: 40px;
          line-height: 48px;
        }
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
  }
`;
