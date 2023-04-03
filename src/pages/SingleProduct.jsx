import React, { useState } from "react";
import styled from "styled-components";
import PageBanner from "../components/PageBanner";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pImg from "../assets/images/Pearls_Earring_7.png";
import pImg2 from "../assets/images/Pearls_Earring_7.png";
import pImg3 from "../assets/images/Pearls_Earring_7.png";
import pImg4 from "../assets/images/Pearls_Earring_7.png";
import RatingBlock from "../components/Rating";

export default function SingleProduct() {
  const [num, setNum] = useState(0);

  const incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  const decNum = () => {
    if (num > 0) {
      setNum(Number(num - 1));
    }
  };
  const handleChange = (e) => {
    setNum(e.target.value);
  };

  const productImgs = [pImg, pImg2, pImg3, pImg4];
  const product = [
    {
      name: "peackock earings",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.",
      availibility: "In Stock",
      sku: "012",
      color: ["red", "green", "blue"],
      tags: ["gold", "diamonds"],
      categories: ["earings", "chains", "neckless"],
      materials: ["Gold", "Stone", "Steel"],
      price: 599,
      qty: 5,
      discPrice: "$ 499",
      totalPrice: "",
    },
  ];

  return (
    <Wrapper>
      <div className="single-product-block-spp">
        <PageBanner pageTitle="Peacock Earrings" pageLink="singleProduct" />
        <div className="container">
          <div className="single-product-block-spp">
            <div className="left-img-block-spp">
              <Carousel showArrows={false} showIndicators={false} showStatus={false}>
                {productImgs.map((imgSrc, i) => (
                  <div className="slider-img-spp" key={i}>
                    <img src={imgSrc} alt="product" />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="right-info-block-spp">
              <div className="product-info-in-spp">
                <div className="title">
                  <h3>{product[0].name}</h3>
                </div>
                <div className="rating">
                  <RatingBlock />
                </div>
                <div className="price">
                  <h4 className="card-price">
                    {product[0].price}
                    <span className="card-disc-price">{product[0].discPrice} </span>
                  </h4>
                </div>
                <div className="stocks">
                  <div className="avilability">
                    <h2>Availibility :</h2> <span>{product[0].availibility}</span>
                  </div>
                  <div className="sku">
                    <h2>SKU :</h2> {product[0].sku}
                  </div>
                </div>
                <div className="discription">
                  <p>{product[0].description}</p>
                </div>
                <div className="color">
                  <h3 className="mini-title">color</h3>
                  <ul>
                    {product[0].color.map((clr, i) => (
                      <li key={i}>{clr}</li>
                    ))}
                  </ul>
                </div>
                <div className="material">
                  <h3 className="mini-title">materials</h3>
                  <ul>
                    {product[0].materials.map((mat, i) => (
                      <li key={i}>{mat}</li>
                    ))}
                  </ul>
                </div>
                <div className="total-price">
                  <h3 className="mini-title">price</h3>
                  {product[0].price}
                </div>
                <div className="add-to-cart">
                  <div className="count">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <button className="btn btn-outline-primary" type="button" onClick={decNum}>
                          -
                        </button>
                      </div>
                      <input type="number" className="form-control count-value" value={num} onChange={handleChange} />
                      <div className="input-group-prepend">
                        <button className="btn btn-outline-primary" type="button" onClick={incNum}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="add-to-cart-btn">
                    <button className="btn-main-hp dark-btn-hp cart-btn">add to cart</button>
                  </div>
                </div>
                <div className="categories">
                  <h3>Categories :</h3>
                  <ul>
                    {product[0].categories.map((cat, i) => (
                      <li key={i}>{cat}</li>
                    ))}
                  </ul>
                </div>
                <div className="tags">
                  <h3>tags :</h3>
                  <ul>
                    {product[0].tags.map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                  </ul>
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
  .single-product-block-spp {
    .single-product-block-spp {
      display: flex;
      gap: 30px;
      .left-img-block-spp {
        width: 40%;
        .carousel {
          .slider-wrapper {
            .slider {
              .slide {
                padding: 15px;
                .slider-img-spp {
                  img {
                  }
                }
              }
              .selected {
                .slider-img-spp {
                  box-shadow: 0 0 15px rgb(193, 143, 97, 0.15);
                  padding: 20px;
                }
              }
            }
          }
          .thumbs-wrapper {
            .thumbs {
              text-align: center;
              .thumb {
                margin-inline: 10px;
                box-shadow: 0 0 15px rgb(193, 143, 97, 0.15);
                &:hover {
                  border: none;
                }
                &:focus {
                  border: none;
                }
              }
              .selected {
                border: none;
              }
            }
          }
        }
      }
      .right-info-block-spp {
        width: 40%;
        padding-top: 15px;
        .product-info-in-spp {
          .title {
            padding-bottom: 5px;
            h3 {
              font-size: 30px;
              line-height: 46px;
              font-weight: 600;

              text-transform: capitalize;
              color: var(--text-color);
            }
          }
          .rating {
            padding-bottom: 5px;
          }
          .price {
            padding-bottom: 5px;
            border-bottom: 1px solid var(--golden-color);
            h4 {
              font-size: 25px;
              line-height: 34px;
              color: var(--text-color);
            }
          }
          .stocks {
            display: flex;
            align-items: center;
            gap: 40px;
            padding-block: 16px 6px;
            .avilability {
              display: flex;
              align-items: center;
              gap: 5px;
              font-size: 28px;
              h2 {
                line-height: 40px;
                color: var(--golden-color);
              }
              span {
                line-height: 40px;
                font-family: "Sorts Mill Goudy", sans-serif;
                color: var(--text-color);
              }
            }
            .sku {
              display: flex;
              align-items: center;
              font-size: 28px;
              gap: 5px;
            }
          }
          .discription {
          }
          .color {
            ul {
              display: flex;
              gap: 20px;
              li {
              }
            }
          }
          .material {
            ul {
              display: flex;
              gap: 20px;
              li {
                width: 136px;
                line-height: 36px;
                background-color: var(--text-color);
                border-radius: 20px;
                text-align: center;
                color: var(--white-color);
              }
            }
          }
          .tital-price {
          }

          .add-to-cart {
            .count {
            }
            .input-group {
              gap: 5px;
              .input-group-prepend {
                .btn {
                  border-color: var(--text-color);
                  color: var(--text-color);
                  :hover {
                    background-color: var(--text-color);
                    color: var(--white-color);
                  }
                }
              }
              .count-value {
                width: 50px;
                flex: inherit;
                border-color: var(--text-color);
                color: var(--text-color);
              }
            }
          }
          .add-to-cart-btn {
            .btn-main-hp {
            }
          }
          .categories {
            h3 {
            }
            ul {
              li {
              }
            }
          }
          .tags {
            h3 {
            }
            ul {
              li {
              }
            }
          }
        }
      }
    }
  }
  .mini-title {
    font-size: 20px;
    line-height: 26px;
    color: var(--golden-color);
    font-weight: 600;
  }
`;
