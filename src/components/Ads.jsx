import styled from "styled-components";
import leftads from "../assets/images/left_ads_card.webp";
import rightads from "../assets/images/right_ads_card.webp";

export default function Ads() {
  return (
    <Wrapper>
      <div className="ads-block-main-hp">
        <div className="container">
          <div className="ads-block-in-hp">
            <div className="left-ads-block-hp">
              <div className="left-box-hp">
                <img src={leftads} alt="leftads" loading="lazy" />
                <div className="ads-content-hp">
                  <h2>Earrings</h2>
                  <h4>Find The Right Band</h4>
                </div>
              </div>
            </div>
            <div className="right-ads-block-hp">
              <div className="right-box-hp">
                <img src={rightads} alt="rightads" loading="lazy" />
                <div className="ads-content-hp">
                  <h2>Wedding</h2>
                  <h4>Shop Our New Arrivals</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-bottom: 100px;
  .ads-block-main-hp {
    .ads-block-in-hp {
      display: flex;
      justify-content: space-between;
      .left-ads-block-hp {
        .left-box-hp {
          position: relative;
          width: 608px;
          height: 474px;
          text-align: end;
          img {
            width: 470px;
            height: 100%;
          }
          .ads-content-hp {
            position: absolute;
            left: 35px;
            bottom: 25px;
            text-align: start;
            h2 {
              font-size: 48px;
              line-height: 69px;
              font-weight: 400;
              color: var(--text-color);
            }
            h4 {
              font-size: 25px;
              line-height: 38px;
              font-weight: 400;
              text-transform: capitalize;
              color: var(--text-color);
            }
          }
          &::before {
            content: "";
            position: absolute;
            background: rgb(0 0 0 / 15%);
            width: 470px;
            height: 100%;
          }
        }
      }
      .right-ads-block-hp {
        .right-box-hp {
          position: relative;
          width: 570px;
          height: 474px;
          text-align: end;
          img {
            width: 470px;
            height: 100%;
          }
          .ads-content-hp {
            position: absolute;
            left: 0px;
            top: 25px;
            text-align: left;
            h2 {
              font-size: 48px;
              line-height: 69px;
              font-weight: 400;
              color: var(--text-color);
            }
            h4 {
              font-size: 25px;
              line-height: 38px;
              font-weight: 400;
              text-transform: capitalize;
              color: var(--text-color);
            }
          }
        }
      }
    }
  }
  @media (min-width: 0px) and (max-width: 575px) {
    padding-bottom: 40px;
    .ads-block-main-hp {
      .ads-block-in-hp {
        flex-direction: column;
        gap: 20px;
        .left-ads-block-hp {
          .left-box-hp {
            width: 100%;
            height: 320px;
            img {
              width: 100%;
              object-fit: cover;
            }
            .ads-content-hp {
              left: 10px;
              bottom: 10px;
              h2 {
                font-size: 30px;
                line-height: 36px;
                color: var(--white-color);
              }
              h4 {
                font-size: 16px;
                line-height: 22px;
                color: var(--white-color);
              }
            }
            &::before {
              width: 100%;
            }
          }
        }
        .right-ads-block-hp {
          .right-box-hp {
            width: 100%;
            height: 320px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .ads-content-hp {
              top: auto;
              left: 10px;
              bottom: 10px;
              h2 {
                font-size: 30px;
                line-height: 36px;
              }
              h4 {
                font-size: 16px;
                line-height: 22px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    padding: 60px 0px;
    .ads-block-main-hp {
      .ads-block-in-hp {
        flex-direction: column;
        gap: 20px;
        .left-ads-block-hp {
          .left-box-hp {
            width: 100%;
            height: 400px;
            img {
              width: 100%;
              object-fit: cover;
            }
            .ads-content-hp {
              left: 20px;
              bottom: 20px;
              h2 {
                font-size: 40px;
                line-height: 48px;
                color: var(--white-color);
              }
              h4 {
                font-size: 18px;
                line-height: 22px;
                color: var(--white-color);
              }
            }
            &::before {
              width: 100%;
            }
          }
        }
        .right-ads-block-hp {
          .right-box-hp {
            width: 100%;
            height: 400px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .ads-content-hp {
              top: auto;
              left: 20px;
              bottom: 20px;
              h2 {
                font-size: 40px;
                line-height: 48px;
              }
              h4 {
                font-size: 18px;
                line-height: 22px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding: 0px 0px 60px;
    .ads-block-main-hp {
      .ads-block-in-hp {
        gap: 15px;
        .left-ads-block-hp {
          width: 50%;
          .left-box-hp {
            width: 100%;
            height: 360px;
            img {
              width: 100%;
              object-fit: cover;
            }
            .ads-content-hp {
              left: 20px;
              bottom: 20px;
              h2 {
                font-size: 40px;
                line-height: 48px;
                color: var(--white-color);
              }
              h4 {
                font-size: 18px;
                line-height: 22px;
                color: var(--white-color);
              }
            }
            &::before {
              width: 100%;
            }
          }
        }
        .right-ads-block-hp {
          width: 50%;
          .right-box-hp {
            width: 100%;
            height: 360px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .ads-content-hp {
              top: auto;
              left: 20px;
              bottom: 20px;
              h2 {
                font-size: 40px;
                line-height: 48px;
              }
              h4 {
                font-size: 18px;
                line-height: 22px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    padding: 0px 0px 60px;
    .ads-block-main-hp {
      .ads-block-in-hp {
        gap: 30px;
        .left-ads-block-hp {
          width: 50%;
          .left-box-hp {
            width: 100%;
            height: 360px;
            img {
              width: 82%;
              object-fit: cover;
            }
            .ads-content-hp {
              left: 20px;
              bottom: 20px;
              h2 {
                font-size: 40px;
                line-height: 48px;
              }
              h4 {
                font-size: 18px;
                line-height: 22px;
              }
            }
            &::before {
              width: 82%;
            }
          }
        }
        .right-ads-block-hp {
          width: 50%;
          .right-box-hp {
            width: 100%;
            height: 360px;
            img {
              width: 82%;
              height: 100%;
              object-fit: cover;
            }
            .ads-content-hp {
              bottom: 20px;
              h2 {
                font-size: 40px;
                line-height: 48px;
              }
              h4 {
                font-size: 18px;
                line-height: 22px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    padding: 0px 0px 60px;
    .ads-block-main-hp {
      .ads-block-in-hp {
        gap: 30px;
        .left-ads-block-hp {
          width: 50%;
          .left-box-hp {
            width: 100%;
            height: 360px;
            img {
              width: 88%;
              object-fit: cover;
            }
            .ads-content-hp {
              left: 0px;
              bottom: 20px;
              h2 {
                font-size: 40px;
                line-height: 48px;
              }
              h4 {
                font-size: 18px;
                line-height: 22px;
              }
            }
            &::before {
              width: 88%;
            }
          }
        }
        .right-ads-block-hp {
          width: 50%;
          .right-box-hp {
            width: 100%;
            height: 360px;
            img {
              width: 86%;
              height: 100%;
              object-fit: cover;
            }
            .ads-content-hp {
              bottom: 20px;
              h2 {
                font-size: 40px;
                line-height: 48px;
              }
              h4 {
                font-size: 18px;
                line-height: 22px;
              }
            }
          }
        }
      }
    }
  }
`;
