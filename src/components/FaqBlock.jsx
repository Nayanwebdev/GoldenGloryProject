import React from "react";
import styled from "styled-components";

const FaqBlock = () => {
  return (
    <Wrapper>
      <div className="faq-block-main">
        <div className="faq-title">FAQs</div>
        <div className="faq-data">
          <h4>What happens when I update my email address (or mobile number)?</h4>
          <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
          <h4>When will my Golden Glory account be updated with the new email address (or mobile number)?</h4>
          <p>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
          <h4>What happens to my existing Golden Glory account when I update my email address (or mobile number)?</h4>
          <p>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
          <h4>Does my Seller account get affected when I update my email address?</h4>
          <p>Golden Glory has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>
        </div>
      </div>
    </Wrapper>
  );
};
export default FaqBlock;

const Wrapper = styled.div`
  .faq-block-main {
    .faq-title {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 24px;
    }
    .faq-data {
      h4 {
        font-size: 15px;
        line-height: 20px;
        margin-top: 25px;
        font-weight: 600;
      }
      p {
        font-size: 15px;
        line-height: 20px;
        margin-top: 15px;
      }
    }
  }

  @media (min-width: 0px) and (max-width: 575px) {
    .faq-block-main {
      .faq-title {
        font-size: 15px;
        line-height: 18px;
        margin-bottom: 10px;
      }
      .faq-data {
        h4 {
          font-size: 12px;
          line-height: 15px;
          margin-top: 15px;
        }
        p {
          font-size: 12px;
          line-height: 15px;
          margin-top: 8px;
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .faq-block-main {
      .faq-data {
        h4 {
          font-size: 14px;
          line-height: 18px;
          margin-top: 20px;
        }
        p {
          font-size: 14px;
          line-height: 18px;
          margin-top: 10px;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
  }
  @media (min-width: 992px) and (max-width: 1199px) {
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
  }
`;
