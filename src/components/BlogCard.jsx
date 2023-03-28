import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function BlogCard({ title, imgSrc, postBy, comment, desc, date, month }) {
  return (
    <Wrapper>
      <div className="blog-card-block-bcc">
        <div className="blog-card-in-bcc">
          <div className="card-img-bcc">
            <img src={imgSrc} alt="blog-img" />
            <div className="blog-date-bcc">
              <h3>{date}</h3>
              <h4>{month}</h4>
            </div>
          </div>
          <div className="card-content-bcc">
            <div className="title-bcc">
              <h2>{title}</h2>
            </div>
            <div className="post-by-bcc">
              <h4>Posted By {postBy}</h4>
              <span></span>
              <h4>{comment} Comments</h4>
            </div>
            <p>{desc}</p>
            <NavLink to="/" className="btn-main-hp dark-btn-hp">
              read more
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .blog-card-block-bcc {
    .blog-card-in-bcc {
      .card-img-bcc {
        height: 383px;
        position: relative;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
        .blog-date-bcc {
          position: absolute;
          top: 20px;
          left: 20px;
          text-align: center;
          background: var(--text-color);
          padding: 8px;
          h3 {
            font-size: 22px;
            line-height: 30px;
            color: var(--white-color);
          }
          h4 {
            font-size: 14px;
            line-height: 20px;
            color: var(--white-color);
          }
        }
      }
      .card-content-bcc {
        padding: 20px 5px 0px 0px;
        .title-bcc {
          h2 {
            font-size: 30px;
            line-height: 42px;
            padding-bottom: 6px;
          }
        }
        .post-by-bcc {
          display: flex;
          gap: 10px;
          padding-bottom: 10px;
          h4 {
            font-size: 14px;
            line-height: 20px;
            color: var(--golden-color);
          }
          span {
            height: 20px;
            border: 1px solid var(--text-color);
          }
        }
        p {
          font-size: 15px;
          line-height: 20px;
          padding-bottom: 15px;
        }
        .btn-main-hp {
          width: 128px;
          font-size: 14px;
          line-height: 45px;
        }
      }
    }
  }
  @media (min-width: 0px) and (max-width: 575px) {
    .blog-card-block-bcc {
      .blog-card-in-bcc {
        .card-img-bcc {
          height: 240px;
        }
        .card-content-bcc {
          .title-bcc h2 {
            font-size: 27px;
            line-height: 30px;
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .blog-card-block-bcc {
      .blog-card-in-bcc {
        .card-img-bcc {
          height: 300px;
        }
        .card-content-bcc {
          .title-bcc h2 {
            font-size: 28px;
            line-height: 32px;
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .blog-card-block-bcc {
      .blog-card-in-bcc {
        .card-img-bcc {
          height: 355px;
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .blog-card-block-bcc {
      .blog-card-in-bcc {
        .card-img-bcc {
          height: 305px;
        }
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
  }
`;
