import PageBanner from "../components/PageBanner";
import React from "react";
import styled from "styled-components";
import TitleMain from "../components/TitleMain";
import location from "../assets/images/location_icon.svg";
import phone from "../assets/images/phone_icon.svg";
import mail from "../assets/images/mail_icon.svg";
import instaIcon from "../assets/images/instagram.svg";
import tweetIcon from "../assets/images/footer_tweet.svg";
import dribleIcon from "../assets/images/drible_icon.svg";
import fbIcon from "../assets/images/fb_footer.svg";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";

export default function Contact() {
  const socials = [instaIcon, tweetIcon, dribleIcon, fbIcon];
  return (
    <Wrapper>
      <PageBanner pageTitle="contact us" pageLink="contact" />
      <div className="contact-block-cp">
        <div className="container">
          <TitleMain mainTitle="Let's Talk With Us" subTitle="Contact us" />
          <div className="contact-block-in-cp">
            <div className="left-block-cp">
              <div className="contact-card-cp">
                <div className="left-icon-cp">
                  <img src={location} alt="contact_icon" />
                </div>
                <div className="left-content-cp">
                  <h2>address</h2>
                  <p>410, Nilkanth Plaza, KiranChowk, New York 12401, United States.</p>
                  <ul className="social-media-cp">
                    {socials.map((icon, index) => (
                      <li key={index}>
                        <a href="#">
                          <img src={icon} alt="social-media" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="contact-card-cp">
                <div className="left-icon-cp">
                  <img src={phone} alt="contact_icon" />
                </div>
                <div className="left-content-cp">
                  <h2>phone no.</h2>
                  <p>+1-541-754-3010</p>
                  <p>+1-541-754-3012</p>
                </div>
              </div>
              <div className="contact-card-cp">
                <div className="left-icon-cp">
                  <img src={mail} alt="contact_icon" />
                </div>
                <div className="left-content-cp">
                  <h2>Email</h2>
                  <p>goldenglorey@gmail.com</p>
                  <p>Info@goldenglorey.com</p>
                </div>
              </div>
            </div>
            <div className="right-block-cp">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Map />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .contact-block-cp {
    .contact-block-in-cp {
      padding-block: 30px 120px;
      display: flex;
      gap: 30px;
      .left-block-cp {
        width: 42%;
        padding-right: 55px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .contact-card-cp {
          display: flex;
          gap: 40px;
          border-radius: 20px;
          padding: 38px 70px;
          box-shadow: 0 0 15px rgb(139, 139, 139, 0.3);
          .left-icon-cp {
            img {
              max-width: 54px;
              object-fit: cover;
            }
          }
          .left-content-cp {
            h2 {
              font-size: 40px;
              line-height: 56px;
              text-transform: capitalize;
              padding-bottom: 10px;
            }
            p {
              color: var(--text-color);
              padding-bottom: 10px;
              :last-child {
                padding-bottom: 0px;
              }
            }
            .social-media-cp {
              display: flex;
              gap: 16px;
              padding-top: 10px;
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
                  :hover {
                    border-color: var(--text-color);
                  }
                }
              }
            }
          }
        }
      }
      .right-block-cp {
        width: 58%;
        padding-left: 55px;
      }
    }
  }
  @media (min-width: 0px) and (max-width: 575px) {
    .contact-block-cp {
      .contact-block-in-cp {
        padding-block: 20px 40px;
        flex-wrap: wrap;
        .left-block-cp {
          width: 100%;
          padding: 0px;
          gap: 20px;
          .contact-card-cp {
            gap: 30px;
            padding: 30px 20px;
            border-radius: 8px;
            .left-icon-cp {
              img {
                max-width: 30px;
                object-fit: contain;
              }
            }
            .left-content-cp {
              h2 {
                font-size: 24px;
                line-height: 26px;
              }
              p {
                padding-bottom: 6px;
              }
              .social-media-cp {
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
          }
        }
        .right-block-cp {
          width: 100%;
          padding: 0px;
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .contact-block-cp {
      .contact-block-in-cp {
        padding-block: 20px 40px;
        flex-wrap: wrap;
        .left-block-cp {
          width: 100%;
          padding: 0px;
          gap: 20px;
          .contact-card-cp {
            gap: 30px;
            padding: 30px 20px;
            border-radius: 8px;
            .left-icon-cp {
              img {
                max-width: 30px;
                object-fit: contain;
              }
            }
            .left-content-cp {
              h2 {
                font-size: 24px;
                line-height: 26px;
              }
              p {
                padding-bottom: 6px;
              }
              .social-media-cp {
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
          }
        }
        .right-block-cp {
          width: 100%;
          padding: 0px;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .contact-block-cp {
      .contact-block-in-cp {
        padding-block: 20px 60px;
        gap: 20px;
        .left-block-cp {
          padding: 0px;
          .contact-card-cp {
            gap: 20px;
            padding: 30px 20px;
            border-radius: 8px;
            .left-icon-cp {
              img {
                max-width: 30px;
                object-fit: contain;
              }
            }
            .left-content-cp {
              h2 {
                font-size: 24px;
                line-height: 26px;
              }
              p {
                padding-bottom: 6px;
              }
              .social-media-cp {
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
          }
        }
        .right-block-cp {
          padding: 0px;
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .contact-block-cp {
      .contact-block-in-cp {
        padding-block: 20px 60px;
        gap: 20px;
        .left-block-cp {
          padding: 0px;
          .contact-card-cp {
            gap: 20px;
            padding: 30px 20px;
            border-radius: 12px;
            .left-icon-cp {
              img {
                max-width: 30px;
                object-fit: contain;
              }
            }
            .left-content-cp {
              h2 {
                font-size: 24px;
                line-height: 26px;
              }
              p {
                padding-bottom: 6px;
              }
              .social-media-cp {
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
          }
        }
        .right-block-cp {
          padding: 0px;
        }
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    .contact-block-cp {
      .contact-block-in-cp {
        .left-block-cp {
          padding-right: 25px;
          .contact-card-cp {
            padding: 34px 40px;
            border-radius: 12px;
            .left-icon-cp {
              img {
                max-width: 40px;
              }
            }
          }
        }
        .right-block-cp {
          padding-left: 25px;
        }
      }
    }
  }
`;
