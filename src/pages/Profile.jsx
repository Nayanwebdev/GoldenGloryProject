import React from "react";
import styled from "styled-components";
import avtarImg from "../assets/images/profile_avtar.svg";
import myOrder from "../assets/images/myorder.svg";
import myAvtar from "../assets/images/myAvtar.svg";
import myPayment from "../assets/images/payment.svg";
import myStuff from "../assets/images/stuff.svg";
import logout from "../assets/images/logOut.svg";
import { Link, useParams } from "react-router-dom";
import ProfileInfo from "../components/ProfileInfoBlock";
import AllOrder from "../components/AllOrderBlock";
import PanInfo from "../components/PanInfoBlock";
import ManageAddress from "../components/ManageAddressBlock";
import GiftCard from "../components/GiftCardBlock";
import MyCoupon from "../components/MyCouponBlock";
import SaveCard from "../components/SaveCardBlock";
import SaveUpi from "../components/SaveUpiBlock";
import ReviewWrite from "../components/ReviewWriteBlock";
import Notification from "../components/NotificationBlock";
import Wishlist from "../components/MyWishlistBlock";
import bottomBg from "../assets/images/info_footer_bg.webp";

export default function Profile() {
  const accordionData = [
    {
      id: 1,
      title: "my orders",
      src: myOrder,
      links: [{ linkName: "all order", link: "allorders" }],
    },
    {
      id: 2,
      title: "account settings",
      src: myAvtar,
      links: [
        { linkName: "profile info", link: "myprofile" },
        { linkName: "manage address", link: "manageaddress" },
        { linkName: "PAN card information", link: "paninfo" },
      ],
    },
    {
      id: 3,
      title: "payments",
      src: myPayment,
      links: [
        { linkName: "gift cards", link: "giftcard" },
        { linkName: "saved UPI", link: "savedupi" },
        { linkName: "saved cards", link: "savecard" },
      ],
    },
    {
      id: 4,
      title: "my stuff",
      src: myStuff,
      links: [
        { linkName: "my coupons", link: "mycoupons" },
        { linkName: "my reviews & ratings", link: "reviewrating" },
        { linkName: "all notifications", link: "notification" },
        { linkName: "my wishlist", link: "mywishlist" },
      ],
    },
    {
      id: 5,
      title: "Action",
      src: logout,
      links: [{ linkName: "logout", link: "logoutUser" }],
    },
  ];

  const { tab } = useParams();

  return (
    <Wrapper>
      <div className="profile-page-block-main-pp">
        <div className="container">
          <div className="profile-page-block-in-pp">
            <div className="left-profile-menu-pp">
              <div className="person-info-pp">
                <div className="person-info-in-pp">
                  <div className="avatar">
                    <img src={avtarImg} alt="avatar" loading="lazy"/>
                  </div>
                  <div className="profile-info">
                    <div className="hello">
                      <h4>Hello,</h4>
                    </div>
                    <div className="name">
                      <h3>nayan unjiya</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="account-details-pp">
                <div className="acc-detail-list">
                  {accordionData.map((data, id) => (
                    <div className="detail-box" key={id}>
                      <div className="title">
                        <img src={data.src} alt="icon" loading="lazy"/>
                        <h2>{data.title}</h2>
                      </div>
                      <div className="link-list">
                        <ul className="account-links">
                          {data.links.map((link, i) => (
                            <li key={i}>
                              <Link to={`/profile/${link.link}`}>{link.linkName}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="right-profile-data-pp">
              <div className="personal-info-block-pp">
                <div className="presonal-info-in">
                  {tab === undefined && <ProfileInfo />}
                  {tab === "myprofile" && <ProfileInfo />}
                  {tab === "allorders" && <AllOrder />}
                  {tab === "manageaddress" && <ManageAddress />}
                  {tab === "paninfo" && <PanInfo />}
                  {tab === "giftcard" && <GiftCard />}
                  {tab === "savedupi" && <SaveUpi />}
                  {tab === "savecard" && <SaveCard />}
                  {tab === "mycoupons" && <MyCoupon />}
                  {tab === "reviewrating" && <ReviewWrite />}
                  {tab === "notification" && <Notification />}
                  {tab === "mywishlist" && <Wishlist />}
                </div>
              </div>
              <div className="bottom-img-pp">
                <img src={bottomBg} alt="" loading="lazy"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .profile-page-block-main-pp {
    background-color: aliceblue;
    padding-block: 50px;
    .profile-page-block-in-pp {
      display: flex;
      gap: 20px;
      .left-profile-menu-pp {
        width: 30%;
        .person-info-pp {
          padding: 20px;
          margin-bottom: 20px;
          background-color: #fff;
          .person-info-in-pp {
            display: flex;
            gap: 10px;
            .avatar {
              width: 50px;
              img {
                width: 100%;
              }
            }
            .profile-info {
              .hello {
                h4 {
                  font-size: 14px;
                  color: var(--golden-color);
                  line-height: 24px;
                }
              }
              .name {
                h3 {
                  font-size: 20px;
                  line-height: 24px;
                  font-weight: 500;
                  color: var(--text-color);
                  text-transform: capitalize;
                }
              }
            }
          }
        }
        .account-details-pp {
          .acc-detail-list {
            background-color: #fff;
            border-radius: 2px;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
            .detail-box {
              border-bottom: 1px solid var(--bg-color);
              .title {
                padding: 20px 12px 10px 24px;
                display: flex;
                align-items: flex-start;
                gap: 15px;
                img {
                }
                h2 {
                  font-size: 20px;
                  font-weight: 600;
                  letter-spacing: 0.2px;
                  text-transform: uppercase;
                }
              }
              .link-list {
                padding: 0px;
                ul {
                  li {
                    a {
                      font-size: 16px;
                      line-height: 45px;
                      display: block;
                      padding-inline: 60px 20px;
                      color: var(--golden-color);
                      :hover {
                        color: var(--text-color);
                        background-color: var(--bg-color);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .right-profile-data-pp {
        width: 70%;
        height: 100%;
        background-color: #fff;
        .personal-info-block-pp {
          padding: 30px;
        }
        .bottom-img-pp {
          /* bottom: 0px; */
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .accordion-item {
    border: none;
    border-bottom: 1px solid #f0f0f0;
  }
  .accordion-button:focus {
    box-shadow: none;
  }
  .accordion-button::after {
    transform: rotate(-90deg);
  }
  .accordion-button:not(.collapsed)::after {
    transform: rotate(0deg);
  }

  @media (min-width: 0px) and (max-width: 575px) {
    .profile-page-block-main-pp {
      padding-block: 30px;
      .profile-page-block-in-pp {
        gap: 10px;
        .left-profile-menu-pp {
          width: 40%;
          .person-info-pp {
            padding: 10px;
            margin-bottom: 12px;
            .person-info-in-pp {
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 5px;
              .avatar {
                img {
                  width: 30px;
                }
              }
              .profile-info {
                .hello {
                  h4 {
                    font-size: 12px;
                    line-height: 18px;
                  }
                }
                .name {
                  h3 {
                    font-size: 16px;
                  }
                }
              }
            }
          }
          .account-details-pp {
            .acc-detail-list {
              .detail-box {
                .title {
                  padding: 15px 10px 10px;
                  gap: 5px;
                  h2 {
                    font-size: 12px;
                  }
                  img {
                    width: 15px;
                  }
                }
                .link-list {
                  ul {
                    li {
                      margin-bottom: 5px;
                      a {
                        padding-block: 2px;
                        font-size: 12px;
                        line-height: 16px;
                        padding-inline: 15px 8px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        .right-profile-data-pp {
          width: 60%;
          .personal-info-block-pp {
            padding: 20px 10px;
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .profile-page-block-main-pp {
      padding-block: 30px;
      .profile-page-block-in-pp {
        gap: 15px;
        .left-profile-menu-pp {
          /* width: 40%; */
          .person-info-pp {
            padding: 10px;
            margin-bottom: 12px;
            .person-info-in-pp {
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 5px;
              .avatar {
                img {
                  width: 30px;
                }
              }
              .profile-info {
                .hello {
                  h4 {
                    font-size: 12px;
                    line-height: 18px;
                  }
                }
                .name {
                  h3 {
                    font-size: 16px;
                  }
                }
              }
            }
          }
          .account-details-pp {
            .acc-detail-list {
              .detail-box {
                .title {
                  padding: 15px 10px 10px;
                  gap: 5px;
                  h2 {
                    font-size: 12px;
                  }
                  img {
                    width: 15px;
                  }
                }
                .link-list {
                  ul {
                    li {
                      margin-bottom: 5px;
                      a {
                        padding-block: 2px;
                        padding-inline: 15px 8px;
                        font-size: 12px;
                        line-height: 16px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        .right-profile-data-pp {
          .personal-info-block-pp {
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .profile-page-block-main-pp {
      padding-block: 30px;
      .profile-page-block-in-pp {
        gap: 15px;
        .left-profile-menu-pp {
          .person-info-pp {
            padding: 15px;
            margin-bottom: 15px;
            .person-info-in-pp {
              gap: 10px;
              .avatar {
                width: 30px;
              }
              .profile-info {
                .hello {
                  h4 {
                    font-size: 12px;
                    line-height: 18px;
                  }
                }
                .name {
                  h3 {
                    font-size: 16px;
                  }
                }
              }
            }
          }
          .account-details-pp {
            .acc-detail-list {
              .detail-box {
                .title {
                  padding-left: 15px;
                  gap: 6px;
                  h2 {
                    font-size: 13px;
                  }
                  img {
                    width: 15px;
                  }
                }
                .link-list {
                  ul {
                    li {
                      a {
                        padding-inline: 38px 8px;
                        font-size: 14px;
                        line-height: 32px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        .right-profile-data-pp {
          /* width: 60%; */
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .acc-detail-list .detail-box {
      padding-bottom: 10px;
    }
    .title h2 {
      font-size: 18px !important;
    }
    .link-list ul li a {
      line-height: 36px !important;
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
  }
`;
