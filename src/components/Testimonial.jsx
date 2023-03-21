import React from "react";
import styled from "styled-components";
import TitleMain from "./TitleMain";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Testimonial() {
  const testimonials = [];

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
                    return <div key={index}>{/* <ProductCard imgSrc={slide.imgSrc} title={slide.title} discPrice={slide.discPrice} price={slide.price} /> */}</div>;
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
  margin-block: 100px;
  .testimonial-block-main-hp {
    .testimonial-block-in-hp {
      display: flex;
      gap: 70px;
      .left-block-hp {
        width: 27%;
      }
      .right-block-hp {
        width: 73%;
        .testimonial-slider-hp {
        }
      }
    }
  }
`;
