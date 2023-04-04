import React from "react";
import styled from "styled-components";
import productImg from "../assets/images/Pearls_Earring_7.png";
import swal from "sweetalert";

export default function Cart() {
  const contact = () => {
    swal(" website is still under construction");
  };
  return (
    <Wrapper>
      <div className="cart-block-main-cp">
        <div className="container">
          <div className="cart-block-in-cp">
            <div className="cart-left-cp">
              <div className="title-cp">shopping cart</div>

              <div className="product-detail-block-cp">
                <div className="product-detail-cp">
                  <div className="product-img-cp">
                    <img src={productImg} alt="cart-product" />
                  </div>
                  <div className="product-data-cp">
                    <div className="title">
                      <h3>peackock earings</h3>
                    </div>
                    <div className="availability">
                      <span className="in-stock">In stock</span>
                      <span className="out-stock">Out stock</span>
                    </div>
                    <div className="shipping">
                      <h3>Eligible for FREE Shipping</h3>
                    </div>
                    <div className="color">
                      color : <span>golden</span>
                    </div>
                    <div className="size">
                      size : <span>5</span>
                    </div>
                    <div className="quantity">
                      <select id="slct" required="required">
                        <option value="" disabled="disabled" defaultValue="selected">
                          Qty
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="product-price-cp">
                  <h3>$499</h3>
                </div>
              </div>

              <div className="cart-total-cp">
                <h3>
                  Subtotal(<span>1 items</span>) :
                </h3>
                <span className="total-amt">$499</span>
              </div>
            </div>
            <div className="cart-right-cp">
              <div className="payment-block-cp">
                <div className="delivery-eligibility">
                  <span>Your first order qualifies for FREE Delivery</span>
                  <span></span>
                </div>
                <div className="sub-total">
                  <h3>
                    Subtotal(<span>1 items</span>) :
                  </h3>
                  <span className="total-amt">$499</span>
                </div>
                <button className="buy-btn" onClick={contact}>
                  proceed to buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .cart-block-main-cp {
    padding: 80px 0px;
    .cart-block-in-cp {
      display: flex;
      gap: 20px;
      .cart-left-cp {
        width: 75%;
        background: var(--bg-color);
        padding: 20px;

        .title-cp {
          font-weight: 400;
          font-size: 28px;
          line-height: 36px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e7e7e7;
        }
        .product-detail-block-cp {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #e7e7e7;
          padding-block: 16px;
          padding-left: 16px;
          .product-detail-cp {
            display: flex;
            gap: 20px;
            .product-img-cp {
              width: 180px;
              img {
                width: 100%;
                object-fit: cover;
              }
            }
            .product-data-cp {
              .title {
                h3 {
                  font-size: 24px;
                  line-height: 32px;
                  font-weight: 500;
                  color: var(--text-color);
                }
              }
              .availability {
                span {
                  font-size: 14px;
                  line-height: 22px;
                  color: #007600;
                }
                .in-stock {
                  color: #007600;
                }
                .out-stock {
                  color: #760000;
                }
              }
              .shipping {
                h3 {
                  font-size: 14px;
                  line-height: 22px;
                  color: #565959;
                }
              }
              .color {
                font-size: 14px;
                line-height: 22px;
                span {
                  color: #565959;
                }
              }
              .size {
                font-size: 14px;
                line-height: 22px;
                span {
                  color: #565959;
                }
              }
            }
          }
        }
        .product-price-cp {
          h3 {
            font-size: 24px;
            line-height: 28px;
            font-weight: 600;
            color: var(--text-color);
          }
        }
        .cart-total-cp {
          text-align: end;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding-top: 10px;
          h3 {
            font-size: 20px;
            line-height: 26px;
          }
          .total-amt {
            font-size: 20px;
            line-height: 26px;
            color: var(--text-color);
          }
        }
      }
      .cart-right-cp {
        width: 25%;
        height: 100%;
        background: var(--bg-color);
        padding: 20px;
        .payment-block-cp {
          .delivery-eligibility {
            font-size: 12px;
            line-height: 15px;
            color: #067d62;
            padding-bottom: 20px;
          }
          .sub-total {
            display: flex;
            align-items: center;
            padding-bottom: 12px;
            h3 {
              font-size: 20px;
              line-height: 24px;
            }
            .total-amt {
            }
          }
          .buy-btn {
            width: 100%;
            font-size: 14px;
            line-height: 30px;
            background: #ffd814;
            border-radius: 6px;
            border: none;
            cursor: pointer;
            display: inline-block;
            text-align: center;
            &:hover {
              background: #f7ca00;
            }
          }
        }
      }
    }
  }
  select {
    width: 70px;
    line-height: 30px;
    font-size: 16px;
    color: var(--text-color);
    padding: 0px 0px 0px 8px;
    border: 1px solid var(--golden-color);
    border-radius: 5px;
    cursor: pointer;
    appearance: none;
    background-color: antiquewhite;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 5px center;
    background-size: 14px;

    &:required:invalid {
      color: var(--golden-color);
    }
    option {
      color: var(--text-color);
    }
    option[value=""][disabled] {
      display: none;
    }
    &:focus {
      outline: none;
      border-color: var(--text-color);
      box-shadow: none;
    }
  }

  @media (min-width: 0px) and (max-width: 575px) {
    .cart-block-main-cp {
      padding: 40px 0px;
      .cart-block-in-cp {
        flex-direction: column;
        .cart-left-cp {
          width: 100%;
          padding: 20px 15px;
          .title-cp {
            font-size: 22px;
            line-height: 26px;
            padding-bottom: 10px;
          }
          .product-detail-block-cp {
            padding-left: 5px;
            .product-detail-cp {
              gap: 0px;
              .product-img-cp {
                width: 120px;
              }
              .product-data-cp {
                .title {
                  padding-bottom: 5px;
                  h3 {
                    font-size: 18px;
                    line-height: 22px;
                  }
                }
                .shipping {
                  h3 {
                    font-size: 12px;
                  }
                }
                .size {
                  font-size: 12px;
                }
              }
            }
          }
          .product-price-cp {
            h3 {
              font-size: 20px;
              line-height: 26px;
            }
          }
          .cart-total-cp {
            h3 {
              font-size: 18px;
              line-height: 22px;
              padding-right: 5px;
            }
            .total-amt {
              font-size: 18px;
              line-height: 22px;
            }
          }
        }
        .cart-right-cp {
          width: 100%;
        }
      }
    }
    select {
      width: 60px;
      line-height: 28px;
      font-size: 14px;
      padding-left: 6px;
      margin-top: 5px;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .cart-block-main-cp {
      padding: 40px 0px;
      .cart-block-in-cp {
        flex-direction: column;
        .cart-left-cp {
          width: 100%;
          .title-cp {
            font-size: 22px;
            line-height: 26px;
            padding-bottom: 10px;
          }
          .product-detail-block-cp {
            padding-left: 5px;
            .product-detail-cp {
              gap: 10px;
              .product-img-cp {
                width: 120px;
              }
              .product-data-cp {
                .title {
                  h3 {
                    font-size: 20px;
                    line-height: 26px;
                  }
                }
              }
            }
          }
          .product-price-cp {
            h3 {
              font-size: 20px;
              line-height: 26px;
            }
          }
          .cart-total-cp {
            h3 {
              font-size: 18px;
              line-height: 22px;
              padding-right: 5px;
            }
            .total-amt {
              font-size: 18px;
              line-height: 22px;
            }
          }
        }
        .cart-right-cp {
          width: 100%;
        }
      }
    }
    select {
      width: 60px;
      line-height: 28px;
      font-size: 14px;
      padding-left: 6px;
      margin-top: 5px;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .cart-block-main-cp {
      padding: 50px 0px;
      .cart-block-in-cp {
        flex-direction: column;
        .cart-left-cp {
          width: 100%;
        }
        .cart-right-cp {
          width: 100%;
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .cart-block-main-cp {
      padding: 60px 0px;
      .cart-block-in-cp {
        .cart-right-cp {
          padding-inline: 12px;
          .payment-block-cp .sub-total h3 {
            font-size: 16px;
          }
        }
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
  }
`;
