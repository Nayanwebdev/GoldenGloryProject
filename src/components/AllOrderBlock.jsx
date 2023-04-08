import React from "react";
import styled from "styled-components";
import orderImg from "../assets/images/Pearls_Earring_7.webp";

const AllOrderBlock = () => {
  const orders = [
    {
      imgSrc: orderImg,
      title: "peackock earings Feather Earrings Alloy Drops & Danglers Alloy Drops & Danglers",
      subData: [{ title: "color", data: "golden" }],
      price: "$499",
      status: "delivered",
      statusDetail: "on Mar 02",
      quote: "Your item has been delivered",
    },
    {
      imgSrc: orderImg,
      title: "peackock earings Feather Earrings Alloy Drops & Danglers Alloy Drops & Danglers",
      subData: [{ title: "color", data: "golden" }],
      price: "$499",
      status: "refund",
      statusDetail: "on Mar 20",
      quote: "You returned this order because received a damaged product.",
    },
    {
      imgSrc: orderImg,
      title: "peackock earings Feather Earrings Alloy Drops & Danglers Alloy Drops & Danglers",
      subData: [{ title: "color", data: "golden" }],
      price: "$499",
      status: "cancellation",
      statusDetail: "accepted",
      quote: "Your Return request is Cancelled",
    },
  ];

  return (
    <Wrapper>
      <div className="all-order-block-main">
        <div className="all-order-block-in">
          {orders.map((order, i) => (
            <div className="order-card-main" key={i}>
              <div className="product-info-aob">
                <div className="product-img-aob">
                  <img src={order.imgSrc} alt="product-data" />
                </div>
                <div className="product-data-aob">
                  <div className="title">
                    <h3>{order.title}</h3>
                  </div>
                  <div className="sub-detail">
                    {order.subData.map((sub, i) => (
                      <h4 key={i}>
                        {sub.title}: <span>{sub.data}</span>
                      </h4>
                    ))}
                  </div>
                </div>
              </div>
              <div className="product-price">
                <span>{order.price}</span>
              </div>
              <div className="product-status">
                <div className="status-detail">
                  <div className={`status-color ${order.status}`}></div>
                  <span>
                    {order.status} {order.statusDetail}
                  </span>
                  <h4>{order.quote}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default AllOrderBlock;

const Wrapper = styled.div`
  .all-order-block-main {
    .all-order-block-in {
      .order-card-main {
        display: flex;
        gap: 5px;
        padding: 16px;
        border: 1px solid #dbdbdb;
        border-radius: 4px;
        margin-bottom: 15px;
        transition: all 0.2s linear;
        &:hover {
          box-shadow: 0 1px 12px 2px #dbdbdb;
        }
        .product-info-aob {
          width: 50%;
          display: flex;
          .product-img-aob {
            width: 100px;
            height: 100px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .product-data-aob {
            width: calc(100% - 100px);
            .title {
              h3 {
                font-size: 14px;
                margin-bottom: 10px;
                width: 300px;
                cursor: pointer;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
            .sub-detail {
              h4 {
                font-size: 13px;
                color: #878787;

                span {
                  font-weight: 500;
                  margin-bottom: 5px;
                  margin-left: 5px;
                }
              }
            }
          }
        }
        .product-price {
          width: 15%;
          span {
            font-size: 16px;
            color: #212121;
            text-transform: uppercase;
          }
        }
        .product-status {
          width: 35%;
          .status-color {
            height: 10px;
            width: 10px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 8px;
          }
          .delivered {
            background-color: #26a541;
          }
          .refund {
            background-color: #ff9f00;
          }
          .cancellation {
            background-color: #ff6161;
          }
          span {
            font-size: 14px;
            font-weight: 500;
          }
          h4 {
            font-size: 12px;
            margin-top: 8px;
          }
        }
      }
    }
  }

  @media (min-width: 0px) and (max-width: 575px) {
    .all-order-block-main {
      .all-order-block-in {
        .order-card-main {
          flex-direction: column;
          padding: 10px;
          gap: 8px;
          .product-info-aob {
            width: 100%;
            flex-direction: column;
            .product-img-aob {
              margin: 0px auto;
            }
            .product-data-aob {
              width: 100%;
              .title {
                h3 {
                  width: 140px;
                  margin-bottom: 5px;
                }
              }
            }
          }
          .product-price {
            width: 100%;
          }
          .product-status {
            width: 100%;
            .status-color {
              margin-right: 6px;
            }
            span {
              font-size: 12px;
            }
            h4 {
              font-size: 11px;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .all-order-block-main {
      .all-order-block-in {
        .order-card-main {
          flex-wrap: wrap;
          gap: 0px;
          .product-info-aob {
            width: 100%;
            .product-img-aob {
              margin: 0px auto;
            }
            .product-data-aob {
              margin-block: auto;
              .title {
                h3 {
                  width: 160px;
                  margin-bottom: 5px;
                }
              }
            }
          }
          .product-price {
            width: 20%;
            margin-block: auto;
          }
          .product-status {
            width: 80%;
            text-align: end;
            .status-color {
              margin-right: 6px;
            }
            span {
              font-size: 12px;
            }
            h4 {
              font-size: 11px;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .all-order-block-main {
      .all-order-block-in {
        .order-card-main {
          flex-wrap: wrap;
          gap: 0px;
          .product-info-aob {
            width: 100%;
            .product-img-aob {
              margin: 0px auto;
            }
            .product-data-aob {
              margin-block: auto;
              .title {
                h3 {
                  width: 260px;
                  white-space: nowrap;
                }
              }
            }
          }
          .product-price {
            width: 20%;
            margin-block: auto;
          }
          .product-status {
            width: 80%;
            .status-color {
              margin-right: 6px;
            }
            span {
              font-size: 12px;
            }
            h4 {
              font-size: 11px;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .product-price {
      width: 10% !important;
    }
    .product-status {
      width: 38% !important;
    }
    .product-data-aob {
      .title {
        h3 {
          width: 160px !important;
        }
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    .product-data-aob {
      .title {
        h3 {
          width: 200px !important;
        }
      }
    }
  }
`;
