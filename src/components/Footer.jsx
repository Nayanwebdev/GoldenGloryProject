import React from "react";
import styled from "styled-components";
import instaIcon from "../assets/images/instagram.svg";
import tweetIcon from "../assets/images/footer_tweet.svg";
import dribleIcon from "../assets/images/drible_icon.svg";
import fbIcon from "../assets/images/fb_footer.svg";
import Logo from "../assets/images/logo_icon.png";
import paymentImg1 from "../assets/images/payment_method_1.webp";
import paymentImg2 from "../assets/images/payment_method_2.webp";
import paymentImg3 from "../assets/images/payment_method_3.webp";

export default function Footer() {
  const socials = [instaIcon, tweetIcon, dribleIcon, fbIcon];
  const services = ["about us", "contact us", "pages"];
  const collections = ["wedding", "summer", "engagement"];
  const infos = ["FAQ", "privacy policy", "terms & condition"];
  const payments = [paymentImg1, paymentImg2, paymentImg3];

  return (
    <Wrapper>
      <div className="footer-top-hp">
        <div className="container">
          <div className="footer-top-in-hp">
            <div className="footer-about-hp">
              <div className="logo-hp">
                <div className="nav-brand-ggp">
                  <img src={Logo} alt="logo" loading="lazy" />
                  <h2>golden glory</h2>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <ul className="social-media">
                {socials.map((icon, index) => (
                  <li key={index}>
                    <a href="#">
                      <img src={icon} alt="social-media" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-menu-hp">
              <div className="title-hp">
                <h2>socials</h2>
              </div>
              <ul>
                {services.map((link, id) => (
                  <li key={id}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-menu-hp">
              <div className="title-hp">
                <h2>collection</h2>
              </div>
              <ul>
                {collections.map((link, id) => (
                  <li key={id}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-menu-hp">
              <div className="title-hp">
                <h2>more info</h2>
              </div>
              <ul>
                {infos.map((link, id) => (
                  <li key={id}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-hp">
        <div className="container">
          <div className="footer-bottom-in-hp">
            <div className="copyright-hp">
              <p>© 2023 golden glory. All Right Reserved.</p>
            </div>
            <div className="payment-method-hp">
              <ul>
                {payments.map((pay, i) => (
                  <li key={i}>
                    <img src={pay} alt="pay-img" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .footer-top-hp {
    background: var(--bg-color);
    .footer-top-in-hp {
      display: flex;
      .footer-about-hp {
        width: 40%;
        padding: 50px 58px 32px;
        background-color: rgb(193, 143, 97, 0.16);
        .logo-hp {
          .nav-brand-ggp {
            max-width: 238px;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            margin-bottom: 30px;
            img {
              width: 58px;
              height: 58px;
            }
            h2 {
              font-size: 32px;
              font-family: "Sorts Mill Goudy", sans-serif;
              margin-left: 10px;
              color: var(--golden-color);
            }
          }
        }
        p {
          padding-bottom: 20px;
        }
        .social-media {
          display: flex;
          gap: 16px;
          li {
            a {
              width: 44px;
              height: 44px;
              border: 0;
              border: 1px solid transparent;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50px;
              background: var(--bg-color);
              img{
                height: 18px;
                width: auto;
              }
              &:hover {
                border-color: var(--text-color);
                transform: translateY(-2px);
              }
            }
          }
        }
      }
      .footer-menu-hp {
        width: 20%;
        padding-top: 50px;
        padding-left: 50px;
        .title-hp {
          h2 {
            font-size: 28px;
            line-height: 36px;
            color: var(--golden-color);
            padding-bottom: 40px;
          }
        }
        ul {
          li {
            padding-bottom: 15px;
            a {
              font-size: 18px;
              line-height: 24px;
              display: inline-block;
              color: var(--text-color);
              :hover {
                color: var(--golden-color);
                transform: translateY(-4px);
              }
            }
          }
        }
      }
    }
  }
  .footer-bottom-hp {
    background: var(--text-color);
    .footer-bottom-in-hp {
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-inline: 50px;
      .copyright-hp {
        p {
          font-size: 15px;
          line-height: 20px;
          color: var(--white-color);
        }
      }
      .payment-method-hp {
        ul {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          li {
            min-width: 66px;
            height: 35px;
            text-align: center;
            padding: 5px 10px;
            border-radius: 5px;
            background: rgb(255, 255, 255, 0.72);
            img {
              height: 21px;
              width: auto;
            }
          }
        }
      }
    }
  }
  @media (min-width: 0px) and (max-width: 575px) {
    .footer-top-hp {
      .footer-top-in-hp {
        padding-bottom: 20px;
        flex-wrap: wrap;
        .footer-about-hp {
          width: 100%;
          padding: 25px 18px 22px;
          .logo-hp {
            .nav-brand-ggp {
              max-width: auto;
              margin-bottom: 16px;
              img {
                width: 30px;
                height: 30px;
              }
              h2 {
                font-size: 20px;
                line-height: 22px;
                margin-left: 8px;
              }
            }
          }
          p {
            font-size: 16px;
            line-height: 20px;
            text-align: justify;
          }
          .social-media {
            gap: 10px;
            li {
              a {
                width: 35px;
                height: 35px;
                img {
                  height: 14px;
                }
              }
            }
          }
        }
        .footer-menu-hp {
          width: 50%;
          padding-top: 20px;
          padding-left: 20px;
          .title-hp {
            h2 {
              font-size: 25px;
              line-height: 28px;
              padding-bottom: 10px;
            }
          }
          ul {
            li {
              padding-bottom: 6px;
              a {
                font-size: 16px;
                line-height: 20px;
              }
            }
          }
        }
      }
    }
    .footer-bottom-hp {
      .footer-bottom-in-hp {
        height: 100%;
        flex-direction: column;
        gap: 10px;
        padding: 10px 0px;
        .copyright-hp {
          p {
            font-size: 14px;
          }
        }
        .payment-method-hp {
          ul {
            li {
              padding-inline: 8px;
              img {
                height: 18px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .footer-top-hp {
      .footer-top-in-hp {
        padding-bottom: 20px;
        flex-wrap: wrap;
        .footer-about-hp {
          width: 100%;
          padding: 25px 18px 22px;
          .logo-hp {
            .nav-brand-ggp {
              max-width: auto;
              margin-bottom: 16px;
              img {
                width: 30px;
                height: 30px;
              }
              h2 {
                font-size: 20px;
                line-height: 22px;
                margin-left: 8px;
              }
            }
          }
          p {
            font-size: 16px;
            line-height: 20px;
            text-align: justify;
          }
          .social-media {
            gap: 10px;
            li {
              a {
                width: 35px;
                height: 35px;
                img {
                  height: 14px;
                }
              }
            }
          }
        }
        .footer-menu-hp {
          width: 50%;
          padding-top: 20px;
          padding-left: 20px;
          .title-hp {
            h2 {
              font-size: 25px;
              line-height: 28px;
              padding-bottom: 10px;
            }
          }
          ul {
            li {
              padding-bottom: 6px;
              a {
                font-size: 16px;
                line-height: 20px;
              }
            }
          }
        }
      }
    }
    .footer-bottom-hp {
      .footer-bottom-in-hp {
        gap: 10px;
        padding: 0px;
        .copyright-hp {
          p {
            font-size: 14px;
          }
        }
        .payment-method-hp {
          ul {
            gap: 5px;
            li {
              min-width: 60px;
              img {
                height: 18px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .footer-top-hp {
      .footer-top-in-hp {
        .footer-about-hp {
          padding: 30px 25px;
          .logo-hp {
            .nav-brand-ggp {
              max-width: 220px;
              margin-bottom: 15px;
              img {
                width: 40px;
                height: 40px;
              }
              h2 {
                font-size: 26px;
              }
            }
          }
          p {
            font-size: 15px;
            line-height: 22px;
          }
          .social-media {
            li {
              a {
                width: 34px;
                height: 34px;
                img {
                  height: 15px;
                  width: 15px;
                }
              }
            }
          }
        }
        .footer-menu-hp {
          padding-top: 35px;
          padding-left: 18px;
          ul {
            li {
              padding-bottom: 10px;
              a {
                font-size: 17px;
                line-height: 20px;
              }
            }
          }
          .title-hp {
            h2 {
              font-size: 26px;
              line-height: 30px;
              padding-bottom: 30px;
            }
          }
        }
      }
    }
    .footer-bottom-hp {
      .footer-bottom-in-hp {
        padding-inline: 20px;
        .payment-method-hp {
          ul {
            gap: 10px;
          }
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .footer-top-hp {
      .footer-top-in-hp {
        .footer-about-hp {
          padding: 40px 40px 30px;
          .logo-hp {
            .nav-brand-ggp {
              margin-bottom: 20px;
              img {
                width: 50px;
                height: 50px;
              }
              h2 {
                font-size: 30px;
              }
            }
          }
        }
        .footer-menu-hp {
          padding-left: 26px;
          .title-hp {
            h2 {
              padding-bottom: 30px;
            }
          }
        }
      }
    }
    .footer-bottom-hp {
      .footer-bottom-in-hp {
        padding-inline: 40px 20px;
        .payment-method-hp {
          ul {
            gap: 10px;
          }
        }
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    .footer-top-hp {
      .footer-top-in-hp {
        .footer-about-hp {
          padding: 50px 50px 32px;
        }
        .footer-menu-hp {
          padding-top: 58px;
          padding-left: 40px;
        }
      }
    }
  }
`;
