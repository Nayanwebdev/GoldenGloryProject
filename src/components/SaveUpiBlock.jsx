import React from "react";
import styled from "styled-components";
import FaqBlock from "./FaqBlock";
import deleteIcon from "../assets/images/delete_btn.svg";
import payLogo from "../assets/images/pay_logo.png";
const SaveUpiBlock = () => {
  const cards = [
    { title: "Google Pay UPI", payIcon: payLogo, payLink: "gpay123@okaxis" },
    { title: "Google Pay UPI", payIcon: payLogo, payLink: "gpay123@okaxis" },
    { title: "Google Pay UPI", payIcon: payLogo, payLink: "gpay123@okaxis" },
  ];
  return (
    <Wrapper>
      <div className="save-upi-block-main">
        <div className="save-upi-block-in">
          <h3>Manage Saved UPI</h3>
          {cards.map((card, i) => (
            <div className="save-card" key={i}>
              <div className="card-title">
                <div className="title">{card.title}</div>
                <div className="delete">
                  <a href="">
                    <img src={deleteIcon} alt="delete" loading="lazy"/>
                  </a>
                </div>
              </div>
              <div className="card-number">
                <img src={payLogo} alt="delete" loading="lazy"/>
                <span>{card.payLink}</span>
              </div>
            </div>
          ))}
        </div>
        <FaqBlock />
      </div>
    </Wrapper>
  );
};

export default SaveUpiBlock;

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
            font-size: 14px;
            line-height: 20px;
          }
        }
        .card-number {
          display: flex;
          img {
            width: 30px;
            object-fit: cover;
          }
          span {
            font-size: 16px;
            margin-left: 25px;
            color: #212121;
          }
        }
      }
    }
  }

  @media (min-width: 0px) and (max-width: 575px) {
    .save-upi-block-main .save-upi-block-in .save-card .card-title {
      margin-bottom: 10px;
    }
    .save-upi-block-main .save-upi-block-in .save-card {
      padding: 14px 10px;
    }
    .save-upi-block-main .save-upi-block-in .save-card .card-number img {
      width: 20px;
    }
    .save-upi-block-main .save-upi-block-in .save-card .card-number span {
      font-size: 13px;
      margin-left: 5px;
    }
    .delete a img {
      height: 14px;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .save-upi-block-main .save-upi-block-in .save-card {
      padding: 16px;
    }
    .save-upi-block-main .save-upi-block-in .save-card .card-number span {
      margin-left: 15px;
    }
  }
`;
