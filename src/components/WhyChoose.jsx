import React from "react";
import styled from "styled-components";
import TitleMain from "./TitleMain";
import bulbImg from "../assets/images/bulb_icon.svg";
import deliveryImg from "../assets/images/delivery_done_icon.svg";
import returnImg from "../assets/images/return_icon.svg";
import supportImg from "../assets/images/support_icon.svg";
import wcuImg from "../assets/images/why_choose_video.webp";

export default function WhyChoose() {
  const earings = [
    { icon: bulbImg, title: "Pearls Earrings", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { icon: supportImg, title: "Pearls Earrings", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { icon: deliveryImg, title: "Pearls Earrings", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { icon: returnImg, title: "Pearls Earrings", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  ];

  return (
    <Wrapper>
      <div className="why-choose-block-main-wcp">
        <div className="container">
          <TitleMain mainTitle="Why Choose Golden Glory?" />
          <div className="why-choose-in-wcp">
            <div className="left-block-wcp">
              <div className="left-block-video-wcp">
                <img src={wcuImg} alt="wcus_video" loading="lazy"/>
              </div>
            </div>
            <div className="right-block-wcp">
              <div className="right-block-content-wcp">
                {earings.map((item, i) => (
                  <div className="detail-box-wcp" key={i}>
                    <div className="icon-wcp">
                      <img src={item.icon} alt="icon" loading="lazy"/>
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-block: 40px 100px;
  .why-choose-block-main-wcp {
    h4 {
      padding: 0px;
    }
    .why-choose-in-wcp {
      display: flex;
      .left-block-wcp {
        width: 50%;
        position: relative;
        z-index: 9;
        .left-block-video-wcp {
          max-width: 660px;
          margin-left: auto;
          position: absolute;
          bottom: 30px;
          left: 0;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      .right-block-wcp {
        width: 50%;
        .right-block-content-wcp {
          width: 890px;
          position: relative;
          /* z-index: -1; */
          padding: 76px 60px 76px 260px;
          background: var(--bg-color);
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 70px;
          margin-left: -214px;
          .detail-box-wcp {
            padding-inline: 20px;
            text-align: center;
            :nth-child(odd) {
              padding-left: 0px;
            }
            :nth-child(even) {
              padding-right: 0px;
            }
            .icon-wcp {
              margin-bottom: 25px;
              height: 77px;
              img {
                width: 61px;
              }
            }
            h2 {
              font-size: 25px;
              line-height: 32px;
              color: var(--text-color);
              padding-bottom: 10px;
            }
            p {
              line-height: 24px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 0px) and (max-width: 575px) {
    padding-block: 40px;
    .why-choose-block-main-wcp {
      .why-choose-in-wcp {
        flex-wrap: wrap;
        .left-block-wcp {
          width: 100%;
          .left-block-video-wcp {
            width: 100%;
            margin-left: auto;
            position: relative;
            bottom: 0;
          }
        }
        .right-block-wcp {
          width: 100%;
          .right-block-content-wcp {
            width: 100%;
            padding: 30px 0px 0px;
            grid-template-columns: repeat(1, 1fr);
            gap: 10px;
            margin-left: 0px;
            background: inherit;
            .detail-box-wcp {
              padding: 25px 20px !important;
              background: var(--bg-color);
              .icon-wcp {
                margin-bottom: 15px;
                height: 50px;
                img {
                  width: 40px;
                }
              }
              h2 {
                font-size: 20px;
                line-height: 22px;
                padding-bottom: 10px;
              }
              p {
                font-size: 16px;
                line-height: 22px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    padding-block: 40px;
    .why-choose-block-main-wcp {
      .why-choose-in-wcp {
        flex-wrap: wrap;
        .left-block-wcp {
          width: 100%;
          .left-block-video-wcp {
            width: 100%;
            margin-left: auto;
            position: relative;
            bottom: 0;
          }
        }
        .right-block-wcp {
          width: 100%;
          .right-block-content-wcp {
            width: 100%;
            padding: 30px 0px 0px;
            gap: 10px;
            margin-left: 0px;
            background: inherit;
            .detail-box-wcp {
              padding: 25px 20px !important;
              background: var(--bg-color);
              .icon-wcp {
                margin-bottom: 15px;
                height: 57px;
                img {
                  height: 45px;
                  object-fit: contain;
                }
              }
              h2 {
                font-size: 22px;
                line-height: 24px;
                padding-bottom: 10px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding-block: 80px;
    .why-choose-block-main-wcp {
      .why-choose-in-wcp {
        flex-wrap: wrap;
        .left-block-wcp {
          width: 100%;
          .left-block-video-wcp {
            max-width: 100%;
            margin-left: auto;
            position: relative;
            bottom: 0;
          }
        }
        .right-block-wcp {
          width: 100%;
          .right-block-content-wcp {
            width: 100%;
            padding: 40px 0px 0px;
            gap: 20px;
            margin-left: 0px;
            background: inherit;
            .detail-box-wcp {
              padding: 25px 20px !important;
              background: var(--bg-color);
              .icon-wcp {
                margin-bottom: 15px;
                height: 57px;
                img {
                  height: 45px;
                  object-fit: contain;
                }
              }
              h2 {
                font-size: 22px;
                line-height: 24px;
                padding-bottom: 10px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    padding-block: 80px;
    .why-choose-block-main-wcp {
      .why-choose-in-wcp {
        flex-wrap: wrap;
        .left-block-wcp {
          width: 100%;
          .left-block-video-wcp {
            margin-inline: auto;
            position: relative;
            bottom: 0;
          }
        }
        .right-block-wcp {
          width: 100%;
          .right-block-content-wcp {
            width: 100%;
            padding: 220px 60px 76px 76px;
            gap: 20px;
            margin-left: 0px;
            margin-top: -200px;
            .detail-box-wcp {
              padding: 25px 20px !important;
              box-shadow: 0 0 10px var(--golden-color);
              .icon-wcp {
                margin-bottom: 15px;
                height: 57px;
                img {
                  height: 45px;
                  object-fit: contain;
                }
              }
              h2 {
                font-size: 22px;
                line-height: 24px;
                padding-bottom: 10px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    padding-block: 80px;
    .why-choose-block-main-wcp {
      .why-choose-in-wcp {
        .left-block-wcp {
          .left-block-video-wcp {
            max-width: 510px;
            bottom: 50px;
          }
        }
        .right-block-wcp {
          .right-block-content-wcp {
            width: 770px;
            padding: 50px 40px 50px 210px;
            gap: 20px;
            .detail-box-wcp {
              padding: 25px 20px !important;
              box-shadow: 0 0 10px var(--golden-color);
              .icon-wcp {
                margin-bottom: 15px;
                height: 57px;
                img {
                  height: 45px;
                  object-fit: contain;
                }
              }
              h2 {
                font-size: 22px;
                line-height: 24px;
                padding-bottom: 10px;
              }
            }
          }
        }
      }
    }
  }
`;
