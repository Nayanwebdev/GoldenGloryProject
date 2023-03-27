import React from "react";
import styled from "styled-components";

export default function TestimonialCard({ cardImg, desc, person, city }) {
  return (
    <Wrapper>
      <div className="testimonial-card-main-tcc">
        <div className="img-block">
          <img src={cardImg} alt="card-img" />
        </div>
        <div className="content-block">
          <div className="quet-img">
            <svg xmlns="http://www.w3.org/2000/svg" width="60.817" height="52.54" viewBox="0 0 60.817 52.54">
              <g id="quotes" transform="translate(0 -34.571)">
                <g id="Group_1141" data-name="Group 1141" transform="translate(0 34.571)">
                  <g id="Group_1140" data-name="Group 1140" transform="translate(0 0)">
                    <path id="Path_1138" data-name="Path 1138" d="M.013,72.633A14.516,14.516,0,1,0,9.8,58.948C13.059,40.263,27.63,28.213,14.123,38.13-.854,49.127,0,72.191.014,72.614.014,72.62.013,72.626.013,72.633Z" transform="translate(0 -34.571)" fill="#6e441e" />
                    <path id="Path_1139" data-name="Path 1139" d="M266.074,72.633a14.516,14.516,0,1,0,9.788-13.686c3.258-18.685,17.829-30.735,4.322-20.818-14.977,11-14.126,34.061-14.109,34.484C266.074,72.62,266.074,72.626,266.074,72.633Z" transform="translate(-234.211 -34.571)" fill="#6e441e" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <p>{desc}</p>
          <h3>{person}</h3>
          <h5>{city}</h5>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .testimonial-card-main-tcc {
    display: flex;
    gap: 50px;
    border: 1px solid var(--text-color);
    padding: 56px 56px 56px 0px;
    align-items: center;
    border-top-left-radius: 170px;
    .img-block {
      img {
        width: 330px;
      }
    }
    .content-block {
      .quet-img {
        padding-bottom: 22px;
        svg {
          display: inline-block;
          width: 60px;
        }
      }
      p {
        font-size: 18px;
        line-height: 27px;
        color: var(--black-color);
        padding-bottom: 20px;
      }
      h3 {
        font-size: 25px;
        line-height: 30px;
        font-weight: 500;
        color: var(--text-color);
        padding-bottom: 4px;
        text-transform: capitalize;
      }
      h5 {
        font-size: 16px;
        line-height: 20px;
        color: var(--golden-color);
        text-transform: uppercase;
      }
    }
  }

  @media (min-width: 0px) and (max-width: 575px) {
    .testimonial-card-main-tcc {
      flex-direction: column;
      gap: 10px;
      padding: 15px 20px;
      border-top-left-radius: 60px;
      border-top-right-radius: 60px;
      .img-block {
        img {
          width: 60%;
          margin-inline: auto;
        }
      }
      .content-block {
        .quet-img {
          padding-bottom: 5px;
          svg {
            width: 30px;
            height: 30px;
          }
        }
        p {
          font-size: 16px;
          line-height: 20px;
          text-align: justify;
          padding-bottom: 10px;
        }
        h3 {
          font-size: 20px;
          line-height: 24px;
        }
        h5 {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .testimonial-card-main-tcc {
      flex-direction: column;
      gap: 10px;
      padding: 15px 25px;
      border-top-left-radius: 100px;
      border-top-right-radius: 100px;
      .img-block {
        img {
          width: 80%;
          margin-inline: auto;
        }
      }
      .content-block {
        .quet-img {
          padding-bottom: 10px;
          svg {
            width: 30px;
            height: 30px;
          }
        }
        p {
          font-size: 16px;
          line-height: 20px;
          text-align: justify;
          padding-bottom: 10px;
        }
        h3 {
          font-size: 22px;
          line-height: 26px;
        }
        h5 {
          font-size: 15px;
          line-height: 20px;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .testimonial-card-main-tcc {
      flex-direction: column;
      gap: 10px;
      padding: 20px 25px;
      border-top-left-radius: 110px;
      .img-block {
        img {
          width: 70%;
          margin-inline: auto;
        }
      }
      .content-block {
        .quet-img {
          padding-bottom: 10px;
          svg {
            width: 30px;
            height: 30px;
          }
        }
        p {
          font-size: 16px;
          line-height: 20px;
          text-align: justify;
          padding-bottom: 10px;
        }
        h3 {
          font-size: 22px;
          line-height: 26px;
        }
        h5 {
          font-size: 15px;
          line-height: 20px;
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .testimonial-card-main-tcc {
      gap: 16px;
      padding: 40px 25px;
      padding-left: 0px;
      border-top-left-radius: 100px;
      .img-block {
        img {
          width: 230px;
        }
      }
      .content-block {
        .quet-img {
          padding-bottom: 10px;
          svg {
            width: 40px;
            height: 40px;
          }
        }
        p {
          line-height: 24px;
          padding-bottom: 10px;
        }
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    .testimonial-card-main-tcc {
      gap: 40px;
      padding-right: 40px;
      border-top-left-radius: 150px;
      .img-block {
        img {
          width: 300px;
        }
      }
    }
  }
`;
