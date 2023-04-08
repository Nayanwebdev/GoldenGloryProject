import { NavLink } from "react-router-dom";
import TitleMain from "../components/TitleMain";
import styled from "styled-components";
import mewsLetterImg from "../assets/images/newsletter_img.webp";
import earingImg from "../assets/images/earring_img_2.webp";

export default function NewsLetter() {
  return (
    <Wrapper>
      <div className="newsletter-block-main-hp">
        <div className="newsletter-block-in-hp">
          <div className="left-block-hp">
            <div className="left-block-content-hp">
              <TitleMain mainTitle="Get 20% Discount On Your First Order!" subTitle="newsletter" />
              <form action="#">
                <input type="email" name="email" placeholder="Email Address" />
                <button type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26.469" height="12.821" viewBox="0 0 26.469 12.821">
                    <path id="Path_68" data-name="Path 68" d="M1.034,137.377h21.9l-3.627-3.61a1.034,1.034,0,0,1,1.459-1.466l5.4,5.377h0a1.035,1.035,0,0,1,0,1.464h0l-5.4,5.377a1.034,1.034,0,0,1-1.459-1.466l3.627-3.61H1.034a1.034,1.034,0,1,1,0-2.068Z" transform="translate(0 -132)" fill="#6e441e" />
                  </svg>
                </button>
              </form>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
          </div>
          <div className="right-block-hp">
            <div className="right-block-img-hp">
              <img src={mewsLetterImg} alt="newsletter img" loading="lazy"/>
              <div className="right-block-title-hp">
                <TitleMain mainTitle="Aqua RoseGold" subTitle="Summer Collection" />
              </div>
              <div className="earing-img-hp">
                <img src={earingImg} alt="earingImg" loading="lazy"/>
              </div>
              <div className="earing-detail-hp">
                <h3>earrings</h3>
                <h2>leaf daimonds</h2>
                <h4 className="price-hp">-$599.00</h4>
                <NavLink className="btn-main-hp dark-btn-hp" to="/collection" role="button" exact="true">
                  buy now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .newsletter-block-main-hp {
    .newsletter-block-in-hp {
      display: flex;
      align-items: center;
      justify-content: center;
      .left-block-hp {
        max-width: 778px;
        padding: 144px 112px;
        text-align: center;
        background: var(--bg-color);
        .left-block-content-hp {
          h2 {
            max-width: 416px;
            margin: 0 auto;
          }
          form {
            max-width: 550px;
            height: 60px;
            position: relative;
            margin-block: 10px 35px;
            input {
              line-height: 60px;
              width: 100%;
              background: var(--white-color);
              border: 0px;
              outline: none;
              font-size: 16px;
              color: var(--golden-color);
              padding-inline: 28px 56px;
              border-radius: 40px;
              ::placeholder {
                color: var(--golden-color);
                font-size: 16px;
              }
            }
            button {
              position: absolute;
              right: 28px;
              background: no-repeat;
              border: none;
              line-height: 60px;
              color: var(--text-color);
            }
          }
          p {
            font-size: 18px;
            line-height: 26px;
            max-width: 496px;
            margin-inline: auto;
            color: var(--black-color);
          }
        }
      }
      .right-block-hp {
        max-width: 1142px;
        .right-block-img-hp {
          width: auto;
          height: 960px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          .right-block-title-hp {
            position: absolute;
            top: 45px;
            left: 45px;
            h4 {
              color: var(--white-color);
            }
            h2 {
              color: var(--white-color);
            }
          }
          .earing-img-hp {
            position: absolute;
            bottom: 283px;
            left: 30px;
            img {
              height: 100%;
              width: 100%;
            }
          }
          .earing-detail-hp {
            position: absolute;
            bottom: 60px;
            left: 63px;
            h3 {
              font-size: 18px;
              line-height: 22px;
              font-weight: 500;
              text-transform: uppercase;
              color: var(--white-color);
              padding-bottom: 5px;
            }
            h2 {
              font-size: 30px;
              line-height: 36px;
              font-weight: 400;
              color: var(--white-color);
              padding-bottom: 10px;
              text-transform: capitalize;
            }
            h4 {
              font-size: 20px;
              line-height: 26px;
              font-weight: 500;
              color: var(--white-color);
              padding-bottom: 15px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 0px) and (max-width: 575px) {
    .newsletter-block-main-hp {
      .newsletter-block-in-hp {
        flex-direction: column-reverse;
        .left-block-hp {
          width: 100%;
          padding: 30px 15px;
          .left-block-content-hp {
            form {
              width: 90%;
              margin-inline: auto;
              height: 50px;
              position: relative;
              margin-block: 5px 20px;
              input {
                line-height: 46px;
                font-size: 14px;
                padding-inline: 28px 40px;
                border-radius: 40px;
                ::placeholder {
                  font-size: 14px;
                }
              }
              button {
                right: 20px;
                line-height: 46px;
                svg {
                  width: 20px;
                }
              }
            }
            p {
              width: 100%;
              font-size: 14px;
              line-height: 20px;
            }
            h4 {
              font-size: 14px;
              line-height: 20px;
            }
            h2 {
              font-size: 28px;
              line-height: 34px;
            }
          }
        }
        .right-block-hp {
          width: 100%;
          .right-block-img-hp {
            height: 360px;
            img {
              object-fit: cover;
            }
            .right-block-title-hp {
              top: 25px;
              left: 10px;
              h2 {
                font-size: 14px;
                line-height: 18px;
              }
              h4 {
                font-size: 10px;
                line-height: 12px;
              }
            }
            .earing-img-hp {
              bottom: 130px;
              left: 10px;
              img {
                height: 80px;
                width: auto;
              }
            }
            .earing-detail-hp {
              bottom: 10px;
              left: 18px;
              h3 {
                font-size: 10px;
                line-height: 14px;
                padding-bottom: 5px;
              }
              h2 {
                font-size: 20px;
                line-height: 22px;
                padding-bottom: 5px;
              }
              h4 {
                font-size: 14px;
                line-height: 16px;
                padding-bottom: 10px;
              }
              .btn-main-hp {
                width: 80px;
                line-height: 36px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .newsletter-block-main-hp {
      .newsletter-block-in-hp {
        flex-direction: column-reverse;
        .left-block-hp {
          width: 100%;
          padding: 40px 15px;
          .left-block-content-hp {
            form {
              width: 440px;
              margin-inline: auto;
              height: 50px;
              position: relative;
              margin-block: 5px 25px;
              input {
                line-height: 50px;
                font-size: 16px;
                padding-inline: 28px 50px;
                border-radius: 40px;
              }
              button {
                right: 20px;
                line-height: 50px;
                svg {
                  width: 20px;
                }
              }
            }
            p {
              font-size: 16px;
              line-height: 20px;
              width: 396px;
            }
            h2 {
              max-width: 400px;
            }
          }
        }
        .right-block-hp {
          width: 100%;
          .right-block-img-hp {
            height: 380px;
            img {
              object-fit: cover;
            }
            .right-block-title-hp {
              top: 25px;
              left: 10px;
              h2 {
                font-size: 14px;
                line-height: 18px;
              }
              h4 {
                font-size: 10px;
                line-height: 12px;
              }
            }
            .earing-img-hp {
              bottom: 130px;
              left: 10px;
              img {
                height: 80px;
                width: auto;
              }
            }
            .earing-detail-hp {
              bottom: 10px;
              left: 18px;
              h3 {
                font-size: 10px;
                line-height: 14px;
                padding-bottom: 5px;
              }
              h2 {
                font-size: 20px;
                line-height: 22px;
                padding-bottom: 5px;
              }
              h4 {
                font-size: 14px;
                line-height: 16px;
                padding-bottom: 10px;
              }
              .btn-main-hp {
                width: 96px;
                line-height: 36px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .newsletter-block-main-hp {
      .newsletter-block-in-hp {
        flex-direction: column-reverse;
        .left-block-hp {
          width: 100%;
          padding: 60px 15px;
          .left-block-content-hp {
            form {
              width: 440px;
              margin-inline: auto;
              height: 55px;
              position: relative;
              margin-block: 5px 40px;
              input {
                line-height: 55px;
                font-size: 16px;
                padding-inline: 28px 50px;
                border-radius: 40px;
              }
              button {
                right: 20px;
                line-height: 55px;
              }
            }
            p {
              font-size: 16px;
              line-height: 22px;
              width: 396px;
            }
          }
        }
        .right-block-hp {
          width: 100%;
          .right-block-img-hp {
            height: 640px;
            img {
              object-fit: cover;
            }
            .right-block-title-hp {
              top: 30px;
              left: 15px;
              h2 {
                font-size: 26px;
                line-height: 26px;
              }
              h4 {
                font-size: 14px;
                line-height: 18px;
              }
            }
            .earing-img-hp {
              bottom: 180px;
              left: 10px;
              img {
                height: 140px;
                width: auto;
              }
            }
            .earing-detail-hp {
              bottom: 30px;
              left: 25px;
              h3 {
                font-size: 14px;
                line-height: 18px;
                padding-bottom: 5px;
              }
              h2 {
                font-size: 25px;
                line-height: 28px;
              }
              h4 {
                font-size: 14px;
                line-height: 16px;
              }
              .btn-main-hp {
                width: 100px;
                line-height: 38px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .newsletter-block-main-hp {
      .newsletter-block-in-hp {
        .left-block-hp {
          max-width: 420px;
          padding: 60px 20px;
          .left-block-content-hp {
            h2 {
              font-size: 34px;
              line-height: 42px;
            }
            p {
              font-size: 16px;
              line-height: 22px;
            }
          }
        }
        .right-block-hp {
          .right-block-img-hp {
            height: 640px;
            img {
              object-fit: cover;
            }
            .right-block-title-hp {
              top: 30px;
              left: 15px;
              h2 {
                font-size: 26px;
                line-height: 26px;
              }
              h4 {
                font-size: 14px;
                line-height: 18px;
              }
            }
            .earing-img-hp {
              bottom: 180px;
              left: 10px;
              img {
                height: 140px;
                width: auto;
              }
            }
            .earing-detail-hp {
              bottom: 30px;
              left: 25px;
              h3 {
                font-size: 14px;
                line-height: 18px;
                padding-bottom: 5px;
              }
              h2 {
                font-size: 25px;
                line-height: 28px;
              }
              h4 {
                font-size: 14px;
                line-height: 16px;
              }
              .btn-main-hp {
                width: 100px;
                line-height: 38px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    .newsletter-block-main-hp {
      .newsletter-block-in-hp {
        .left-block-hp {
          max-width: 520px;
          padding: 144px 42px;
          width: 100%;
        }
        .right-block-hp {
          .right-block-img-hp {
            height: 830px;
            .right-block-title-hp {
              left: 30px;
              h4 {
                font-size: 18px;
                padding-bottom: 5px;
              }
              .kIsRvQ h2 {
                font-size: 40px;
              }
            }
            .earing-img-hp {
              left: 0px;
            }
            .earing-detail-hp {
              left: 35px;
            }
          }
        }
      }
    }
  }
`;
