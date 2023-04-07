import deleteIcon from "../assets/images/delete_btn.svg";
import React from "react";
import styled from "styled-components";

const MyCouponBlock = () => {
  const cards = [
    { link: "Get additional ₹5000 off on th", valid: "Valid till 7 Apr, 2023", payQuote: "Get extra ₹5000 off" },
    { link: "Get 5% off upto ₹100", valid: "Valid till 7 Apr, 2023", payQuote: "Get extra 5% off upto ₹100" },
    { link: "Get additional ₹4000 off on th", valid: "Valid till 7 Apr, 2023", payQuote: "Get extra ₹4000 off" },
    { link: "Get additional ₹5000 off on th", valid: "Valid till 7 Apr, 2023", payQuote: "Get extra ₹5000 off" },
  ];
  return (
    <Wrapper>
      <div className="save-upi-block-main">
        <div className="save-upi-block-in">
          <h3>Manage Saved UPI</h3>
          {cards.map((card, i) => (
            <div className="save-card" key={i}>
              <div className="card-title">
                <div className="title">
                  <a href="">{card.link}</a>
                </div>
                <div className="valid">
                  <h5>{card.valid}</h5>
                </div>
              </div>
              <div className="card-number">
                <span>{card.payQuote} on 1 item(s) (price inclusive of cashback/coupon)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default MyCouponBlock;
const Wrapper = styled.div`
  .save-upi-block-main {
    .save-upi-block-in {
      padding-bottom: 50px;
      h3 {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 30px;
      }
      .save-card {
        padding: 16px 24px;
        border: 1px solid #c5bfbf;
        border-bottom: 0px;
        &:last-child {
          border-bottom: 1px solid #c5bfbf;
        }
        .card-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          .title {
            a {
              font-size: 16px;
              line-height: 22px;
              font-weight: 500;
              color: #26a541;
            }
          }
          .valid {
            h5 {
              font-size: 14px;
              color: #878787;
              font-weight: 500;
            }
          }
        }
        .card-number {
          span {
            font-size: 16px;
            color: #212121;
          }
        }
      }
    }
  }

  @media (min-width: 0px) and (max-width: 575px) {
    .save-upi-block-main .save-upi-block-in .save-card .card-title {
      flex-direction: column;
      gap: 10px;
      align-items: flex-start;
      margin-bottom: 10px;
    }
    .save-upi-block-main .save-upi-block-in .save-card {
      padding: 16px;
    }
    .save-upi-block-main .save-upi-block-in .save-card .card-number span {
      font-size: 14px;
      line-height: 17px;
      display: block;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .save-upi-block-main .save-upi-block-in .save-card .card-title {
      flex-direction: column;
      gap: 10px;
      align-items: flex-start;
      margin-bottom: 10px;
    }
    .save-upi-block-main .save-upi-block-in .save-card {
      padding: 16px;
    }
    .save-upi-block-main .save-upi-block-in .save-card .card-number span {
      font-size: 14px;
      line-height: 18px;
      display: block;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .save-upi-block-main .save-upi-block-in .save-card {
      padding-inline: 15px;
    }
    .save-upi-block-main .save-upi-block-in .save-card .card-title .title a {
      font-size: 15px;
      line-height: 20px;
    }
    .save-upi-block-main .save-upi-block-in .save-card .card-title .valid h5 {
      font-size: 12px;
    }
  }
`;
