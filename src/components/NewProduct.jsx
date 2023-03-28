import React from "react";
import styled from "styled-components";
import newProductImg from "../assets/images/new_arrival_set.png";

export default function NewProduct() {
  const newArrival = [{ title: "New arrivals", disc: "40% Discount", subTitle: "on jewellary", imgSrc: newProductImg }];

  return (
    <Wrapper>
      <div className="new-arrival-block-nac">
        {newArrival.map((item, i) => (
          <div className="new-arrival-in-nac" key={i}>
            <div className="content-nac">
              <h4>{item.title}</h4>
              <h2>{item.disc}</h2>
              <h3>{item.subTitle}</h3>
            </div>
            <div className="new-arrival-img-nac">
              <img src={item.imgSrc} alt="new arrival" />
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 40px;
  .new-arrival-block-nac {
    background: #ffd9b7;
    position: relative;
    padding: 60px 70px;
    .new-arrival-in-nac {
      .content-nac {
        position: relative;
        z-index: 1;
        max-width: 370px;
        text-align: center;
        h4 {
          font-size: 25px;
          line-height: 30px;
          color: var(--golden-color);
          text-transform: capitalize;
          padding-bottom: 10px;
        }
        h2 {
          font-size: 45px;
          line-height: 54px;
          color: var(--text-color);
          text-transform: uppercase;
          padding-bottom: 10px;
        }
        h3 {
          font-size: 25px;
          line-height: 30px;
          color: var(--golden-color);
          text-transform: capitalize;
          font-family: "Sorts Mill Goudy", sans-serif;
        }
      }
      .new-arrival-img-nac {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  @media (min-width: 0px) and (max-width: 575px) {
    margin-bottom: 20px;
    .new-arrival-block-nac {
      padding: 10px;
      .new-arrival-in-nac {
        .content-nac {
          max-width: 150px;
          h4 {
            font-size: 16px;
            line-height: 18px;
            padding-bottom: 6px;
          }
          h2 {
            font-size: 16px;
            line-height: 18px;
            font-weight: 600;
            padding-bottom: 5px;
          }
          h3 {
            font-size: 16px;
            line-height: 18px;
            padding-bottom: 6px;
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    margin-bottom: 20px;
    .new-arrival-block-nac {
      padding: 10px;
      .new-arrival-in-nac {
        .content-nac {
          max-width: 150px;
          h4 {
            font-size: 16px;
            line-height: 18px;
            padding-bottom: 6px;
          }
          h2 {
            font-size: 16px;
            line-height: 18px;
            font-weight: 600;
            padding-bottom: 5px;
          }
          h3 {
            font-size: 16px;
            line-height: 18px;
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    margin-bottom: 30px;
    .new-arrival-block-nac {
      padding: 18px;
      .new-arrival-in-nac {
        .content-nac {
          max-width: 190px;
          h4 {
            font-size: 20px;
            line-height: 24px;
          }
          h2 {
            font-size: 22px;
            line-height: 28px;
            font-weight: 600;
          }
          h3 {
            font-size: 20px;
            line-height: 24px;
          }
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .new-arrival-block-nac {
      padding: 40px;
      .new-arrival-in-nac {
        .content-nac {
          max-width: 245px;
          h4 {
            font-size: 20px;
            line-height: 24px;
          }
          h2 {
            font-size: 30px;
            line-height: 38px;
            font-weight: 600;
          }
          h3 {
            font-size: 20px;
            line-height: 24px;
          }
        }
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    .new-arrival-block-nac {
      padding: 44px 36px;
    }
  }
`;
