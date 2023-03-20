import TitleMain from "../components/TitleMain";
import styled from "styled-components";
import mewsLetterImg from "../assets/images/newsletter_img.png";
import earingImg from "../assets/images/earring_img_2.png";
import Button from "./Button";

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
              <img src={mewsLetterImg} alt="newsletter img" />
              <div className="right-block-title-hp">
                <TitleMain mainTitle="Aqua RoseGold" subTitle="Summer Collection" />
              </div>
              <div className="earing-img-hp">
                <img src={earingImg} alt="earingImg" />
              </div>
              <div className="earing-detail-hp">
                <h3>earrings</h3>
                <h2>leaf daimonds</h2>
                <h4 className="price-hp">-$599.00</h4>
                <Button btn_text="buy now" class_name="dark-btn-hp" />
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
          padding: 40px 15px;
          .left-block-content-hp {
            form {
              width: 100%;
              height: 50px;
              position: relative;
              margin-block: 5px 25px;
              input {
                line-height: 55px;
                font-size: 16px;
                padding-inline: 28px 50px;
                border-radius: 40px;
              }
              button {
                right: 20px;
                line-height: 55px;
                svg {
                  width: 20px;
                }
              }
            }
            p {
              font-size: 16px;
              line-height: 20px;
              width: 100%;
            }
          }
        }
        .right-block-hp {
          width: 100%;
          .right-block-img-hp {
            height: 360px;
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
              width: 100%;
              height: 50px;
              position: relative;
              margin-block: 5px 25px;
              input {
                line-height: 55px;
                font-size: 16px;
                padding-inline: 28px 50px;
                border-radius: 40px;
              }
              button {
                right: 20px;
                line-height: 55px;
                svg {
                  width: 20px;
                }
              }
            }
            p {
              font-size: 16px;
              line-height: 20px;
              width: 100%;
            }
          }
        }
        .right-block-hp {
          width: 100%;
          .right-block-img-hp {
            height: 360px;
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
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
  }
  @media (min-width: 992px) and (max-width: 1199px) {
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
  }
`;
