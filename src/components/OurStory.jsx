import React from "react";
import styled from "styled-components";
import storyBg from "../assets/images/Ourstory.png";
import storyRight from "../assets/images/Story_img.png";
import storyRightSub from "../assets/images/Story_img_1.png";
import Button from "./Button";
import TitleMain from "./TitleMain";

export default function OurStory() {
  return (
    <Wrapper>
      <div className="ourstory-block-main-hp">
        <div className="container">
          <div className="ourstory-block-in-hp">
            <div className="left-block-hp" style={{ backgroundImage: `url(${storyBg})`, backgroundSize: " contain" }}>
              <TitleMain mainTitle="Tradition Cared For Since 1998" subTitle="Our Story" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl suscipit adipiscing Bibendum est ultricies integer.</p>
              <div className="story-btn-hp">
                <Button btn_text="read more" class_name="dark-btn-hp" />
              </div>
            </div>
            <div className="right-block-hp">
              <div className="right-main-img-hp">
                <img src={storyRight} alt="storyRight" />
              </div>
              <div className="right-sub-img-hp">
                <img src={storyRightSub} alt="storyRightSub" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 116px 0px 116px;
  .ourstory-block-main-hp {
    .ourstory-block-in-hp {
      display: flex;
      .left-block-hp {
        width: 46%;
        position: relative;
        p {
          font-size: 18px;
          line-height: 26px;
          color: var(--black-color);
          padding-bottom: 50px;
        }
        ::after {
          content: "";
          position: absolute;
          background-repeat: no-repeat;
          width: 1200px;
          height: 710px;
          right: -70px;
          bottom: 0px;
          z-index: -1;
        }
      }
      .right-block-hp {
        width: 54%;
        position: relative;
        padding-bottom: 115px;

        .right-main-img-hp {
          max-width: 444px;
          max-height: 665px;
          margin-left: auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .right-sub-img-hp {
          position: absolute;
          bottom: 0;
          width: 364px;
          height: 333px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  @media (min-width: 0px) and (max-width: 575px) {
    padding: 40px 0px;
    .ourstory-block-main-hp {
      .ourstory-block-in-hp {
        flex-direction: column-reverse;
        .left-block-hp {
          width: 100%;
          p {
            font-size: 14px;
            line-height: 20px;
            padding-bottom: 25px;
            text-align: justify;
          }
          ::after {
            width: 100%;
            height: 100%;
            right: 0px;
            bottom: -40px;
          }
        }
        .right-block-hp {
          width: 100%;
          position: relative;
          padding-bottom: 65px;
          margin-bottom: 20px;
          .right-main-img-hp {
            width: 270px;
            height: 404px;
            margin-inline: auto;
          }
          .right-sub-img-hp {
            bottom: 0;
            left: 6px;
            width: 150px;
            height: auto;
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    padding: 40px 0px;
    .ourstory-block-main-hp {
      .ourstory-block-in-hp {
        flex-direction: column-reverse;
        .left-block-hp {
          width: 100%;
          p {
            font-size: 14px;
            line-height: 20px;
            padding-bottom: 25px;
            text-align: justify;
          }
          ::after {
            width: 100%;
            height: 100%;
            right: 0px;
            bottom: -40px;
          }
        }
        .right-block-hp {
          width: 100%;
          position: relative;
          padding-bottom: 75px;
          margin-bottom: 20px;
          .right-main-img-hp {
            width: 300px;
            height: 450px;
            margin-inline: auto;
          }
          .right-sub-img-hp {
            bottom: 20px;
            left: 0px;
            width: 190px;
            height: auto;
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding: 60px 0px 50px;
    .ourstory-block-main-hp {
      .ourstory-block-in-hp {
        .left-block-hp {
          p {
            font-size: 16px;
            line-height: 22px;
            padding-bottom: 35px;
            text-align: justify;
          }
          ::after {
            width: 600px;
            height: 100%;
            right: 0px;
            bottom: -50px;
          }
        }
        .right-block-hp {
          position: relative;
          padding-bottom: 80px;
          .right-main-img-hp {
            width: 300px;
            height: 450px;
          }
          .right-sub-img-hp {
            bottom: 20px;
            left: 0px;
            width: 190px;
            height: auto;
          }
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    padding: 80px 0px 70px;
    .ourstory-block-main-hp {
      .ourstory-block-in-hp {
        .left-block-hp {
          ::after {
            width: 800px;
            height: 100%;
            right: -40px;
            bottom: -70px;
          }
        }
        .right-block-hp {
          padding-bottom: 100px;
          .right-main-img-hp {
            max-width: 380px;
            height: 570px;
          }
          .right-sub-img-hp {
            width: 290px;
            height: 265px;
          }
        }
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    padding: 90px 0px 80px;
    .ourstory-block-main-hp {
      .ourstory-block-in-hp {
        .left-block-hp {
          ::after {
            width: 800px;
            height: 100%;
            right: -40px;
            bottom: -80px;
          }
        }
        .right-block-hp {
          .right-main-img-hp {
            max-width: 410px;
            height: 614px;
          }
          .right-sub-img-hp {
            width: 290px;
            height: 265px;
          }
        }
      }
    }
  }
`;
