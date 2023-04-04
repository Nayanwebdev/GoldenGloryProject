import React, { useState } from "react";
import Slider from "react-slick";

import styled from "styled-components";

export default function MyNavTab() {
  const [activeTab, setActiveTab] = useState("tab1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const ProductDescs = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis delectus adipisci et explicabo qui deleniti, ut reiciendis illum, quasi, possimus ipsam in nihil corporis quaerat suscipit molestiae doloribus autem praesentium expedita ducimus. deleniti iste? Corporis culpa atque, ullam soluta, molestiae perferendis omnis dolorum quo dolorem autem, ipsa nobis modi ratione deserunt obcaecati laboriosam beatae! Expedita voluptates veritatis magni error ullam molestiae illum commodi in maxime sunt, inventore consequatur iusto aut, molestias id odit saepe hic facere optio non placeat necessitatibus!",
      ProductDetails: {
        productCode: "002576-1051395",
        height: "30.46 mm",
        width: "17.06 mm",
        productWeight: " 16.35 gram",
        clarity: "SI",
        color: "IJ",
        count: "16",
        shape: "Round",
        totalWeight: "0.128 carats",
      },
      reviews: {
        person1: { name: "john dev", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis delectus adipisci et explicabo qui deleniti, ut reiciendis illum, quasi, possimus ipsam in nihil corporis quaerat suscipit molestiae doloribus autem praesentium expedita ducimus" },
        person2: { name: "Michel Foucault", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis delectus adipisci et explicabo qui deleniti, ut reiciendis illum, quasi, possimus ipsam in nihil corporis quaerat suscipit molestiae doloribus autem praesentium expedita ducimus" },
      },
    },
  ];

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className={`nav-link ${activeTab === "tab1" ? "active" : ""}`} onClick={() => toggle("tab1")}>
            Description
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === "tab2" ? "active" : ""}`} onClick={() => toggle("tab2")}>
            Specification
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === "tab3" ? "active" : ""}`} onClick={() => toggle("tab3")}>
            Reviews
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className={`tab-pane ${activeTab === `tab1` ? "active" : ""}`}>
          <div className="description">
            <p>{ProductDescs[0].desc}</p>
          </div>
        </div>
        <div className={`tab-pane ${activeTab === "tab2" ? "active" : ""}`}>
          <div className="specification">
            <table>
              <tbody>
                <tr className="spec-row">
                  <th className="title">product Code</th>
                  <td className="detail">{ProductDescs[0].ProductDetails.productCode}</td>
                </tr>
                <tr className="spec-row">
                  <th className="title">clarity</th>
                  <td className="detail">{ProductDescs[0].ProductDetails.clarity}</td>
                </tr>
                <tr className="spec-row">
                  <th className="title">height</th>
                  <td className="detail">{ProductDescs[0].ProductDetails.height}</td>
                </tr>
                <tr className="spec-row">
                  <th className="title">total weight</th>
                  <td className="detail">{ProductDescs[0].ProductDetails.totalWeight}</td>
                </tr>
                <tr className="spec-row">
                  <th className="title">shape</th>
                  <td className="detail">{ProductDescs[0].ProductDetails.shape}</td>
                </tr>
                <tr className="spec-row">
                  <th className="title">count</th>
                  <td className="detail">{ProductDescs[0].ProductDetails.count}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={`tab-pane ${activeTab === "tab3" ? "active" : ""}`}>
          <div className="reviews">
            <Slider {...settings}>
              <div className="review-card">
                <p>{ProductDescs[0].reviews.person1.review}</p>
                <h2>{ProductDescs[0].reviews.person1.name}</h2>
              </div>
              <div className="review-card">
                <p>{ProductDescs[0].reviews.person2.review}</p>
                <h2>{ProductDescs[0].reviews.person2.name}</h2>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .nav-tabs {
    justify-content: center;
    border: none;
    li {
    }
    .nav-link {
      font-size: 28px;
      line-height: 38px;
      font-weight: 500;
      font-family: "Sorts Mill Goudy", sans-serif;
      border: none;
      border-radius: 0px;
      color: var(--text-color);
      cursor: pointer;
    }
    .active {
      background-color: var(--bg-color);
    }
  }
  .tab-content {
    padding-top: 26px;
    .description {
      padding: 55px;
      background-color: var(--bg-color);
    }
    .specification {
      max-width: 660px;
      margin: 0 auto;
      table {
        width: 100%;
        border: 1px solid var(--text-color);
        tbody {
          tr {
            border-bottom: 1px solid var(--text-color);
            &:last-child {
              border-bottom: none;
            }
            th {
              width: 40%;
              font-size: 18px;
              line-height: 38px;
              font-weight: 500;
              color: var(--text-color);
              padding: 0 15px;
              background-color: var(--bg-color);
            }
            td {
              width: 60%;
              font-size: 18px;
              line-height: 38px;
              color: var(--text-color);
              padding: 0 15px;
            }
          }
        }
      }
    }
    .reviews {
      .review-card {
        text-align: center;
        background: aliceblue;
        padding: 50px;
        p {
          padding-bottom: 20px;
        }
        h2 {
          text-transform: capitalize;
        }
      }
      .slick-slide {
        padding-right: 20px;
      }
    }
  }
  @media (min-width: 0px) and (max-width: 575px) {
    .nav-tabs {
      .nav-link {
        font-size: 18px;
        line-height: 28px;
        padding: 8px;
      }
    }
    .tab-content {
      padding-top: 16px;
    }
    .tab-content {
      .description {
        padding: 20px;
        text-align:center;
      }
      .specification {
        table {
          tbody {
            tr {
              th {
                font-size: 14px;
                line-height: 38px;
                padding: 0px 10px;
              }
              td {
                font-size: 14px;
                line-height: 38px;
                padding: 0px 10px;
              }
            }
          }
        }
      }
      .reviews {
        .slick-slide {
          padding-right: 0px;
        }
        .review-card {
          padding: 30px 20px;
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .nav-tabs {
      .nav-link {
        font-size: 18px;
        line-height: 28px;
        padding: 8px;
      }
    }
    .tab-content {
      padding-top: 16px;
    }
    .tab-content {
      .description {
        padding: 20px;
        text-align:center;
      }
      .specification {
        table {
          tbody {
            tr {
              th {
                font-size: 14px;
                line-height: 38px;
                padding: 0px 10px;
              }
              td {
                font-size: 14px;
                line-height: 38px;
                padding: 0px 10px;
              }
            }
          }
        }
      }
      .reviews {
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
