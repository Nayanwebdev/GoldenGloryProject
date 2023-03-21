import React from "react";
import styled from "styled-components";
import CollectionImg from "../assets/images/Special_collection.png";
import Button from "./Button";
import TitleMain from "./TitleMain";

export default function SpecialCollection() {
  return (
    <Wrapper>
      <div className="special-collection-block-hp">
        {/* <div className="collection-img-hp">
          <img src={CollectionImg} alt="CollectionImg" />
        </div> */}
        <div className="collection-content-hp">
          <TitleMain mainTitle="Special Handpicked Diamond Products Collection" subTitle="Diamond collection" />
          <Button btn_text="buy now" class_name="dark-btn-hp" />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .special-collection-block-hp {
    position: relative;
    height: 727px;
    ::before {
      content: "";
      position: absolute;
      background: url("/src/assets/images/Special_collection.png") no-repeat;
      background-size: cover;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    .collection-content-hp {
      width: 100%;
      position: absolute;
      bottom: 60px;
      text-align: center;
      h4 {
        color: var(--white-color);
      }
      h2 {
        max-width: 576px;
        margin-inline: auto;
        color: var(--white-color);
      }
    }
  }

  @media (min-width: 0px) and (max-width: 575px) {
    .special-collection-block-hp {
      height: 400px;
      .collection-content-hp {
        bottom: 30px;
        padding-inline: 15px;
        h2 {
          max-width: 400px;
          font-size: 25px;
          line-height: 32px;
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .special-collection-block-hp {
      height: 500px;
      .collection-content-hp {
        bottom: 40px;
        padding-inline: 15px;
        h2 {
          max-width: 500px;
          font-size: 30px;
          line-height: 38px;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .special-collection-block-hp {
      height: 600px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .special-collection-block-hp {
      height: 660px;
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    .special-collection-block-hp {
      height: 700px;
    }
  }
`;
