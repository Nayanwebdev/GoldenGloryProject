import React from "react";
import styled from "styled-components";
import instaIcon from "../assets/images/instagram.svg";
import tweetIcon from "../assets/images/footer_tweet.svg";
import dribleIcon from "../assets/images/drible_icon.svg";
import fbIcon from "../assets/images/fb_footer.svg";
import Logo from "../assets/images/logo_icon.png";

export default function Footer() {
  const socials = [instaIcon, tweetIcon, dribleIcon, fbIcon];
  const services = ["about us", "contact us", "pages"];
  const collections = ["wedding", "summer", "engagement"];
  const infos = ["FAQ", "privacy policy", "terms & condition"];

  return (
    <Wrapper>
      <div className="footer-top-hp">
        <div className="container">
          <div className="footer-top-in-hp">
            <div className="footer-about-hp">
              <div className="logo-hp">
                <div className="nav-brand-ggp">
                  <img src={Logo} alt="logo" />
                  <h2>golden glory</h2>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <ul className="social-media">
                {socials.map((icon, index) => (
                  <li>
                    <a href="#" key={index}>
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
                {services.map((link,id) => (
                  <li>
                    <a href="#" key={id}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-menu-hp">
              <div className="title-hp">
                <h2>collection</h2>
              </div>
              <ul>
                {collections.map((link,id) => (
                  <li>
                    <a href="#" key={id}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-menu-hp">
              <div className="title-hp">
                <h2>more info</h2>
              </div>
              <ul>
                {infos.map((link,id) => (
                  <li>
                    <a href="#" key={id}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom-hp">
          <div className="container">
            <div className="footer-bottom-in-hp"></div>
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
          gap: 20px;
          li {
            a {
              width: 44px;
              height: 44px;
              border: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50px;
              background: var(--bg-color);
            }
          }
        }
      }
      .footer-menu-hp {
        width: 20%;
        padding-top: 50px;
        padding-left: 50px;
        /* text-align: center; */
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
            /* text-align: left; */
            padding-bottom: 15px;
            a {
              font-size: 18px;
              line-height: 24px;
              display: inline-block;
              color: var(--text-color);
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
  }
  @media (min-width: 768px) and (max-width: 991px) {
  }
  @media (min-width: 992px) and (max-width: 1199px) {
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
  }
`;
