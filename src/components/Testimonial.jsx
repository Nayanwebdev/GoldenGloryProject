import React from "react";
import styled from "styled-components";
import TitleMain from "./TitleMain";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import testiImg from "../assets/images/Wedding_Rings.png";
import testiImg2 from "../assets/images/Wedding_Rings.png";
import testiImg3 from "../assets/images/Wedding_Rings.png";

export default function Testimonial() {
  const testimonials = [
    { imgSrc: testiImg, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", name: "Kane Farguson", city: "london" },
    { imgSrc: testiImg2, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", name: "Kane Farguson", city: "surat" },
    { imgSrc: testiImg3, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", name: "Kane Farguson", city: "webly" },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <Wrapper>
      <div className="testimonial-block-main-hp">
        <div className="container">
          <div className="testimonial-block-in-hp">
            <div className="left-block-hp">
              <TitleMain mainTitle="customer stories" subTitle="testimonial" />
            </div>
            <div className="right-block-hp">
              <div className="testimonial-slider-hp">
                <Slider {...settings}>
                  {testimonials.map((slide, index) => {
                    return (
                      <div key={index}>
                        <TestimonialCard cardImg={slide.imgSrc} desc={slide.desc} person={slide.name} city={slide.city} />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-block: 100px;
  .testimonial-block-main-hp {
    .testimonial-block-in-hp {
      display: flex;
      align-items: center;
      gap: 60px;
      position: relative;
      .left-block-hp {
        width: 30%;
        h4 {
          padding-bottom: 10px;
        }
        h2 {
          line-height: 60px;
          padding-bottom: 10px;
        }
      }
      .right-block-hp {
        width: 70%;
        .testimonial-slider-hp {
          .slick-slider {
            position: static;
            .slick-arrow {
              top: auto;
              bottom: 140px;
              right: auto;
              &::before {
                font-size: 25px;
                color: #c18f61;
              }
            }
            .slick-prev {
              left: 0px;
            }
            .slick-next {
              left: 30px;
            }
            .slick-dots {
              display: none !important;
            }
            .slick-list {
              .slick-track {
                .slick-slide {
                  padding-right: 15px;
                }
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 0px) and (max-width: 575px) {
    padding-block: 40px;
    .testimonial-block-main-hp {
      .testimonial-block-in-hp {
        flex-direction: column;
        gap: 20px;
        .left-block-hp {
          width: 100%;
          h4 {
            padding-bottom: 10px;
          }
          h2 {
            line-height: 30px;
            padding-bottom: 10px;
          }
        }
        .right-block-hp {
          width: 100%;
          .testimonial-slider-hp {
            .slick-slider {
              .slick-arrow {
                top: 48px;
                bottom: auto;
                left: auto;
                right: 5px;
              }
              .slick-prev {
                right: 32px;
              }
              .slick-list {
                .slick-track {
                  .slick-slide {
                    padding-inline: 5px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    padding-block: 40px;
    .testimonial-block-main-hp {
      .testimonial-block-in-hp {
        flex-direction: column;
        gap: 20px;
        .left-block-hp {
          width: 100%;
          h4 {
            padding-bottom: 10px;
          }
          h2 {
            line-height: 30px;
            padding-bottom: 10px;
          }
        }
        .right-block-hp {
          width: 100%;
          .testimonial-slider-hp {
            .slick-slider {
              .slick-arrow {
                top: 48px;
                bottom: auto;
                left: auto;
                right: 5px;
              }
              .slick-prev {
                right: 32px;
              }
              .slick-list {
                .slick-track {
                  .slick-slide {
                    padding-inline: 5px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding-block: 60px;
    .testimonial-block-main-hp {
      .testimonial-block-in-hp {
        gap: 20px;
        .left-block-hp {
          h4 {
            font-size: 16px;
            line-height: 18px;
            padding-bottom: 10px;
          }
          h2 {
            line-height: 36px;
          }
        }
        .right-block-hp {
          .testimonial-slider-hp {
            .slick-slider {
              .slick-arrow {
                bottom: 180px;
              }
              .slick-prev {
                right: 36px;
              }
              .slick-next {
                left: 26px;
              }
              .slick-list {
                .slick-track {
                  .slick-slide {
                    padding-inline: 5px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    padding-block: 80px;
    .testimonial-block-main-hp {
      .testimonial-block-in-hp {
        gap: 20px;
        .left-block-hp {
          h4 {
            font-size: 16px;
            line-height: 18px;
            padding-bottom: 10px;
          }
          h2 {
            line-height: 38px;
          }
        }
        .right-block-hp {
          .testimonial-slider-hp {
            .slick-slider {
              .slick-arrow {
                bottom: 98px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    padding-block: 80px;
    .testimonial-block-main-hp {
      .testimonial-block-in-hp {
        gap: 40px;
        .left-block-hp {
          h4 {
            font-size: 16px;
          }
          h2 {
            line-height: 44px;
          }
        }
      }
    }
  }
`;
