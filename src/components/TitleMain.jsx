import React from "react";
import styled from "styled-components";



export default function TitleMain({ subTitle, mainTitle }) {
  return (
    <Wrapper>
      <h4>{subTitle}</h4>
      <h2>{mainTitle}</h2>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  h4 {
    font-size: 25px;
    line-height: 32px;
    padding-bottom: 20px;
    text-transform: uppercase;
    color: var(--golden-color);
  }
  h2 {
    font-size: 45px;
    line-height: 54px;
    padding-bottom: 20px;
    color: var(--text-color);
    text-transform: capitalize;
  }
  @media (min-width: 0px) and (max-width: 575px) {
    h4 {
      font-size: 16px;
      line-height: 22px;
      padding-bottom: 8px;
    }
    h2 {
      font-size: 30px;
      line-height: 36px;
      padding-bottom: 10px;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    h4 {
      font-size: 18px;
      line-height: 26px;
      padding-bottom: 10px;
    }
    h2 {
      font-size: 35px;
      line-height: 38px;
      padding-bottom: 10px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    h4 {
      font-size: 20px;
      line-height: 28px;
      padding-bottom: 10px;
    }
    h2 {
      font-size: 36px;
      line-height: 42px;
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    h4 {
      font-size: 22px;
      line-height: 28px;
      padding-bottom: 16px;
    }
    h2 {
      font-size: 40px;
      line-height: 46px;
    }
  }

  @media (min-width: 1200px) and (max-width: 1440px) {
  }
`;