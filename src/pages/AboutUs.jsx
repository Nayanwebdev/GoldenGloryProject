import React from "react";
import styled from "styled-components";
import BasicAccordion from "../components/BasicAccordion";
import PageBanner from "../components/PageBanner";
import TitleMain from "../components/TitleMain";
import aboutStoryRightBg from "../assets/images/about_story_right.webp";
import WhyChoose from "../components/WhyChoose";
import OurTeam from "../components/OurTeam";

export default function AboutUs() {
  const accordionData = [
    { id: 1, title: "Who is golden glory?", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem." },
    { id: 2, title: "What do we do?", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem." },
    { id: 3, title: "Product's guarantee", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem." },
  ];

  return (
    <Wrapper>
      <PageBanner pageTitle="who we are" pageLink="aboutus" />
      <div className="about-block-main-abp">
        <div className="container">
          <div className="about-block-in-abp">
            <div className="our-story-section-abp">
              <div className="left-block-abp">
                <TitleMain mainTitle="our story is awesome" subTitle="our story" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl suscipit adipiscing Bibendum est ultricies integer.</p>
                <BasicAccordion />
              </div>
              <div className="right-block-abp">
                <div className="right-img-abp">
                  <img src={aboutStoryRightBg} alt="storyRight" loading="lazy"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyChoose />
      <OurTeam />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-bottom: 60px;
  .about-block-main-abp {
    .about-block-in-abp {
      .our-story-section-abp {
        display: flex;
        position: relative;
        padding-block: 60px;
        .left-block-abp {
          width: 50%;
          padding-right: 50px;
          p {
            max-width: 496px;
            padding: 0px 0px 40px;
          }
          ::before {
            content: "";
            position: absolute;
            background: url("/about_story_bg.webp");
            background-size: cover;
            background-repeat: no-repeat;
            height: 642px;
            width: 424px;
            right: 94%;
            top: 0px;
            z-index: -1;
          }
        }
        .right-block-abp {
          width: 50%;
          .right-img-abp {
            max-width: 596px;
            max-height: 696px;
            margin-left: auto;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
  @media (min-width: 0px) and (max-width: 575px) {
    padding-bottom: 40px;
    .about-block-main-abp {
      .about-block-in-abp {
        .our-story-section-abp {
          flex-wrap: wrap;
          padding-block: 0px;
          position: static;
          gap: 26px;
          .left-block-abp {
            width: 100%;
            order: 1;
            padding-right: 0px;
            p {
              max-width: 100%;
              padding-bottom: 20px;
            }
            ::before {
              display: none;
            }
          }
          .right-block-abp {
            width: 100%;
            order: 0;
            .right-img-abp {
              max-width: 236px;
              max-height: 275px;
              margin-inline: auto;
            }
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    padding-bottom: 40px;
    .about-block-main-abp {
      .about-block-in-abp {
        .our-story-section-abp {
          flex-wrap: wrap;
          padding-block: 0px;
          position: static;
          gap: 26px;
          .left-block-abp {
            width: 100%;
            order: 1;
            padding-right: 0px;
            p {
              max-width: 100%;
              padding-bottom: 20px;
            }
            ::before {
              display: none;
            }
          }
          .right-block-abp {
            width: 100%;
            order: 0;
            .right-img-abp {
              max-width: 256px;
              max-height: 298px;
              margin-inline: auto;
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .about-block-main-abp {
      .about-block-in-abp {
        .our-story-section-abp {
          padding-block: 0px;
          .left-block-abp {
            padding-right: 0px;
            p {
              max-width: 100%;
              padding-bottom: 20px;
            }
            ::before {
              height: 340px;
              width: 222px;
              right: 90%;
              top: 50px;
            }
          }
          .right-block-abp {
            margin-block: auto;
            .right-img-abp {
              max-width: 256px;
              max-height: 298px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .about-block-main-abp {
      .about-block-in-abp {
        .our-story-section-abp {
          padding-block: 0px;
          .left-block-abp {
            padding-right: 0px;
            p {
              max-width: 100%;
              padding-bottom: 20px;
            }
            ::before {
              height: 412px;
              width: 272px;
            }
          }
          .right-block-abp {
            .right-img-abp {
              max-width: 372px;
              max-height: 434px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    .about-block-main-abp {
      .about-block-in-abp {
        .our-story-section-abp {
          .left-block-abp {
            padding-right: 20px;
            p {
              max-width: 100%;
              padding-bottom: 20px;
            }
            ::before {
              height: 480px;
              width: 320px;
            }
          }
          .right-block-abp {
            .right-img-abp {
              max-width: 409px;
              max-height: 477px;
            }
          }
        }
      }
    }
  }
`;
