import React from "react";
import styled from "styled-components";
import emptyWishlist from "../assets/images/empty_wishlist.png";
import orderImg from "../assets/images/Pearls_Earring_7.webp";
import orderImg1 from "../assets/images/credcard_img.jpg";

const NotificationBlock = () => {
  const Notifications = [
    {
      imgSrc: orderImg1,
      text: "📢📢 Earn 4X SuperCoins or 5% Unlimited Cashback. Apply Now",
      date: "10 Mar 2022",
    },
    {
      imgSrc: orderImg,
      text: "The refund amount for your order ... has been successfully processed. details, click here",
      date: "10 Mar 2023",
    },
  ];
  return (
    <Wrapper>
      <div className="wishlist-block-main notification-block-main">
        <div className="wishlist-block-in notification-block-in">
          {Notifications.length > 0 ? (
            <div className="wishlist-block">
              <h3>My Wishlists</h3>
              {Notifications.map((item, i) => (
                <div className="wish-card" key={i}>
                  <div className="left-img">
                    <img src={item.imgSrc} alt="wishlist" />
                  </div>
                  <div className="right-text">
                    <h5>{item.text}</h5>
                    <h4>{item.date}</h4>
                    <a href="">more detail ›</a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-block">
              <img src={emptyWishlist} alt="" />
              <span>Empty Notifciation</span>
              <p>You have no items in your wishlist. Start adding!</p>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default NotificationBlock;

const Wrapper = styled.div`
  .wishlist-block-main {
    .wishlist-block-in {
      .wishlist-block {
        h3 {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 30px;
        }
        .wish-card {
          display: flex;
          align-items: center;
          border: 1px solid rgb(224, 224, 224);
          border-bottom: none;
          max-width: 800px;
          padding: 20px;
          &:hover {
            background: var(--bg-color);
          }
          &:last-child {
            border-bottom: 1px solid rgb(224, 224, 224);
          }
          .left-img {
            max-width: 100px;
            width: 100%;
            text-align: center;
            img {
              width: 70px;
              height: 70px;
              object-fit: cover;
            }
          }
          .right-text {
            width: calc(100% - 100px);
            h5 {
              font-size: 14px;
              padding-bottom: 10px;
            }
            h4 {
              font-size: 12px;
              font-weight: 500;
              color: #878787;
            }
            a {
              font-size: 14px;
              font-weight: 500;
              text-transform: capitalize;
              display: block;
              text-align: end;
              padding-right: 20px;
            }
          }
        }
      }
      .empty-block {
        padding-top: 100px;
        text-align: center;
        display: flex;
        flex-direction: column;
        img {
          width: 250px;
          margin: 0 auto;
          object-fit: cover;
        }
        span {
          display: block;
          font-size: 20px;
          font-weight: 500;
          margin-top: 30px;
        }
        p {
          font-size: 14px;
          margin-top: 8px;
        }
      }
    }
  }

  @media (min-width: 0px) and (max-width: 575px) {
    .wishlist-block-main .wishlist-block-in .wishlist-block .wish-card {
      flex-direction: column;
      gap: 10px;
      padding: 10px;
    }
    .wishlist-block-main .wishlist-block-in .wishlist-block .wish-card .right-text h5 {
      font-size: 13px;
    }
    .wishlist-block-main .wishlist-block-in .wishlist-block .wish-card .right-text {
      width: 100%;
    }
    .wishlist-block-main .wishlist-block-in .wishlist-block .wish-card .right-text a {
      font-size: 12px;
      padding-right: 10px;
      padding-top: 6px;
    }
    .empty-block img {
      width: 100% !important;
    }
    .empty-block span {
      font-size: 15px !important;
      margin-top: 20px !important;
    }
    .empty-block p {
      font-size: 12px !important;
      line-height: 16px !important;
      margin-top: 8px !important;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .wishlist-block-main .wishlist-block-in .wishlist-block .wish-card {
      flex-direction: column;
      gap: 10px;
      padding: 10px;
    }
    .wishlist-block-main .wishlist-block-in .wishlist-block .wish-card .right-text {
      width: 100%;
    }
    .wishlist-block-main .wishlist-block-in .wishlist-block .wish-card .right-text a {
      padding-right: 10px;
      padding-top: 6px;
    }
    .empty-block img {
      width: 100% !important;
    }
    .empty-block span {
      font-size: 15px !important;
      margin-top: 20px !important;
    }
    .empty-block p {
      font-size: 12px !important;
      line-height: 16px !important;
      margin-top: 8px !important;
    }
  }
`;
