import React from "react";
import FaqBlock from "./FaqBlock";
import styled from "styled-components";
import deleteIcon from "../assets/images/delete_btn.svg";

const SaveCardBlock = () => {
  const cards = [
    { title: "State Bank of India Credit Card", cardNum: "**** **** **** 4949" },
    { title: "State Bank of India Credit Card", cardNum: "**** **** **** 4949" },
    { title: "State Bank of India Credit Card", cardNum: "**** **** **** 4949" },
  ];

  return (
    <Wrapper>
      <div className="save-card-block-main">
        <div className="save-card-block-in">
          <h3>Manage Saved Cards</h3>
          {cards.map((card, i) => (
            <div className="save-card" key={i}>
              <div className="card-title">
                <div className="title">{card.title}</div>
                <div className="delete">
                  <a href="">
                    <img src={deleteIcon} alt="delete" />
                  </a>
                </div>
              </div>
              <div className="card-number">{card.cardNum}</div>
            </div>
          ))}
        </div>
        <FaqBlock />
      </div>
    </Wrapper>
  );
};

export default SaveCardBlock;

const Wrapper = styled.div`
  .save-card-block-main {
    .save-card-block-in {
      padding-bottom: 60px;
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
          font-size: 16px;
          margin-left: 25px;
          letter-spacing: 5px;
          color: #212121;
        }
      }
    }
  }

  @media (min-width: 0px) and (max-width: 575px) {
    .save-card-block-main .save-card-block-in .save-card .card-title .title {
      font-size: 12px;
      line-height: 20px;
    }
    .save-card-block-main .save-card-block-in .save-card .card-title {
      align-items: flex-start;
    }
    .save-card-block-main .save-card-block-in .save-card {
      padding: 16px 10px;
    }
    .save-card-block-main .save-card-block-in .save-card .card-number {
      font-size: 14px;
      margin-left: 0;
      letter-spacing: 1px;
    }
    .delete a img {
      height: 14px;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .save-card-block-main .save-card-block-in .save-card {
      padding: 16px;
    }
    .save-card-block-main .save-card-block-in .save-card .card-number {
      margin-left: 5px;
      letter-spacing: 2px;
    }
  }
`;
