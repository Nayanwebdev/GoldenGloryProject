import React from "react";
import styled from "styled-components";
import deliveryImg from "../assets/images/delivery_done_icon.svg";
import returnImg from "../assets/images/return_icon.svg";
import supportImg from "../assets/images/support_icon.svg";
import banneImg from "../assets/images/b1.webp";
import productImg from "../assets/images/earring_img.webp";
import { NavLink } from "react-router-dom";

export default function HeroBanner() {
  return (
    <Wrapper>
      <div className="banner-block-hp">
        <div className="container">
          <div className="row">
            <div className="left-banner-hp">
              <h4>New Collection</h4>
              <h1>Parisian GlamBridge</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl suscipit adipiscing Bibendum est ultricies integer.</p>
              <div className="btn-group-hp">
                <NavLink className="btn-main-hp dark-btn-hp" to="/" role="button" exact="true">
                  buy more
                </NavLink>
                <NavLink className="btn-main-hp light-btn-hp" to="/" role="button" exact="true">
                  read more
                </NavLink>
              </div>
              <div className="customer-support-hp">
                <div className="customer-support-box-hp delivery-hp">
                  <img src={deliveryImg} alt="del-img" loading="lazy" />
                  <span>Free Delivery</span>
                </div>
                <div className="customer-support-box-hp return-hp">
                  <img src={returnImg} alt="del-img" loading="lazy"  />
                  <span>easy to return</span>
                </div>
                <div className="customer-support-box-hp support-hp">
                  <img src={supportImg} alt="del-img" loading="lazy"  />
                  <span>24H suppport</span>
                </div>
              </div>
            </div>
            <div className="right-banner-hp">
              <div className="right-banner-img-hp">
                <img src={banneImg} alt="btn-img" />
              </div>
              <div className="right-banner-img-bg-hp"></div>
              <div className="right-banner-product-hp">
                <h3>earrings</h3>
                <h2>leaf daimonds</h2>
                <h4 className="price-hp">-$599.00</h4>
              </div>
              <div className="product-add-hp">
                <div className="product-add-btn-hp">
                  <a href="#">+</a>
                </div>
                <div className="product-img-hp">
                  <img src={productImg} alt="earring" loading="lazy"  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .banner-block-hp {
    background: var(--bg-color);
    overflow: hidden;
    .left-banner-hp {
      width: 50%;
      padding: 156px 15px 65px;
      h4 {
        font-size: 25px;
        line-height: 38px;
        color: var(--golden-color);
      }
      h1 {
        font-size: 60px;
        line-height: 87px;
        color: var(--text-color);
      }
      p {
        font-size: 18px;
        line-height: 27px;
        padding-bottom: 40px;
        color: var(--black-color);
      }
      .btn-group-hp {
        display: flex;
        gap: 30px;
        padding-bottom: 128px;
      }
      .customer-support-hp {
        display: flex;
        align-items: center;
        gap: 72px;
        .customer-support-box-hp {
          img {
            width: 45px;
          }
          span {
            font-size: 15px;
            padding-left: 12px;
            text-transform: capitalize;
            color: var(--text-color);
          }
        }
      }
    }
    .right-banner-hp {
      width: 50%;
      position: relative;
      .right-banner-img-hp {
        position: absolute;
        left: 0px;
        bottom: 0px;
        top: 0px;
        width: 960px;
        z-index: 9;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .right-banner-img-bg-hp {
        position: absolute;
        height: 950px;
        width: 950px;
        border-radius: 100%;
        top: -240px;
        right: -250px;
        background: #d1d7d5;
        z-index: 1;
      }
      .right-banner-product-hp {
        position: absolute;
        top: 75px;
        left: 25px;
        z-index: 99;
        h3 {
          font-size: 18px;
          line-height: 22px;
          font-weight: 500;
          text-transform: uppercase;
          color: var(--text-color);
          padding-bottom: 5px;
        }
        h2 {
          font-size: 30px;
          line-height: 36px;
          font-weight: 400;
          color: var(--text-color);
          padding-bottom: 10px;
          text-transform: capitalize;
        }
        h4 {
          font-size: 20px;
          line-height: 26px;
          font-weight: 500;
          color: var(--text-color);
        }
      }
      .product-add-hp {
        position: absolute;
        right: 95%;
        bottom: 90px;
        z-index: 99;
        .product-add-btn-hp {
          display: flex;
          justify-content: end;
          margin-right: -2px;
          a {
            height: 58px;
            width: 58px;
            display: inline-block;
            background: #ffffff90;
            font-size: 48px;
            border-radius: 50%;
            text-align: center;
            line-height: 58px;
            color: #6e441e;
            position: relative;
            margin-bottom: -16px;
            margin-left: 0px;
            &::after {
              content: "";
              position: absolute;
              height: 100%;
              width: 100%;
              border-radius: 50%;
              border: 1px solid rgba(255, 255, 255, 0.6);
              left: 0;
              top: 0;
              animation: borderBubble 1s linear infinite;
            }
            @keyframes borderBubble {
              to {
                transform: scale(1.5);
                opacity: 0.2;
              }
            }
          }
        }
        .product-img-hp {
          img {
            height: 300px;
            object-fit: cover;
            width: auto;
          }
        }
      }
    }
  }

  @media (min-width: 0px) and (max-width: 575px) {
    .banner-block-hp {
      .left-banner-hp {
        width: 100%;
        padding-top: 30px;
        padding-bottom: 30px;
        order: 1;
        h4 {
          font-size: 18px;
          line-height: 22px;
          padding-bottom: 10px;
        }
        h1 {
          font-size: 38px;
          line-height: 46px;
          padding-bottom: 5px;
        }
        p {
          font-size: 14px;
          line-height: 20px;
          padding-bottom: 25px;
          text-align: justify;
        }
        .btn-group-hp {
          gap: 10px;
          padding-bottom: 40px;
        }
        .customer-support-hp {
          gap: inherit;
          justify-content: space-between;
          .customer-support-box-hp {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img {
              width: 30px;
              height: 30px;
            }
            span {
              font-size: 14px;
              padding: 5px 0px 0px;
            }
          }
        }
      }
      .right-banner-hp {
        width: 100%;
        .right-banner-img-hp {
          position: relative;
          left: 60px;
          width: 100%;
        }
        .right-banner-img-bg-hp {
          height: 110%;
          width: 100%;
          top: -90px;
          right: 0px;
        }
        .right-banner-product-hp {
          left: 15px;
          h3 {
            font-size: 14px;
            line-height: 18px;
            padding-bottom: 5px;
          }
          h2 {
            font-size: 22px;
            line-height: 24px;
            padding-bottom: 5px;
          }
          h4 {
            font-size: 16px;
            line-height: 20px;
          }
        }
        .product-add-hp {
          right: auto;
          left: 10px;
          bottom: 10px;
          .product-add-btn-hp {
            a {
              height: 30px;
              width: 30px;
              font-size: 24px;
              line-height: 31px;
              margin-bottom: -8px;
              margin-left: 0px;
            }
          }
          .product-img-hp {
            img {
              height: 156px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .banner-block-hp {
      .left-banner-hp {
        width: 100%;
        padding-top: 30px;
        padding-bottom: 30px;
        order: 1;
        h4 {
          font-size: 18px;
          line-height: 22px;
          padding-bottom: 10px;
        }
        h1 {
          font-size: 38px;
          line-height: 46px;
          padding-bottom: 5px;
        }
        p {
          font-size: 14px;
          line-height: 20px;
          padding-bottom: 25px;
          text-align: justify;
        }
        .btn-group-hp {
          gap: 20px;
          padding-bottom: 40px;
        }
        .customer-support-hp {
          .customer-support-box-hp {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img {
              width: 30px;
              height: 30px;
            }
            span {
              font-size: 14px;
              padding: 5px 0px 0px;
            }
          }
        }
      }
      .right-banner-hp {
        width: 100%;
        .right-banner-img-hp {
          position: relative;
          left: 60px;
          width: 90%;
        }
        .right-banner-img-bg-hp {
          height: 100%;
          width: 90%;
          top: -50px;
          right: 0;
        }
        .right-banner-product-hp {
          left: 45px;
          h3 {
            font-size: 14px;
            line-height: 18px;
            padding-bottom: 5px;
          }
          h2 {
            font-size: 22px;
            line-height: 24px;
            padding-bottom: 5px;
          }
          h4 {
            font-size: 16px;
            line-height: 20px;
          }
        }
        .product-add-hp {
          right: auto;
          left: 10px;
          bottom: 50px;
          .product-add-btn-hp {
            a {
              height: 40px;
              width: 40px;
              font-size: 28px;
              line-height: 42px;
              margin-bottom: -12px;
              margin-left: 0px;
            }
          }
          .product-img-hp {
            img {
              height: 200px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .banner-block-hp {
      .left-banner-hp {
        padding-top: 30px;
        padding-bottom: 30px;
        h4 {
          font-size: 20px;
          line-height: 24px;
          padding-bottom: 15px;
        }
        h1 {
          font-size: 42px;
          line-height: 48px;
          padding-bottom: 16px;
          max-width: 300px;
        }
        p {
          font-size: 16px;
          line-height: 20px;
          padding-bottom: 30px;
          max-width: 400px;
          text-align: justify;
        }
        .btn-group-hp {
          gap: 20px;
          padding-bottom: 40px;
        }
        .customer-support-hp {
          gap: 20px;
          .customer-support-box-hp {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img {
              width: 30px;
              height: 30px;
            }
            span {
              font-size: 14px;
              padding: 5px 0px 0px;
            }
          }
        }
      }
      .right-banner-hp {
        .right-banner-img-hp {
          left: 40px;
          width: 500px;
        }
        .right-banner-img-bg-hp {
          height: 520px;
          width: 520px;
          top: -110px;
          right: auto;
          left: -5px;
        }
        .right-banner-product-hp {
          left: 15px;
          top: 90px;
          h3 {
            font-size: 14px;
            line-height: 18px;
            padding-bottom: 5px;
          }
          h2 {
            font-size: 22px;
            line-height: 24px;
            padding-bottom: 5px;
          }
          h4 {
            font-size: 16px;
            line-height: 20px;
          }
        }
        .product-add-hp {
          right: auto;
          left: 10px;
          bottom: 50px;
          .product-add-btn-hp {
            a {
              height: 40px;
              width: 40px;
              font-size: 28px;
              line-height: 42px;
              margin-bottom: -12px;
              margin-left: 12px;
            }
          }
          .product-img-hp {
            img {
              height: 150px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .banner-block-hp {
      .left-banner-hp {
        padding-top: 80px;
        padding-bottom: 60px;
        h4 {
          font-size: 24px;
          line-height: 30px;
          padding-bottom: 10px;
        }
        h1 {
          font-size: 52px;
          line-height: 58px;
          padding-bottom: 10px;
          max-width: 300px;
        }
        p {
          line-height: 24px;
          max-width: 400px;
          text-align: justify;
        }
        .btn-group-hp {
          gap: 20px;
          padding-bottom: 60px;
        }
        .customer-support-hp {
          gap: 12px;
          .customer-support-box-hp {
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              width: 34px;
              height: 35px;
            }
            span {
              padding-left: 5px;
            }
          }
        }
      }
      .right-banner-hp {
        .right-banner-img-hp {
          left: 0px;
          width: 645px;
        }
        .right-banner-img-bg-hp {
          height: 660px;
          width: 660px;
          top: -80px;
          right: auto;
          left: -30px;
        }
        .right-banner-product-hp {
          left: 10px;
          top: 130px;
          h3 {
            font-size: 14px;
            line-height: 18px;
            padding-bottom: 5px;
          }
          h2 {
            font-size: 22px;
            line-height: 24px;
            padding-bottom: 5px;
          }
          h4 {
            font-size: 16px;
            line-height: 20px;
          }
        }
        .product-add-hp {
          right: auto;
          left: -10px;
          .product-add-btn-hp {
            a {
              height: 40px;
              width: 40px;
              font-size: 28px;
              line-height: 42px;
              margin-bottom: -12px;
              margin-left: 0px;
            }
          }
          .product-img-hp {
            img {
              height: 220px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    .banner-block-hp {
      .left-banner-hp {
        padding-top: 100px;
        p {
          max-width: 496px;
        }
        .btn-group-hp {
          gap: 20px;
          padding-bottom: 90px;
        }
        .customer-support-hp {
          gap: 12px;
          .customer-support-box-hp {
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              width: 34px;
              height: 35px;
            }
            span {
              padding-left: 5px;
            }
          }
        }
      }
      .right-banner-hp {
        .right-banner-img-hp {
          left: 0px;
          width: 645px;
        }
        .right-banner-img-bg-hp {
          height: 660px;
          width: 660px;
          top: -80px;
          right: auto;
          left: -30px;
        }
        .right-banner-product-hp {
          left: 10px;
          top: 130px;
          h3 {
            font-size: 14px;
            line-height: 18px;
            padding-bottom: 5px;
          }
          h2 {
            font-size: 22px;
            line-height: 24px;
            padding-bottom: 5px;
          }
          h4 {
            font-size: 16px;
            line-height: 20px;
          }
        }
        .product-add-hp {
          right: auto;
          left: -10px;
          .product-add-btn-hp {
            a {
              height: 40px;
              width: 40px;
              font-size: 28px;
              line-height: 42px;
              margin-bottom: -12px;
              margin-left: 0px;
            }
          }
          .product-img-hp {
            img {
              height: 220px;
            }
          }
        }
      }
    }
  }
`;
