import React from "react";
import styled from "styled-components";
import Button from "./Button";
import TitleMain from "./TitleMain";
import ProductCard from "./ProductCard";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import background from "../assets/images/mostpopular_bg.png";
import img from "../assets/images/Peacock_Earrings.png";
import img1 from "../assets/images/Pearls_Breslate_1.png";
import img2 from "../assets/images/Pearls_Breslate_2.png";
import img3 from "../assets/images/Pearls_Earring_1.png";
import img4 from "../assets/images/Pearls_Earring_2.png";
import img5 from "../assets/images/Pearls_Earring_3.png";
import img6 from "../assets/images/Pearls_Earring_4.png";
import img7 from "../assets/images/perarls_ring_2.png";
import img8 from "../assets/images/Pearls_Earring_5.png";
import img9 from "../assets/images/Pearls_Earring_6.png";
import img10 from "../assets/images/Pearls_Earring_7.png";
import img11 from "../assets/images/bangels.png";

export default function MostPopular() {
  const products = [
    { imgSrc: img, title: "Pearls Breslate", discPrice: "$549", price: "$499" },
    { imgSrc: img1, title: "Pearls Breslate", discPrice: "$549", price: "$499" },
    { imgSrc: img2, title: "Golden Bracelet", discPrice: "$549", price: "$499" },
    { imgSrc: img3, title: "Pearls Earrings", discPrice: "$549", price: "$499" },
    { imgSrc: img4, title: "Pearls Earrings", discPrice: "$549", price: "$499" },
    { imgSrc: img5, title: "Pearls Earrings", discPrice: "$549", price: "$499" },
    { imgSrc: img6, title: "Pearls Earrings", discPrice: "$649", price: "$555" },
    { imgSrc: img7, title: "Pearls Earrings", discPrice: "$549", price: "$499" },
    { imgSrc: img8, title: "Pearls Breslate", discPrice: "$649", price: "$599" },
    { imgSrc: img9, title: "Pearls Earrings", discPrice: "$549", price: "$499" },
    { imgSrc: img10, title: "Peacock Earrings", discPrice: "$549", price: "$499" },
    { imgSrc: img11, title: "Blue Pearls Bangles", discPrice: "$549", price: "$499" },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const showmore = () => {
    alert("Show");
  };
  return (
    <Wrapper>
      <div className="mostpopular-block-main-hp" style={{}}>
        <div className="container">
          <div className="mostpopular-block-in-hp">
            <div className="populat-title-hp">
              <TitleMain mainTitle="Shophisticated Beauty On Sale" subTitle="most popular" />
              <NavLink className="btn-main-hp dark-btn-hp" to="/Collection" role="button" exact="true">
                explore more
              </NavLink>
            </div>
            <div className="mostpopular-slider-hp">
              <Slider {...settings}>
                {products.map((slide, index) => {
                  return (
                    <div key={index}>
                      <ProductCard imgSrc={slide.imgSrc} title={slide.title} discPrice={slide.discPrice} price={slide.price} />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-block: 120px 120px;
  .mostpopular-block-main-hp {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      background: url(${background});
      background-repeat: no-repeat;
      background-size: cover;
      height: 676px;
      max-width: 1756px;
      left: 0;
      right: 0;
      top: 0px;
      margin-inline: auto;
      z-index: -1;
    }
    .mostpopular-block-in-hp {
      .populat-title-hp {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 30px;
        h2 {
          padding: 0px;
        }
      }
      .mostpopular-slider-hp {
        padding-bottom: 60px;
        .slick-slider {
          .slick-arrow {
            display: none !important;
          }
          .slick-slide {
            padding-top: 10px;
            padding-inline: 10px;
            text-align: center;
            .card-img-cb {
              background-color: white;
              @media (min-width: 768px) and (max-width: 991px) {
                height: 260px;
              }
            }
            .card-content-cb {
              h4 {
                font-size: 25px;
                line-height: 34px;
                @media (max-width: 991px) {
                  font-size: 22px;
                }
              }
            }
          }
          .slick-dots {
            display: flex !important;
            align-items: center;
            justify-content: center;
            bottom: -50px;
            li {
              button {
                padding: 0px;
                &::before {
                  font-size: 18px;
                  line-height: 22px;
                  color: #fff0e2;
                  opacity: 1;
                }
              }
            }
          }
          .slick-active {
            button {
              &::before {
                opacity: 1;
                color: #c18f61 !important;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 0px) and (max-width: 575px) {
    padding-block: 40px 30px;
    .mostpopular-block-main-hp {
      .mostpopular-block-in-hp {
        .populat-title-hp {
          flex-direction: column;
          align-items: flex-start;
          padding-bottom: 0px;
          h2 {
            padding-bottom: 10px;
          }
          .btn-main-hp {
            display: none;
          }
        }
        .mostpopular-slider-hp {
          padding-bottom: 40px;
        }
      }
      &::after {
        height: 80%;
        width: 100%;
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    padding-block: 60px;
    .mostpopular-block-main-hp {
      .mostpopular-block-in-hp {
        .mostpopular-slider-hp {
          padding-bottom: 40px;
        }
      }
      &::after {
        height: 100%;
        width: 100%;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding-block: 70px;
    .mostpopular-block-main-hp {
      .mostpopular-block-in-hp {
        .mostpopular-slider-hp {
          padding-bottom: 40px;
          .slick-prev,
          .slick-next {
            width: 25px;
            height: 25px;
          }
          .slick-prev:before,
          .slick-next:before {
            font-size: 25px;
          }
        }
      }
      &::after {
        height: 80%;
        width: 100%;
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    padding-block: 80px;
    .mostpopular-block-main-hp {
      .mostpopular-block-in-hp {
        .mostpopular-slider-hp {
          padding-bottom: 10px;
          .slick-prev,
          .slick-next {
            width: 32px;
            height: 32px;
          }
          .slick-prev:before,
          .slick-next:before {
            font-size: 31px;
          }
        }
      }
      &::after {
        height: 500px;
        width: 100%;
        top: 30px;
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    padding-block: 80px;
    .mostpopular-block-main-hp {
      .mostpopular-block-in-hp {
        .mostpopular-slider-hp {
          padding-bottom: 20px;
          .slick-prev,
          .slick-next {
            width: 32px;
            height: 32px;
          }
          .slick-prev:before,
          .slick-next:before {
            font-size: 31px;
          }
        }
      }
      &::after {
        height: 100%;
        width: 100%;
      }
    }
  }

  @media (max-width: 1249px) {
    .mostpopular-block-main-hp {
      .mostpopular-block-in-hp {
        .mostpopular-slider-hp {
          .slick-slider {
            .slick-arrow {
              display: block !important;

              z-index: 9;
              &::before {
                color: var(--golden-color);
                :hover {
                  color: var(--text-color);
                }
              }
            }
            .slick-prev {
              left: -10px;
              top: 45%;
              :hover {
                &::before {
                  color: var(--text-color);
                }
              }
            }
            .slick-next {
              right: -10px;
              top: 45%;
              :hover {
                &::before {
                  color: var(--text-color);
                }
              }
            }
          }
        }
      }
    }
  }
`;
