import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  width: 168px;
  font-size: 18px;
  line-height: 60px;
  border-radius: 50px;
  display: inline-block;
  text-align: center;
  padding: 0px;
  border: none;
  outline: none;
  color: var(--white-color);
  text-transform: capitalize;
  @media (min-width: 0px) and (max-width: 575px) {
    width: 100px;
    font-size: 12px;
    line-height: 40px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 120px;
    font-size: 14px;
    line-height: 50px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 120px;
    font-size: 14px;
    line-height: 50px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
  }

  @media (min-width: 1200px) and (max-width: 1440px) {
  }
  &.add-to-cart-btn {
    background-color: var(--text-color);
    width: 100%;
    border-radius: 0px;
    font-size: 20px;
    line-height: 46px;
    :hover {
      background-color: var(--golden-color);
    }
    text-transform: uppercase;
    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 36px;
    }
    @media (max-width: 1200px) {
      font-size: 16px;
      line-height: 40px;
    }
  }
`;

export default function Button({ btn_text, class_name }) {
  return <Wrapper className={`${class_name}`}>{btn_text}</Wrapper>;
}
