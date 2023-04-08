import React from "react";
import styled from "styled-components";
import orderImg from "../assets/images/Pearls_Earring_7.webp";
import star from "../assets/images/star.svg";
import certify from "../assets/images/certify_icon.svg";

const ReviewWriteBlock = () => {
  const reviews = [
    {
      imgSrc: orderImg,
      name: "peackock earings Feather Earrings Alloy Drops & Danglers Alloy Drops & Danglers",
      reviewText: ["This earings is so good.", "Good designs", "easy to wear", "Very satisfied with my purchase"],
      reviewrName: "nayan patel",
      reviewrDate: "28 Dec, 2022",
    },
    {
      imgSrc: orderImg,
      name: "peackock earings Feather Earrings Alloy Drops & Danglers Alloy Drops & Danglers",
      reviewText: ["This earings is so good.", "Good designs", "easy to wear", "Very satisfied with my purchase"],
      reviewrName: "nayan patel",
      reviewrDate: "28 Dec, 2022",
    },
  ];
  return (
    <Wrapper>
      <div className="review-block-main">
        <div className="review-block-in">
          <h3>My Reviews</h3>
          {reviews.map((review, i) => (
            <div className="review-card" key={i}>
              <div className="review-img">
                <img src={review.imgSrc} alt="review" loading="lazy"/>
              </div>
              <div className="review-content">
                <div className="product-name">{review.name}</div>
                <div className="review">
                  <div className="star">
                    5 <img src={star} alt="star" loading="lazy"/>
                  </div>
                  <span>Just Wow!</span>
                </div>
                <div className="text">
                  {review.reviewText.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
                <div className="reviewer-detail">
                  <div className="person">{review.reviewrName}</div>
                  <div className="person-certify">
                    <img src={certify} alt="certify" loading="lazy"/> Certified Buyer
                  </div>
                  <div className="review-date">{review.reviewrDate}</div>
                </div>
                <div className="action">
                  <div className="edit">
                    <a href="">edit</a>
                  </div>
                  <div className="delete">
                    <a href="">delete</a>
                  </div>
                  <div className="share">
                    <a href="">share</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default ReviewWriteBlock;

const Wrapper = styled.div`
  .review-block-main {
    .review-block-in {
      h3 {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 30px;
      }
      .review-card {
        display: flex;
        padding: 20px;
        border: 1px solid rgb(224, 224, 224);
        border-bottom: none;
        &:last-child {
          border-bottom: 1px solid rgb(224, 224, 224);
        }
        .review-img {
          max-width: 100px;
          width: 100%;
          img {
            width: 100%;
          }
        }
        .review-content {
          width: 100%;
          .product-name {
            font-size: 16px;
            line-height: 20px;
            text-transform: capitalize;
            color: #878787;
            padding-bottom: 10px;
          }
          .review {
            display: flex;
            align-items: center;
            gap: 15px;
            padding-bottom: 10px;
            .star {
              font-size: 14px;
              font-weight: 500;
              display: flex;
              align-items: center;
              width: fit-content;
              padding: 2px 4px 2px 6px;
              border-radius: 3px;
              color: #fff;
              background-color: rgb(56, 142, 60);
              img {
                height: 10px;
                margin-left: 2px;
              }
            }
            span {
              font-size: 14px;
              font-weight: 500;
            }
          }
          .text {
            margin-block: 12px;
            p {
              font-size: 14px;
              line-height: 20px;
            }
          }
          .reviewer-detail {
            display: flex;
            align-items: center;
            gap: 8px;
            padding-bottom: 12px;
            .person {
              font-size: 12px;
              color: #878787;
            }
            .person-certify {
              font-size: 12px;
              color: #878787;
              img {
                width: 12px;
              }
            }
            .review-date {
              font-size: 12px;
              color: #878787;
            }
          }
          .action {
            display: flex;
            gap: 24px;
            a {
              font-size: 15px;
              font-weight: 500;
              text-transform: capitalize;
              color: #2874f0;
            }
          }
        }
      }
    }
  }

  @media (min-width: 0px) and (max-width: 575px) {
    .review-block-main {
      .review-block-in {
        .review-card {
          flex-direction: column;
          padding: 14px 10px !important;
          .review-img {
            margin: auto;
          }
          .review-content {
            .product-name {
              font-size: 14px;
              line-height: 18px;
            }
            .review {
              gap: 10px;
              padding-bottom: 5px;
              .star {
                padding: 2px 4px;
                font-size: 12px;
                img {
                  height: 8px;
                }
              }
              span {
                font-size: 12px;
              }
            }
            .text {
              margin-block: 6px;
              p {
                font-size: 13px;
                line-height: 18px;
              }
            }
            .reviewer-detail {
              padding-bottom: 8px;
              flex-wrap: wrap;
              gap: 2px 8px;
            }
            .action {
              gap: 10px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .review-block-main {
      .review-block-in {
        .review-card {
          flex-direction: column;
          padding: 14px 10px !important;
          .review-img {
            margin: auto;
          }
          .review-content {
            .product-name {
              font-size: 14px;
              line-height: 18px;
            }
            .review {
              gap: 10px;
              padding-bottom: 5px;
              .star {
                padding: 2px 4px;
                font-size: 12px;
              }
            }
            .text {
              margin-block: 6px;
              p {
                font-size: 13px;
                line-height: 18px;
              }
            }
            .reviewer-detail {
              padding-bottom: 8px;
              flex-wrap: wrap;
              gap: 2px 8px;
            }
            .action {
              gap: 10px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .product-name {
      font-size: 15px !important;
    }
    .review-block-main .review-block-in .review-card .review-content .review {
      padding-bottom: 0px;
    }
  }
`;
