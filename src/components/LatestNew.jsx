import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import TitleMain from "./TitleMain";
import newsImg from "../assets/images/news_img.png";
import newsImg1 from "../assets/images/news_img_2.png";

export default function LatestNew() {
  const news = [
    { imgSrc: newsImg, authorName: "Neil Jonson", newsDate: "July 8, 2021", desc: "It Is a Long Established Fact That Reader Will Be..." },
    { imgSrc: newsImg1, authorName: "John Smith", newsDate: " May 21, 2021", desc: "It Is a Long Established Fact That Reader Will Be..." },
  ];

  return (
    <Wrapper>
      <div className="container">
        <TitleMain mainTitle="latest news" subTitle="blog" />
        <div className="news-block-hp">
          {news.map((newsItem, index) => (
            <div className="news-card-hp" key={index}>
              <div className="news-img-hp">
                <img src={newsItem.imgSrc} alt="newsImg" />
              </div>
              <div className="news-content-main-hp">
                <div className="news-content-in-hp">
                  <div className="news-time-hp">
                    <h4>{newsItem.authorName}</h4>
                    <h4>/ {newsItem.newsDate}</h4>
                  </div>
                  <div className="news-desc-hp">
                    <h2>{newsItem.desc}</h2>
                  </div>
                  <div className="read-more-btn-hp">
                    <NavLink className="read-more-btn" to="/" role="button" exact="true">
                      read more
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-block: 100px;
  .news-block-hp {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 78px;
    .news-card-hp {
      width: 100%;
      .news-img-hp {
        width: 100%;
        img {
          width: 100%;
          object-fit: cover;
        }
      }
      .news-content-main-hp {
        padding-inline: 60px;
        margin-top: -80px;
        position: relative;
        z-index: 9;
        .news-content-in-hp {
          padding: 42px 35px;
          background-color: var(--bg-color);
          .news-time-hp {
            display: flex;
            gap: 10px;
            padding-bottom: 22px;
            h4 {
              font-size: 18px;
              line-height: 24px;
              color: var(--golden-color);
              :last-child {
                color: var(--text-color);
              }
            }
          }
          .news-desc-hp {
            h2 {
              font-size: 30px;
              line-height: 42px;
              color: var(--text-color);
              padding-bottom: 20px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 0px) and (max-width: 575px) {
    padding-block: 0px 40px;
    .news-block-hp {
      grid-template-columns: repeat(1, 1fr);
      gap: 25px;
      .news-card-hp {
        .news-content-main-hp {
          padding-inline: 10px;
          margin-top: -30px;
          .news-content-in-hp {
            padding: 30px 25px;
            .news-time-hp {
              padding-bottom: 15px;
              h4 {
                font-size: 15px;
                line-height: 18px;
              }
            }
            .news-desc-hp {
              h2 {
                font-size: 22px;
                line-height: 25px;
                padding-bottom: 15px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    padding-block: 10px 40px;
    .news-block-hp {
      grid-template-columns: repeat(1, 1fr);
      gap: 25px;
      .news-card-hp {
        .news-content-main-hp {
          padding-inline: 10px;
          margin-top: -40px;
          .news-content-in-hp {
            .news-time-hp {
              padding-bottom: 15px;
              h4 {
                font-size: 15px;
                line-height: 18px;
              }
            }
            .news-desc-hp {
              h2 {
                font-size: 24px;
                line-height: 30px;
                padding-bottom: 15px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding-block: 20px 60px;
    .news-block-hp {
      gap: 25px;
      .news-card-hp {
        .news-content-main-hp {
          padding-inline: 10px;
          margin-top: -40px;
          .news-content-in-hp {
            padding: 25px 20px;
            .news-time-hp {
              padding-bottom: 10px;
              h4 {
                font-size: 15px;
                line-height: 18px;
              }
            }
            .news-desc-hp {
              h2 {
                font-size: 22px;
                line-height: 30px;
                padding-bottom: 10px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    padding-block: 10px 80px;
    .news-block-hp {
      gap: 30px;
      .news-card-hp {
        .news-content-main-hp {
          padding-inline: 20px;
          margin-top: -55px;
          .news-content-in-hp {
            padding: 25px 20px;
            .news-time-hp {
              padding-bottom: 10px;
            }
            .news-desc-hp {
              h2 {
                padding-bottom: 10px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    padding-block: 20px 80px;
    .news-block-hp {
      gap: 50px;
      .news-card-hp {
        .news-content-main-hp {
          padding-inline: 30px;
          margin-top: -60px;
          .news-content-in-hp {
            padding: 30px 26px;
            .news-time-hp {
              padding-bottom: 10px;
            }
            .news-desc-hp {
              h2 {
                padding-bottom: 10px;
              }
            }
          }
        }
      }
    }
  }
`;
