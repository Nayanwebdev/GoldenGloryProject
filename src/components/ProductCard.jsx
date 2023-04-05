import React from "react";
import Button from "./Button";
import styled from "styled-components";
import searchIcon from "../assets/images/search_icon.svg";
import likeIcon from "../assets/images/heart_icon.svg";

export default function ProductCard({ imgSrc, title, discPrice, price }) {
  return (
    <Wrapper>
      <div className="card-img-cb">
        <img src={imgSrc} alt="card-img" />
        <div className="search">
          <a href="#">
            <img src={searchIcon} alt="searchIcon" />
          </a>
        </div>
        <div className="like">
          <a href="#">
            <img src={likeIcon} alt="likeIcon" />
          </a>
        </div>
        <div className="add-to-cart-cb">
          <Button btn_text="add to cart" class_name="add-to-cart-btn" />
        </div>
      </div>
      <div className="card-content-cb">
        <h3 className="card-title"> {title} </h3>
        <h4 className="card-price">
          {price}
          <span className="card-disc-price"> {discPrice} </span>
        </h4>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* cursor: pointer; */
  .card-img-cb {
    position: relative;
    height: 351px;
    box-shadow: 0px 0px 15px rgb(193 143 97 / 15%);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .search {
      position: absolute;
      top: 15px;
      left: 15px;
      a {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: rgb(255, 240, 226);
        img {
          height: 15px;
          width: auto;
        }
      }
    }
    .like {
      position: absolute;
      top: 15px;
      right: 15px;
      a {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: rgb(255, 240, 226);
        img {
          height: 15px;
          width: auto;
          object-fit: contain;
        }
      }
    }
    .add-to-cart-cb {
      position: absolute;
      left: 0px;
      width: 100%;
      bottom: 0px;
      display: none;
      transition: all 0.3s linear;
    }
  }
  .card-content-cb {
  text-align: center;  
    padding: 20px 0px;
    h3 {
      font-size: 20px;
      line-height: 26px;
      font-weight: 400;
      padding-bottom: 5px;
      color: var(--golden-color);
    }
    h4 {
      font-size: 20px;
      line-height: 26px;
      font-weight: 500;
      color: var(--text-color);
      span {
        display: inline-block;
        padding-left: 8px;
        color: var(--golden-color);
        text-decoration: line-through;
      }
    }
  }
  :hover {
    .add-to-cart-cb {
      display: block;
    }
  }
  @media (min-width: 0px) and (max-width: 575px) {
    /* .card-box-main-cb { */
      .card-img-cb {
        height: 280px;
        img {
          width: 80%;
          margin-inline: auto;
        }
      }
      .card-content-cb {
        padding: 10px 0px;
        h3 {
          font-size: 16px;
          line-height: 20px;
        }
        h4 {
          font-size: 16px;
          line-height: 20px;
        }
      }
    /* } */
  }
  @media (min-width: 576px) and (max-width: 767px) {
    /* .card-box-main-cb { */
      .card-img-cb {
        height: 280px;
        img {
          width: 80%;
          margin-inline: auto;
        }
      }
      .card-content-cb {
        padding: 10px 0px;
        h3 {
          font-size: 16px;
          line-height: 20px;
        }
        h4 {
          font-size: 16px;
          line-height: 20px;
        }
      }
    /* } */
  }
  @media (min-width: 768px) and (max-width: 991px) {
    /* .card-box-main-cb { */
      .card-img-cb {
        height: 320px;
        img {
          width: 90%;
          margin-inline: auto;
        }
        .like {
          a {
            img {
              height: 14px;
            }
          }
        }
      }
      .card-content-cb {
        padding: 12px 0px;
        h3 {
          font-size: 18px;
          line-height: 24px;
        }
      }
    /* } */
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    /* .card-box-main-cb { */
      .card-img-cb {
        height: 320px;
        img {
          width: 90%;
          margin-inline: auto;
        }
        .like {
          a {
            img {
              height: 14px;
            }
          }
        }
      }
      .card-content-cb {
        padding: 16px 0px;
        h3 {
          font-size: 18px;
          line-height: 24px;
        }
      }
    /* } */
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    /* .card-box-main-cb { */
      .card-img-cb {
        height: 320px;
        img {
          width: 90%;
          margin-inline: auto;
        }
        .like {
          a {
            img {
              height: 14px;
            }
          }
        }
      }
      .card-content-cb {
        padding: 16px 0px;
        h3 {
          font-size: 18px;
          line-height: 24px;
        }
      }
    /* } */
  }
`;
