import React from "react";
import styled from "styled-components";
import FaqBlock from "./FaqBlock";

const GiftCardBlock = () => {
  return (
    <Wrapper>
      <div className="gift-card-block-main">
        <div className="gift-card-block-in">
          <h3>Golden Glory Gift Card</h3>
        </div>
        <FaqBlock />
        <div className="term-condition">
          <h4>Terms & Conditions</h4>
          <ul>
            <li>golden Glory Gift Cards (“GCs” or “Gift Cards”) are issued by Qwikcilver Solutions Pvt. Ltd. ('Qwikcilver') which is a private limited company incorporated under the laws of India, and is authorized by the Reserve Bank of India ('RBI') to issue such Gift Cards.</li>
            <li>The Gift Cards can be redeemed online against Sellers listed on www.golden Glory.com or golden Glory Mobile App or golden Glory m-site ('Platform') only.</li>
            <li>
              Gift Cards can be purchased on
              <a href="https://golden-glory-project.vercel.app/" target="_blank">
                https://golden-glory-project.vercel.app/
              </a>
              or golden Glory Mobile App using the following payment modes only - Credit Card, Debit Card and Net Banking.
            </li>
            <li>Gift Cards can be redeemed by selecting the payment mode as Gift Card.</li>
          </ul>
        </div>
        <a href="" target="_blank" className="term-condition-link">
          View all T&amp;Cs &#8250;
        </a>
      </div>
    </Wrapper>
  );
};

export default GiftCardBlock;

const Wrapper = styled.div`
  .gift-card-block-main {
    .gift-card-block-in {
      padding-bottom: 50px;
      h3 {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 30px;
      }
    }
    .term-condition {
      margin-top: 25px;
      h4 {
        font-size: 15px;
        line-height: 20px;
        margin-bottom: 20px;
        font-weight: 600;
      }
      ul {
        padding-left: 18px;
        li {
          list-style: disc;
          font-size: 15px;
          line-height: 20px;
          margin-top: 15px;
          &::marker {
            font-size: 20px;
            line-height: 20px;
          }
          a {
          }
        }
      }
    }
    .term-condition-link {
      font-size: 18px;
      font-weight: 600;
      display: inline-block;
      color: var(--text-color);
      margin-top: 25px;
    }
  }

  @media (min-width: 0px) and (max-width: 575px) {
    .gift-card-block-main .term-condition h4 {
      font-size: 14px;
      margin-bottom: 10px;
    }
    .gift-card-block-main .term-condition ul li {
      font-size: 12px;
      line-height: 16px;
      margin-top: 8px;
    }
    .gift-card-block-main .term-condition-link {
      font-size: 15px;
      margin-top: 15px;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
  }
`;
