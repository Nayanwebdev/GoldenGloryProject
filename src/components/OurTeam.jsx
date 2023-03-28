import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import PetrikCruiser from "../assets/images/team_member_1.png";
import PaulMolive from "../assets/images/team_member_2.png";
import AliciaJelica from "../assets/images/team_member_3.png";
import KaneRichardson from "../assets/images/team_member_4.png";
import fb from "../assets/images/facebook_cion.svg";
import linkdin from "../assets/images/in.svg";
import twitter from "../assets/images/twit_icon.svg";
import TitleMain from "./TitleMain";

export default function OurTeam() {
  const members = [
    { imgSrc: PaulMolive, memberName: "Paul Molive", position: "CEO of Golden Glory" },
    { imgSrc: PetrikCruiser, memberName: "Petrik Cruiser", position: "Co Founder of Golden Glory" },
    { imgSrc: KaneRichardson, memberName: "Kane Richardson", position: "Manager" },
    { imgSrc: AliciaJelica, memberName: "Alicia Jelica", position: "Employee" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <div className="container">
        <TitleMain mainTitle="meet golden glory team" subTitle="our team" />
        <div className="team-carousel">
          <Slider {...settings}>
            {members.map((member, i) => (
              <div className="team-member" key={i}>
                <div className="member-img">
                  <img src={member.imgSrc} alt="Team Member" />
                </div>
                <h2>{member.memberName}</h2>
                <h3>{member.position}</h3>
                <ul className="team-socialmedia">
                  <li>
                    <a href="#">
                      <img src={fb} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={twitter} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={linkdin} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-bottom: 40px;
  text-align: center;
  .team-carousel {
    .slick-next {
      right: -15px;
      :before {
        color: var(--golden-color);
      }
    }
    .slick-prev {
      left: -15px;
      :before {
        color: var(--golden-color);
      }
    }
    .slick-list {
      padding-block: 20px;
      .slick-slide {
        padding-inline: 20px;
        .team-member {
          position: relative;
          text-align: center;
          padding: 50px;
          box-shadow: 0 0 15px hsl(0, 0%, 0%, 0.2);
          .member-img {
            padding-bottom: 30px;
            img {
              width: 170px;
              object-fit: cover;
              display: inherit;
              margin: 0px auto;
              border: 2px solid var(--white-color);
              border-radius: 50%;
            }
          }
          h2 {
            font-size: 24px;
            font-weight: 500;
            line-height: 28px;
            padding-bottom: 10px;
          }
          h3 {
            font-size: 16px;
            line-height: 22px;
            padding-bottom: 30px;
            color: var(--golden-color);
          }
          .team-socialmedia {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            img {
              width: 34px;
            }
          }
          ::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 130px;
            background-color: #ffeedf;
            z-index: -1;
            top: 0;
            left: 0;
          }
        }
      }
    }
  }
  @media (min-width: 0px) and (max-width: 575px) {
    padding-bottom: 20px;
    .team-carousel {
      .slick-list {
        .slick-slide {
          padding-inline: 12px;
          .team-member {
            padding: 30px;
            ::before {
              height: 116px;
            }
            .member-img {
              padding-bottom: 20px;
              img {
                width: 150px;
              }
            }
            h2 {
              line-height: 24px;
              padding-bottom: 8px;
            }
            h3 {
              font-size: 14px;
              line-height: 18px;
              padding-bottom: 20px;
            }
            .team-socialmedia {
              gap: 10px;
              img {
                width: 24px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    padding-bottom: 0px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding-bottom: 0px;
    .team-carousel {
      .slick-list {
        .slick-slide {
          padding-inline: 12px;
          .team-member {
            padding: 40px 30px;
          }
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    .team-carousel .slick-list .slick-slide {
      padding-inline: 15px;
    }
  }
`;
